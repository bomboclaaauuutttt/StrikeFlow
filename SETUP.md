# Quick Start Guide for StrikeFlow

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd StrikeFlow
npm install
```

### Step 2: Start the App
```bash
npm start
```

You'll see output like:
```
Starting Metro Bundler on port 8081.
Tunnel ready.
...
┌─────────────────────────────────────────┐
│                                         │
│   Scan this QR code with Expo Go      │
│                                         │
│          [QR CODE HERE]                │
│                                         │
└─────────────────────────────────────────┘
```

### Step 3: Open on Your Phone
- **iOS**: 
  1. Point your camera at the QR code
  2. Tap the link that appears
  3. Opens in Expo Go
  
- **Android**:
  1. Open Expo Go app
  2. Tap "Scan QR Code"
  3. Point at the QR code
  4. App loads

### ✅ Done! The timer should now be running on your phone

---

## 📱 How to Use the App

### Main Timer Screen (What You See First)

1. **BIG TIMER** - Shows countdown in MM:SS format
2. **ROUND/BREAK** - Displays current status and round number
3. **START Button** - Press to begin (glowing red during rounds, green during breaks)
4. **PAUSE Button** - Press while timer is running to pause
5. **RESET Button** - Resets everything to start over
6. **⚙️ Icon (top right)** - Opens settings

### Using Task Spar Mode

1. Go to **Settings** (⚙️ icon)
2. Toggle **"TASK SPAR MODE"** to ON
3. Press **"SAVE & CLOSE"**
4. Before each round, you'll see:
   - **"GET READY"** at the top
   - **The training task** (e.g., "Land 15 jabs") in BIG TEXT
   - **Countdown: 3...2...1**
5. Once round starts, the task stays SMALL under the timer
6. After break, next random task appears

### Changing Settings

Press the ⚙️ icon to access:

**Quick Presets:**
- K1: 3x3min (3 rounds, 3 minutes each, 1 min break)
- Muay Thai: 5x3min (5 rounds, 3 minutes each, 1 min break)
- Conditioning: 10x1min (10 rounds, 1 minute each, 30s break)

**Custom Settings:**
- Adjust round time with **±5s**, **±30s** buttons
- Adjust break time with **±5s**, **±15s** buttons
- Adjust rounds with **±1**, **±5** buttons
- Toggle Task Spar mode ON/OFF

---

## 🎯 Task Spar Examples

When you enable Task Spar mode, you'll get random tasks like:

- "Land 15 jabs"
- "Land 5 1-2 combinations"
- "Land 20 low kicks"
- "Only body shots"
- "Defend and counter only"
- "Only teeps for 30 seconds"
- "No head strikes"
- "Clinch work only"
- "Footwork focus - circle around"
- "Land 10 kicks"
- "Only sweeps allowed"
- "Keep hands up - no offensive strikes"
- "Switch stance every 10 seconds"
- "Land 8 elbows"
- "Pressure and push pace"
- "Target the liver"
- "Triangle step drill"
- "Catch kicks and counter"
- "Explosive combinations"
- "Grappling exchanges only"

---

## 🎨 Color Guide

- **Bright Red Background** (#ff2b2b) = ROUND - Go hard!
- **Bright Green Background** (#2bff4a) = BREAK - Rest up

---

## ⚙️ Running on Different Devices

### On Emulator/Simulator Instead of Phone

**Android Emulator:**
```bash
npm run android
```
(Make sure Android emulator is running first)

**iOS Simulator (Mac only):**
```bash
npm run ios
```

### On Web (Testing - not ideal for training)
```bash
npm run web
```

---

## 🔊 Sound & Vibration

The app includes:
- **Bell sounds** on round/break transitions (if audio files added)
- **Haptic feedback** (vibration) when transitioning between rounds and breaks

To add custom bell sounds:
1. Get an .mp3 file of a bell sound
2. Save to `assets/bell.mp3`
3. Restart the app

---

## 🐛 Troubleshooting

**App won't start?**
- Press `c` in terminal to clear cache
- Run `npm install` again

**Timer not responding?**
- Make sure you pressed START button
- Check if session already finished (shows "SESSION COMPLETE!")
- Press RESET to start fresh

**Task Spar not working?**
- Go to Settings and toggle **"TASK SPAR MODE" ON**
- Make sure you're looking at the pre-round countdown

**Audio not working?**
- Check phone volume isn't muted
- Audio files are optional - app works fine without them

**Still have issues?**
- Press `q` in terminal to stop the dev server
- Run `npm start -c` (with cache clear)
- Try again

---

## 💡 Pro Tips

1. **Use presets first** - Start with "Muay Thai: 5x3min" to test
2. **Full screen** - Fullscreen the timer for best visibility
3. **Gloved training** - Big buttons are designed for gloved hands
4. **Volume up** - Make sure phone volume is on for bell sounds
5. **Dark mode** - App works great in dark environments (gyms)

---

## 📝 Customizing Tasks

Want to add your own training tasks?

1. Open `src/utils/tasks.ts`
2. Find the `TRAINING_TASKS` array
3. Add your new tasks:
   ```typescript
   export const TRAINING_TASKS = [
     "Your new task",
     "Another task",
     // ... existing tasks
   ];
   ```
4. Save the file
5. App auto-reloads with your new tasks!

---

## ❓ FAQ

**Q: Can I use this offline?**
A: Yes! Once it loads, the app works completely offline.

**Q: Can I keep the screen on during training?**
A: Yes, the screen will stay on while the timer is running.

**Q: Is there a limit to number of rounds?**
A: Up to 20 rounds max (but you can do more in theory).

**Q: Can I customize the colors?**
A: Yes! Edit the color values in the code files.

**Q: Does it work on iPad?**
A: App is designed for phones, but may work on tablets.

---

## 🎉 Ready to Train?

1. `npm start`
2. Scan the QR code
3. Pick a preset or configure custom settings
4. Hit START and crush your training session! 💪

---

For more details, see **README.md** in the project root.
