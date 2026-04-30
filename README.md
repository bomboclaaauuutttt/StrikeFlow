# StrikeFlow - Muay Thai / K1 Sparring Timer

A clean, modern React Native mobile app for iOS and Android (Expo) designed specifically for Muay Thai and K1 striking training sessions.

## Features

### Core Timer
- **Fullscreen timer display** with large, easy-to-read numbers
- **Configurable rounds and breaks** (adjustable duration and count)
- **Color-coded backgrounds**:
  - 🔴 **Bright red** during rounds (#ff2b2b)
  - 🟢 **Bright green** during breaks (#2bff4a)
- **Start / Pause / Reset controls** with large touch targets
- **Audio bell** sounds on round/break transitions
- **Haptic feedback** for transitions

### Task Spar Training Mode
- **Toggle ON/OFF** from settings
- **Random training tasks** displayed each round
- **20+ predefined tasks** (randomized each session)
- **No consecutive repeats** - same task won't appear twice in a row
- **Pre-round countdown** (3-2-1) showing the task before round starts
- **Task display during round** (smaller text under timer)

#### Sample Tasks:
- Land 15 jabs
- Land 5 1-2 combinations
- Land 20 low kicks
- Only body shots
- Defend and counter only
- Only teeps for 30 seconds
- No head strikes
- Clinch work only
- And 13 more...

### Settings & Presets
- **Quick presets**:
  - K1: 3 rounds × 3 minutes
  - Muay Thai: 5 rounds × 3 minutes
  - Conditioning: 10 rounds × 1 minute
- **Custom configuration**:
  - Adjust round time (10s - 10m)
  - Adjust break time (5s - 5m)
  - Set number of rounds (1-20)
  - Enable/disable Task Spar mode

### UX Design
- **Minimal, focused interface** - no distracting elements
- **High contrast** - visible from distance
- **Big buttons** - usable with gloves or sweaty hands
- **Dark mode friendly** - reduces eye strain
- **Smooth transitions** - professional feel

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on your phone (free - search "Expo Go" on App Store or Play Store)

### Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd StrikeFlow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npm start
   ```

   This opens the Expo dev server in your terminal.

4. **Run on your phone:**
   - **Android**: Press `a` in terminal and scan QR code with Expo Go app
   - **iOS**: Press `i` in terminal and scan QR code with phone camera, open in Expo Go

   OR manually scan the QR code displayed in the terminal with the Expo Go app.

### Alternative: Run on Emulator/Simulator

**Android Emulator:**
```bash
npm run android
```

**iOS Simulator (Mac only):**
```bash
npm run ios
```

## Project Structure

```
StrikeFlow/
├── src/
│   ├── App.tsx                 # Main app component
│   ├── hooks/
│   │   ├── useTimer.ts         # Timer logic (rounds, breaks, transitions)
│   │   └── useTaskSpar.ts      # Task Spar mode logic
│   ├── screens/
│   │   ├── TimerScreen.tsx     # Main timer UI
│   │   └── SettingsScreen.tsx  # Settings & presets UI
│   ├── utils/
│   │   ├── tasks.ts            # Predefined tasks and task selection logic
│   │   └── audioManager.ts     # Sound effect management
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── index.js                   # Entry point
└── README.md                  # This file
```

## How It Works

### Timer Logic (useTimer Hook)

The timer is implemented as a React hook with the following flow:

1. **Initialization**: Timer starts with the first round
2. **Countdown**: Every 1 second, time decreases by 1
3. **Transition**: When time reaches 0:
   - Plays bell sound
   - Triggers haptic feedback
   - Switches between round and break
4. **Repeat**: Continues until all rounds complete
5. **Cleanup**: Stops timer and shows session complete message

**Key Features:**
- Uses `setInterval` for precise timing
- Manages state transitions (round → break → next round)
- Handles edge cases (pause, reset, finish)

### Task Spar Logic (useTaskSpar Hook)

The Task Spar mode adds dynamic training challenges:

1. **Task Selection**:
   - When a new round starts, a random task is selected
   - Uses `getRandomTask()` which prevents consecutive repeats
   - Task is stored in state

2. **Pre-Round Countdown**:
   - For 3 seconds before round, display: "GET READY" + task + countdown (3...2...1)
   - User can see the task they need to focus on

3. **During Round**:
   - Same task displays smaller under the timer
   - Keeps user focused on the specific training objective

4. **Task Selection Algorithm**:
   ```typescript
   // Avoid repeating consecutive tasks
   const availableTasks = tasks.filter(t => t !== previousTask);
   const randomTask = availableTasks[Math.random() * availableTasks.length];
   ```

### Design Philosophy

**Minimalism**: The UI strips away all non-essentials:
- Only the timer, current task, and control buttons visible
- No notifications, no distracting notifications
- Clean typography with clear hierarchy

**Accessibility**: Large elements optimized for gloved hands:
- Timer font size: 120px
- Button padding: 18px vertical
- Touch targets: Minimum 50×50 pts
- High contrast: Text always inverse of background

**Color Psychology**:
- **Red (Round)**: Conveys intensity, focus, and urgency
- **Green (Break)**: Signals recovery, rest, and calmness

## Customization

### Add Custom Tasks

Edit `src/utils/tasks.ts` and add tasks to the `TRAINING_TASKS` array:

```typescript
export const TRAINING_TASKS = [
  "Your new task here",
  // ... existing tasks
];
```

### Change Colors

Edit `src/screens/TimerScreen.tsx`:

```typescript
const backgroundColor = timerState.isRound ? '#your-round-color' : '#your-break-color';
```

### Adjust Font Sizes

Edit the style sheets in `TimerScreen.tsx` and `SettingsScreen.tsx`:

```typescript
timerText: {
  fontSize: 120, // Change this number
  // ...
}
```

### Add Audio Files (Optional)

To use custom bell sounds:

1. Place `.mp3` files in `assets/` folder:
   - `bell.mp3` - Bell sound for round/break transitions
   - `blip.mp3` - Higher pitch for countdown

2. The app will automatically use them if available, otherwise uses system defaults

## Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

(Requires Expo account and EAS setup - see https://docs.expo.dev/eas/)

## Troubleshooting

### "Permission to access microphone denied"
- This is from the audio system. Grant permissions when prompted.

### Timer not starting
- Ensure you've pressed the "START" button
- Check that the timer is not already finished (press RESET)

### Task Spar not showing tasks
- Toggle "TASK SPAR MODE" ON in settings
- Tasks only appear during rounds, not breaks

### App crashes on start
- Delete `node_modules/` and reinstall: `npm install`
- Clear Expo cache: `expo start -c`

### Sound not working
- Volume might be muted - check phone settings
- Try different audio files or leave them blank for system defaults

## Technical Details

### Dependencies

- **react-native**: Core mobile framework
- **expo**: Development platform and prebuilt modules
- **expo-av**: Audio playback
- **expo-haptics**: Vibration feedback
- **react**: UI library with hooks

### Hooks Used

- `useState`: State management
- `useEffect`: Lifecycle and side effects
- `useCallback`: Memoized callback functions
- `useRef`: Persistent interval reference

### Type Safety

Full TypeScript implementation ensures:
- No undefined variable errors
- Type checking at compile time
- Better IDE autocomplete
- Self-documenting code

## Performance Optimization

- **Minimal re-renders**: Timer uses `useCallback` to prevent unnecessary updates
- **Efficient state updates**: Only updates when time actually changes
- **Resource cleanup**: Intervals cleared on unmount
- **Memory management**: Audio resources properly released

## License

MIT - Feel free to modify and distribute

## Support

For issues or suggestions:
1. Check the troubleshooting section above
2. Review the code comments in the source files
3. Consult Expo documentation: https://docs.expo.dev/

---

**Ready to crush your training session?** 💪🥊

Start the app with `npm start` and scan the QR code with Expo Go!
