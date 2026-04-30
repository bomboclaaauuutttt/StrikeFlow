import { useState, useEffect, useCallback } from 'react';
import { getRandomTask } from '../utils/tasks';
import { TimerState } from '../types';

/**
 * useTaskSpar Hook
 * Manages Task Spar mode logic
 * 
 * Features:
 * - Randomly selects a task for each round
 * - Ensures no task repeats consecutively
 * - Manages task visibility during round/break
 * - Handles pre-round countdown (3-2-1 display)
 */

export const useTaskSpar = (
  timerState: TimerState,
  isEnabled: boolean,
  preCountdownTime: number = 3
) => {
  const [currentTask, setCurrentTask] = useState<string>('');
  const [nextTask, setNextTask] = useState<string>('');
  const [showPreRoundTask, setShowPreRoundTask] = useState(false);
  const [preCountdownValue, setPreCountdownValue] = useState(preCountdownTime);

  /**
   * Detect when a new round starts and generate a task
   */
  useEffect(() => {
    if (!isEnabled || !timerState.isRound) {
      setShowPreRoundTask(false);
      setPreCountdownValue(preCountdownTime);
      return;
    }

    // Generate a new task for this round
    const task = getRandomTask(currentTask);
    setNextTask(task);
    setShowPreRoundTask(true);
    setPreCountdownValue(preCountdownTime);
  }, [timerState.currentRound, timerState.isRound, isEnabled, currentTask, preCountdownTime]);

  /**
   * Pre-round countdown animation
   * Shows task for 3 seconds before round officially starts
   */
  useEffect(() => {
    if (!showPreRoundTask) {
      return;
    }

    if (preCountdownValue > 0) {
      const timer = setTimeout(() => {
        setPreCountdownValue(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Countdown finished, set the task as current
      setCurrentTask(nextTask);
      setShowPreRoundTask(false);
    }
  }, [showPreRoundTask, preCountdownValue, nextTask]);

  /**
   * Clear task when session ends
   */
  useEffect(() => {
    if (timerState.isFinished) {
      setCurrentTask('');
      setShowPreRoundTask(false);
    }
  }, [timerState.isFinished]);

  return {
    currentTask,
    showPreRoundTask,
    preCountdownValue,
    isShowingTask: isEnabled && timerState.isRound && currentTask !== '',
  };
};
