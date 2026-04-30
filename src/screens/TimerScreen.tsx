import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { TimerSettings, TimerState } from '../types';
import { useTaskSpar } from '../hooks/useTaskSpar';

interface TimerScreenProps {
  timerState: TimerState;
  settings: TimerSettings;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSettings: () => void;
}

/**
 * TimerScreen Component
 * Main fullscreen timer display
 * 
 * Visual design:
 * - Bright red background during rounds (#ff2b2b)
 * - Bright green background during breaks (#2bff4a)
 * - Large centered timer display
 * - Big touch targets for control buttons
 * - Task Spar mode integration for displaying training tasks
 */

export const TimerScreen: React.FC<TimerScreenProps> = ({
  timerState,
  settings,
  onStart,
  onPause,
  onReset,
  onSettings,
}) => {
  const { width, height } = Dimensions.get('window');

  // Task Spar logic
  const taskSpar = useTaskSpar(timerState, settings.taskSparEnabled);

  // Background color based on round or break
  const backgroundColor = timerState.isRound ? '#ff2b2b' : '#2bff4a';

  // Text color - inverse of background for high contrast
  const textColor = timerState.isRound ? '#ffffff' : '#000000';

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Determine round/break label
  const phaseLabel = timerState.isRound
    ? `ROUND ${timerState.currentRound}/${settings.numberOfRounds}`
    : 'BREAK';

  // Progress percentage for visual feedback
  const maxTime = timerState.isRound ? settings.roundTime : settings.breakTime;
  const progress = (timerState.timeLeft / maxTime) * 100;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor, borderColor: textColor },
      ]}
    >
      {/* Pre-round task countdown display */}
      {taskSpar.showPreRoundTask && (
        <View style={[styles.preRoundContainer, { backgroundColor }]}>
          <Text style={[styles.preRoundLabel, { color: textColor }]}>
            GET READY
          </Text>
          <Text style={[styles.preRoundTask, { color: textColor }]}>
            {taskSpar.nextTask}
          </Text>
          <Text style={[styles.preRoundCountdown, { color: textColor }]}>
            {taskSpar.preCountdownValue}
          </Text>
        </View>
      )}

      {/* Top section: Round/Break label and settings button */}
      <View style={styles.topBar}>
        <Text style={[styles.phaseLabel, { color: textColor }]}>
          {phaseLabel}
        </Text>
        <TouchableOpacity onPress={onSettings} style={styles.settingsButton}>
          <Text style={[styles.settingsButtonText, { color: textColor }]}>
            ⚙️
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main timer display - large centered */}
      <View style={styles.timerSection}>
        <Text style={[styles.timerText, { color: textColor }]}>
          {formatTime(timerState.timeLeft)}
        </Text>

        {/* Task display during round (if Task Spar enabled) */}
        {taskSpar.isShowingTask && (
          <Text style={[styles.taskText, { color: textColor }]}>
            {taskSpar.currentTask}
          </Text>
        )}
      </View>

      {/* Progress bar showing time remaining */}
      <View style={[styles.progressBarContainer, { backgroundColor: `${textColor}20` }]}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress}%`,
              backgroundColor: textColor,
            },
          ]}
        />
      </View>

      {/* Control buttons */}
      <View style={styles.buttonContainer}>
        {/* Start/Pause button */}
        <TouchableOpacity
          style={[styles.button, styles.primaryButton, { borderColor: textColor }]}
          onPress={timerState.isRunning ? onPause : onStart}
          disabled={timerState.isFinished}
        >
          <Text style={[styles.buttonText, { color: textColor }]}>
            {timerState.isRunning ? 'PAUSE' : 'START'}
          </Text>
        </TouchableOpacity>

        {/* Reset button */}
        <TouchableOpacity
          style={[styles.button, { borderColor: textColor }]}
          onPress={onReset}
        >
          <Text style={[styles.buttonText, { color: textColor }]}>
            RESET
          </Text>
        </TouchableOpacity>
      </View>

      {/* Session complete message */}
      {timerState.isFinished && (
        <View style={[styles.finishedContainer, { backgroundColor }]}>
          <Text style={[styles.finishedText, { color: textColor }]}>
            SESSION COMPLETE! 🏆
          </Text>
          <Text style={[styles.finishedSubtext, { color: textColor }]}>
            Great workout!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  phaseLabel: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 2,
  },
  settingsButton: {
    padding: 10,
  },
  settingsButtonText: {
    fontSize: 28,
  },
  preRoundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 3,
  },
  preRoundLabel: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  preRoundTask: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  preRoundCountdown: {
    fontSize: 48,
    fontWeight: '700',
  },
  timerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  timerText: {
    fontSize: 120,
    fontWeight: '700',
    letterSpacing: -5,
  },
  taskText: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  progressBarContainer: {
    height: 12,
    borderRadius: 6,
    marginHorizontal: 20,
    marginBottom: 30,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 12,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  primaryButton: {
    flex: 1.2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  finishedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  finishedText: {
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  finishedSubtext: {
    fontSize: 24,
    fontWeight: '600',
  },
});
