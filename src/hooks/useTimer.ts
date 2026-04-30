import { useEffect, useState, useCallback, useRef } from 'react';
import { TimerSettings, TimerState } from '../types';
import { audioManager } from '../utils/audioManager';
import * as Haptics from 'expo-haptics';

/**
 * useTimer Hook
 * Manages all timer logic for rounds, breaks, and transitions
 * 
 * Logic flow:
 * 1. User starts timer
 * 2. App counts down round time
 * 3. When round ends (timeLeft == 0):
 *    - Play bell sound
 *    - Trigger haptic feedback
 *    - Switch to break if more rounds remain
 * 4. Count down break time
 * 5. Repeat until all rounds complete
 */

export const useTimer = (settings: TimerSettings) => {
  const [timerState, setTimerState] = useState<TimerState>({
    timeLeft: settings.roundTime,
    isRound: true,
    currentRound: 1,
    isRunning: false,
    isFinished: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasPlayedTransitionRef = useRef(false);

  /**
   * Main timer tick - runs every second when timer is active
   */
  const tick = useCallback(() => {
    setTimerState(prevState => {
      // If timer just reached 0, we need to transition
      if (prevState.timeLeft === 1) {
        // Decrement to 0
        let newState = {
          ...prevState,
          timeLeft: 0,
        };

        // Schedule transition for next tick
        setTimeout(() => handleTransition(), 50);

        return newState;
      }

      // Normal countdown
      return {
        ...prevState,
        timeLeft: prevState.timeLeft - 1,
      };
    });
  }, []);

  /**
   * Handle transition between round and break (or end of session)
   */
  const handleTransition = useCallback(async () => {
    setTimerState(prevState => {
      // If currently in a round
      if (prevState.isRound) {
        const isLastRound = prevState.currentRound >= settings.numberOfRounds;

        // Play bell sound and haptics
        audioManager.playBell();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        if (isLastRound) {
          // Session finished!
          return {
            ...prevState,
            isFinished: true,
            isRunning: false,
          };
        }

        // Transition to break
        return {
          ...prevState,
          isRound: false,
          timeLeft: settings.breakTime,
        };
      } else {
        // Currently in break, transition to next round
        audioManager.playBell();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        return {
          ...prevState,
          isRound: true,
          currentRound: prevState.currentRound + 1,
          timeLeft: settings.roundTime,
        };
      }
    });
  }, [settings]);

  /**
   * Start/resume the timer
   */
  const start = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: true }));
  }, []);

  /**
   * Pause the timer
   */
  const pause = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: false }));
  }, []);

  /**
   * Reset the timer to initial state
   */
  const reset = useCallback(() => {
    setTimerState({
      timeLeft: settings.roundTime,
      isRound: true,
      currentRound: 1,
      isRunning: false,
      isFinished: false,
    });
    hasPlayedTransitionRef.current = false;
  }, [settings.roundTime]);

  /**
   * Setup and cleanup interval effect
   */
  useEffect(() => {
    if (timerState.isRunning && !timerState.isFinished) {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerState.isRunning, timerState.isFinished, tick]);

  return {
    ...timerState,
    start,
    pause,
    reset,
  };
};
