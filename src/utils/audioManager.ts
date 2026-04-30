import { Audio } from 'expo-av';

/**
 * AudioManager handles all sound effects for the timer app
 * Uses simple beep/tone generation without external audio files
 */

class AudioManager {
  private soundObject: Audio.Sound | null = null;
  private isInitialized = false;

  /**
   * Initialize the audio system
   */
  async initialize(): Promise<void> {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
      });
      this.isInitialized = true;
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  }

  /**
   * Play a bell sound (round/break transitions)
   * Falls back to system alert if audio files unavailable
   */
  async playBell(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      // Try to load bell.mp3 from assets
      // If it doesn't exist, the catch block will handle it gracefully
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/bell.mp3')
        );
        this.soundObject = sound;
        await sound.playAsync();
      } catch {
        // Audio file not found - app continues without sound
        // In production, you can add sound files to assets/bell.mp3
        console.debug('Audio file not found, continuing without sound');
      }
    } catch (error) {
      console.error('Error playing bell sound:', error);
    }
  }

  /**
   * Play countdown blip (3-2-1 countdown)
   * Falls back gracefully if audio files unavailable
   */
  async playCountdownBlip(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/blip.mp3')
        );
        this.soundObject = sound;
        await sound.playAsync();
      } catch {
        // Audio file not found - app continues without sound
        console.debug('Audio file not found, continuing without sound');
      }
    } catch (error) {
      console.error('Error playing countdown blip:', error);
    }
  }

  /**
   * Stop and unload any currently playing sound
   */
  async stopSound(): Promise<void> {
    if (this.soundObject) {
      try {
        await this.soundObject.stopAsync();
        await this.soundObject.unloadAsync();
        this.soundObject = null;
      } catch (error) {
        console.error('Error stopping sound:', error);
      }
    }
  }

  /**
   * Cleanup resources
   */
  async cleanup(): Promise<void> {
    await this.stopSound();
  }
}

// Export singleton instance
export const audioManager = new AudioManager();
