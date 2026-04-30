import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { audioManager } from './utils/audioManager';
import { TimerSettings } from './types';
import { useTimer } from './hooks/useTimer';
import { TimerScreen } from './screens/TimerScreen';
import { SettingsScreen } from './screens/SettingsScreen';

/**
 * Main App Component
 * 
 * StrikeFlow - Muay Thai / K1 Sparring Timer
 * 
 * Structure:
 * - TimerScreen: Main fullscreen timer display
 * - SettingsScreen: Configuration and presets
 * - Manages settings state and timer lifecycle
 */

export default function App() {
  const [screenMode, setScreenMode] = useState<'timer' | 'settings'>('timer');

  // Default settings
  const [settings, setSettings] = useState<TimerSettings>({
    roundTime: 180, // 3 minutes
    breakTime: 60, // 1 minute
    numberOfRounds: 5,
    taskSparEnabled: false,
  });

  // Initialize timer with current settings
  const timer = useTimer(settings);

  /**
   * Initialize audio system on app load
   */
  useEffect(() => {
    audioManager.initialize();

    return () => {
      audioManager.cleanup();
    };
  }, []);

  /**
   * Reset timer when settings change
   */
  const handleSettingsChange = (newSettings: TimerSettings) => {
    setSettings(newSettings);
    timer.reset();
    setScreenMode('timer');
  };

  return (
    <View style={styles.container}>
      {screenMode === 'timer' ? (
        <TimerScreen
          timerState={timer}
          settings={settings}
          onStart={timer.start}
          onPause={timer.pause}
          onReset={timer.reset}
          onSettings={() => setScreenMode('settings')}
        />
      ) : (
        <SettingsScreen
          settings={settings}
          onSettingsChange={handleSettingsChange}
          onClose={() => setScreenMode('timer')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
