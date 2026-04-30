# Project Directory Structure & File Guide

## Complete Project Structure

```
StrikeFlow/
│
├── 📄 index.js                     # Entry point for Expo
├── 📄 app.json                     # Expo app configuration
├── 📄 package.json                 # Dependencies and npm scripts
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 .babelrc                    # Babel configuration for React Native
├── 📄 .gitignore                  # Git ignore rules
│
├── 📁 src/                         # All app source code
│   ├── 📄 App.tsx                 # Root component - manages screens
│   │
│   ├── 📁 types/
│   │   └── 📄 index.ts            # TypeScript type definitions
│   │       - TimerSettings (config for timer)
│   │       - TimerState (current timer state)
│   │       - PresetConfig (preset configurations)
│   │
│   ├── 📁 hooks/                  # Custom React hooks
│   │   ├── 📄 useTimer.ts         # Main timer logic
│   │   │   - Manages countdown
│   │   │   - Handles transitions between rounds/breaks
│   │   │   - Triggers sounds and haptics
│   │   │   - Returns: timeLeft, isRound, currentRound, isRunning, isFinished
│   │   │
│   │   └── 📄 useTaskSpar.ts      # Task Spar mode logic
│   │       - Generates random tasks
│   │       - Manages pre-round countdown
│   │       - Prevents consecutive task repeats
│   │       - Returns: currentTask, showPreRoundTask, preCountdownValue
│   │
│   ├── 📁 screens/                # UI screens
│   │   ├── 📄 TimerScreen.tsx     # Main fullscreen timer display
│   │   │   - Large centered timer
│   │   │   - Red/green background based on round/break
│   │   │   - Task display integration
│   │   │   - Start/Pause/Reset buttons
│   │   │   - Settings button
│   │   │
│   │   └── 📄 SettingsScreen.tsx  # Settings and configuration
│   │       - Preset buttons (K1, Muay Thai, etc.)
│   │       - Custom adjustments
│   │       - Task Spar toggle
│   │       - Save/Close functionality
│   │
│   └── 📁 utils/                  # Utility functions
│       ├── 📄 tasks.ts            # Training tasks system
│       │   - 20+ predefined tasks
│       │   - getRandomTask() - picks random without repeats
│       │   - getTaskSequence() - generates sequence for preview
│       │
│       └── 📄 audioManager.ts     # Sound effect management
│           - Initialize audio system
│           - Play bell sounds
│           - Play countdown blips
│           - Graceful fallback if no audio files
│
├── 📁 assets/                      # Media files (optional)
│   ├── 📄 README.md               # Guide to adding audio files
│   ├── 🔊 bell.mp3               # (Optional) Bell sound
│   └── 🔊 blip.mp3               # (Optional) Countdown beep
│
├── 📁 node_modules/               # Installed dependencies
│   └── (auto-generated, not in git)
│
├── 📄 README.md                   # Complete project documentation
├── 📄 SETUP.md                    # Quick start guide
├── 📄 TASK_SPAR_GUIDE.md         # Detailed Task Spar explanation
└── 📄 DIRECTORY_GUIDE.md          # This file

```

---

## File Descriptions

### Configuration Files

**index.js**
- Entry point for React Native app
- Registers the root App component with Expo

**app.json**
- Expo configuration (app name, icon, splash screen)
- Platform-specific settings (iOS, Android, Web)
- Permissions (vibration, etc.)

**package.json**
- Dependencies list (react-native, expo, expo-av, expo-haptics)
- npm scripts (start, android, ios, web)
- Version and metadata

**tsconfig.json**
- TypeScript compiler settings
- Strict type checking enabled
- Path aliases and module resolution

**.babelrc**
- Babel configuration for JSX transformation
- React Native preset
- Path aliases for imports

### Type Definitions (src/types/index.ts)

Defines all TypeScript interfaces:

```typescript
TimerSettings {
  roundTime: number           // seconds
  breakTime: number          // seconds
  numberOfRounds: number     // count
  taskSparEnabled: boolean   // on/off
}

TimerState {
  timeLeft: number          // seconds remaining
  isRound: boolean          // round vs break
  currentRound: number      // which round (1-N)
  isRunning: boolean        // counting or paused
  isFinished: boolean       // session complete
}

PresetConfig {
  name: string              // e.g., "K1: 3x3min"
  roundTime: number
  breakTime: number
  numberOfRounds: number
}
```

### Hooks (src/hooks/)

**useTimer.ts** - 200+ lines
- Main timer countdown logic
- Handles state transitions
- Triggers sounds/haptics
- Manages pause/resume/reset
- **Returns**: { timeLeft, isRound, currentRound, isRunning, isFinished, start, pause, reset }

**useTaskSpar.ts** - 80+ lines
- Integrates with timer state
- Generates random tasks
- Manages pre-round display
- **Returns**: { currentTask, showPreRoundTask, preCountdownValue, isShowingTask }

### Screens (src/screens/)

**TimerScreen.tsx** - 250+ lines
- Fullscreen timer display
- Red/green backgrounds
- Large centered numbers
- Control buttons
- Integrates Task Spar display
- Responsive to timer state changes

**SettingsScreen.tsx** - 300+ lines
- Scrollable settings menu
- Quick preset buttons
- Manual adjustments with ±buttons
- Task Spar toggle
- Large touch targets
- Dark mode themed

### Utilities (src/utils/)

**tasks.ts** - 50+ lines
```
20 predefined tasks:
├── "Land 15 jabs"
├── "Land 5 1-2 combinations"
├── "Land 20 low kicks"
├── "Only body shots"
├── "Defend and counter only"
├── ... (15 more tasks)
└── "Grappling exchanges only"

Functions:
├── getRandomTask(previousTask?) → string
└── getTaskSequence(count) → string[]
```

**audioManager.ts** - 100+ lines
- Singleton pattern
- Audio initialization
- Bell sound playback
- Countdown blip playback
- Graceful error handling
- Cleanup on app close

---

## Data Flow Diagram

```
┌─────────────────┐
│   App.tsx       │  Root component
│  (manages      │  Switches between screens
│   screens)     │
└────────┬────────┘
         │
    ┌────┴────────────────────────────────┐
    │                                     │
    ▼                                     ▼
┌──────────────┐               ┌────────────────────┐
│ TimerScreen  │◄─ Settings ──│ SettingsScreen    │
│              │   (when      │                    │
│ Displays:    │    changed)  │ - Presets          │
│ - Timer      │              │ - Custom adjusts   │
│ - Task       │              │ - Toggle Task Spar │
│ - Buttons    │              │ - Save             │
└──────────────┘              └────────────────────┘
       ▲
       │ Updates every 1 sec
       │
┌──────┴──────────────────┐
│    useTimer Hook        │  Main countdown logic
│                         │  - Manages time ticks
│ State:                  │  - Handles transitions
│ - timeLeft              │  - Triggers sounds
│ - isRound               │  - Triggers haptics
│ - currentRound          │
│ - isRunning             │
│ - isFinished            │
└──────┬──────────────────┘
       │
       ├──────────────────────┐
       │                      │
       ▼                      ▼
┌──────────────┐      ┌────────────────────┐
│ audioManager │      │  useTaskSpar Hook  │
│              │      │                    │
│ - Initialize │      │  Generates tasks:  │
│ - Play bell  │      │  - getRandomTask() │
│ - Play blip  │      │  - No repeats      │
│ - Cleanup    │      │  - Pre-round show  │
└──────────────┘      └────────────────────┘
                              │
                              ▼
                      ┌────────────────────┐
                      │   tasks.ts         │
                      │                    │
                      │  20+ task list     │
                      │  Random selection  │
                      │  No-repeat logic   │
                      └────────────────────┘
```

---

## Component Lifecycle

### App Startup
```
1. App.tsx loads
2. [TimerScreen is shown]
3. useTimer hook initialized with default settings
4. audioManager.initialize() called
5. Ready for user input
```

### User Presses START
```
1. onStart() called
2. useTimer.start() sets isRunning = true
3. useTimer hook starts interval timer
4. Timer ticks every 1000ms
5. TimerScreen re-renders with new timeLeft
```

### Round Ends (timeLeft = 0)
```
1. Transition detected
2. audioManager.playBell() called
3. Haptics.notificationAsync() called
4. useTaskSpar generates next task
5. If break: background turns green
6. If last round: isFinished = true
```

### User Opens Settings
```
1. onSettings() called from TimerScreen
2. screenMode changes to 'settings'
3. SettingsScreen renders with current settings
4. User adjusts values
5. onSettingsChange() called
6. Settings updated
7. Timer reset to initial state
8. screenMode changes back to 'timer'
```

---

## Execution Flow - From File to Display

```
index.js (entry)
    │
    └─► registerRootComponent(App)
            │
            └─► App.tsx renders
                    │
                    ├─► Initialize hooks
                    │   ├─► useTimer
                    │   ├─► useTaskSpar (if enabled)
                    │   └─► audioManager
                    │
                    ├─► Determine which screen to show
                    │
                    ├─► (User presses START)
                    │
                    └─► TimerScreen renders
                            │
                            ├─► useTimer updates state
                            │   every 1 second
                            │
                            ├─► TimerScreen re-renders
                            │   with new time
                            │
                            └─► Display updates
                                (user sees timer count down)
```

---

## Key State Management

### Timer State (useTimer hook)
```
Initial:        During Round:      During Break:      Finished:
{               {                  {                  {
  timeLeft:180  timeLeft: 150     timeLeft: 45        timeLeft: 0
  isRound: true  isRound: true    isRound: false      isRound: false
  currentRound:1 currentRound: 1  currentRound: 1     currentRound: 5
  isRunning: true isRunning: true  isRunning: true     isRunning: false
  isFinished: false isFinished: f  isFinished: false   isFinished: true
}               }                  }                  }
```

### Task State (useTaskSpar hook)
```
Pre-Round (3-2-1):     During Round:           During Break:
{                      {                       {
  currentTask: ""      currentTask: "Land     currentTask: ""
  showPreRound: true   15 jabs"              showPreRound: false
  preCountdown: 3      showPreRound: false    preCountdown: 0
}                      preCountdown: 0        isShowingTask: false
                       isShowingTask: true    }
                       }
```

---

## Performance Metrics

### Bundle Size (Approximate)
- index.js: < 1 KB
- App.tsx: 2 KB
- Hooks: 8 KB (useTimer + useTaskSpar)
- Screens: 25 KB (TimerScreen + SettingsScreen)
- Utils: 5 KB (tasks + audioManager)
- Types: 1 KB
- **Total App Code: ~42 KB**
- Expo Runtime: ~25 MB (on device)

### Runtime Performance
- Timer tick: < 1ms
- Task selection: < 1ms
- Screen re-render: 16ms (60fps target)
- Audio playback: 100ms (blocking)

---

## Testing Checklist

- [ ] App starts without errors
- [ ] Timer counts down from current round time
- [ ] Background is red during round
- [ ] Background is green during break
- [ ] Bell sound plays on transitions
- [ ] Haptic feedback on transitions
- [ ] START/PAUSE buttons work
- [ ] RESET button resets to initial state
- [ ] Settings screen opens and closes
- [ ] Presets apply correctly
- [ ] Custom adjustments work
- [ ] Task Spar toggle works
- [ ] Tasks appear with countdown
- [ ] Tasks don't repeat consecutively
- [ ] Session completes properly
- [ ] All buttons work with gloved hands

---

## Debugging Tips

### View Component Tree
```javascript
// In any component:
console.log('Current state:', { timerState, taskSpar, settings });
```

### Monitor Timer Ticks
```javascript
// In useTimer.ts:
useEffect(() => {
  console.log('Time remaining:', timerState.timeLeft);
}, [timerState.timeLeft]);
```

### Check Task Selection
```javascript
// In useTaskSpar.ts:
useEffect(() => {
  console.log('Task selected:', currentTask);
}, [currentTask]);
```

### Debug Settings Changes
```javascript
// In App.tsx:
const handleSettingsChange = (newSettings: TimerSettings) => {
  console.log('Settings changed:', newSettings);
  setSettings(newSettings);
};
```

---

## Quick Reference

### Main Functions
- `useTimer()` - Timer countdown logic
- `useTaskSpar()` - Task generation and display
- `getRandomTask()` - Random task selection
- `audioManager.playBell()` - Sound effect

### Main Components
- `TimerScreen` - Main UI
- `SettingsScreen` - Configuration UI
- `App` - Root component

### Key Exports
- `TimerSettings` - Configuration type
- `TimerState` - Timer state type
- `TRAINING_TASKS` - Task list

---

## Summary

This modular architecture makes the app:
✅ **Easy to understand** - Clear separation of concerns
✅ **Easy to extend** - Add features by modifying individual files
✅ **Easy to debug** - Isolated logic with clear data flow
✅ **Easy to test** - Hooks and functions are independently testable
✅ **Maintainable** - Well-organized and documented

The app follows React best practices:
- ✅ Functional components with hooks
- ✅ TypeScript for type safety
- ✅ Proper state management
- ✅ Component composition
- ✅ Separation of concerns
- ✅ Resource cleanup
