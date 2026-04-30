import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import { TimerSettings, PresetConfig } from '../types';

interface SettingsScreenProps {
  settings: TimerSettings;
  onSettingsChange: (settings: TimerSettings) => void;
  onClose: () => void;
}

/**
 * SettingsScreen Component
 * Allows users to configure timer and session settings
 * 
 * Features:
 * - Adjust round time, break time, number of rounds
 * - Toggle Task Spar mode
 * - Quick presets (K1, Muay Thai)
 * - Big touch targets for easy adjustment
 */

const PRESETS: PresetConfig[] = [
  {
    name: 'K1: 3x3min',
    roundTime: 180,
    breakTime: 60,
    numberOfRounds: 3,
  },
  {
    name: 'Muay Thai: 5x3min',
    roundTime: 180,
    breakTime: 60,
    numberOfRounds: 5,
  },
  {
    name: 'Conditioning: 10x1min',
    roundTime: 60,
    breakTime: 30,
    numberOfRounds: 10,
  },
];

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  settings,
  onSettingsChange,
  onClose,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);

  // Update handlers
  const updateRoundTime = (delta: number) => {
    const newTime = Math.max(10, Math.min(600, localSettings.roundTime + delta));
    setLocalSettings({ ...localSettings, roundTime: newTime });
  };

  const updateBreakTime = (delta: number) => {
    const newTime = Math.max(5, Math.min(300, localSettings.breakTime + delta));
    setLocalSettings({ ...localSettings, breakTime: newTime });
  };

  const updateRounds = (delta: number) => {
    const newRounds = Math.max(1, Math.min(20, localSettings.numberOfRounds + delta));
    setLocalSettings({ ...localSettings, numberOfRounds: newRounds });
  };

  const toggleTaskSpar = () => {
    setLocalSettings({
      ...localSettings,
      taskSparEnabled: !localSettings.taskSparEnabled,
    });
  };

  const applyPreset = (preset: PresetConfig) => {
    setLocalSettings({
      ...localSettings,
      roundTime: preset.roundTime,
      breakTime: preset.breakTime,
      numberOfRounds: preset.numberOfRounds,
    });
  };

  const saveAndClose = () => {
    onSettingsChange(localSettings);
    onClose();
  };

  // Format seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SETTINGS</Text>
        </View>

        {/* Presets Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QUICK PRESETS</Text>
          {PRESETS.map((preset, index) => (
            <TouchableOpacity
              key={index}
              style={styles.presetButton}
              onPress={() => applyPreset(preset)}
            >
              <Text style={styles.presetButtonText}>{preset.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Round Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ROUND TIME</Text>
          <Text style={styles.currentValue}>{formatTime(localSettings.roundTime)}</Text>
          <View style={styles.controlRow}>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateRoundTime(-30)}
            >
              <Text style={styles.minusButtonText}>-30s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateRoundTime(-5)}
            >
              <Text style={styles.minusButtonText}>-5s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateRoundTime(5)}
            >
              <Text style={styles.plusButtonText}>+5s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateRoundTime(30)}
            >
              <Text style={styles.plusButtonText}>+30s</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Break Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BREAK TIME</Text>
          <Text style={styles.currentValue}>{formatTime(localSettings.breakTime)}</Text>
          <View style={styles.controlRow}>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateBreakTime(-15)}
            >
              <Text style={styles.minusButtonText}>-15s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateBreakTime(-5)}
            >
              <Text style={styles.minusButtonText}>-5s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateBreakTime(5)}
            >
              <Text style={styles.plusButtonText}>+5s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateBreakTime(15)}
            >
              <Text style={styles.plusButtonText}>+15s</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Number of Rounds */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NUMBER OF ROUNDS</Text>
          <Text style={styles.currentValue}>{localSettings.numberOfRounds}</Text>
          <View style={styles.controlRow}>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateRounds(-1)}
            >
              <Text style={styles.minusButtonText}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.minusButton}
              onPress={() => updateRounds(-5)}
            >
              <Text style={styles.minusButtonText}>-5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateRounds(5)}
            >
              <Text style={styles.plusButtonText}>+5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => updateRounds(1)}
            >
              <Text style={styles.plusButtonText}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Task Spar Toggle */}
        <View style={styles.section}>
          <View style={styles.taskSparHeader}>
            <Text style={styles.sectionTitle}>TASK SPAR MODE</Text>
            <Switch
              value={localSettings.taskSparEnabled}
              onValueChange={toggleTaskSpar}
              trackColor={{ false: '#767577', true: '#81c784' }}
              thumbColor={localSettings.taskSparEnabled ? '#2bff4a' : '#f4f3f4'}
              style={styles.switch}
            />
          </View>
          <Text style={styles.taskSparDescription}>
            {localSettings.taskSparEnabled
              ? 'Random training tasks will appear each round'
              : 'Disabled - timer only mode'}
          </Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveAndClose}>
          <Text style={styles.saveButtonText}>SAVE & CLOSE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 2,
  },
  section: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    letterSpacing: 1,
  },
  currentValue: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ff2b2b',
    marginBottom: 15,
    letterSpacing: 1,
  },
  controlRow: {
    flexDirection: 'row',
    gap: 10,
  },
  minusButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#ff2b2b',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  plusButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#2bff4a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  presetButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#555',
  },
  presetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  taskSparHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  taskSparDescription: {
    fontSize: 14,
    color: '#aaa',
    fontStyle: 'italic',
  },
  saveButton: {
    paddingVertical: 16,
    backgroundColor: '#2bff4a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 1,
  },
});
