// Type definitions for the StrikeFlow app

export interface TimerSettings {
  roundTime: number; // in seconds
  breakTime: number; // in seconds
  numberOfRounds: number;
  taskSparEnabled: boolean;
}

export interface TimerState {
  timeLeft: number;
  isRound: boolean;
  currentRound: number;
  isRunning: boolean;
  isFinished: boolean;
}

export interface PresetConfig {
  name: string;
  roundTime: number;
  breakTime: number;
  numberOfRounds: number;
}

export type SoundType = 'bell' | 'countdownBlip';
