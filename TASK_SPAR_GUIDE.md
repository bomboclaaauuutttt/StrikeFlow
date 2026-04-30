# Task Spar Mode - Technical Deep Dive

## Overview

Task Spar Mode transforms the timer from a simple countdown to an intelligent training companion that assigns random objectives for each round.

## How It Works (Step by Step)

### Phase 1: Round Begins

When a new round starts:

```
1. Timer: 180 seconds (3 min round)
2. Background: Bright red
3. Status: "ROUND 1/5"
```

### Phase 2: Task Generation

The app automatically generates a random task:

```typescript
// From src/utils/tasks.ts
const task = getRandomTask(previousTask);
// Task selected: "Land 15 jabs"
```

**Key feature**: The function checks the previous round's task and excludes it from selection, ensuring the same task never repeats consecutively.

### Phase 3: Pre-Round Display (3 seconds)

The app shows a "GET READY" screen:

```
┌──────────────────────────┐
│     GET READY!           │
│  Land 15 jabs            │ ← Big task text
│     3                    │ ← Countdown
└──────────────────────────┘
```

After 1 second:
```
│     2                    │
```

After 2 seconds:
```
│     1                    │
```

After 3 seconds:
```
│     0 (countdown ends)   │
```

### Phase 4: During Round

The task moves below the timer and stays visible:

```
         180:00
      (big timer)
    
    LAND 15 JABS    ← Smaller task reminder
    
  [START] [RESET]
```

As the timer counts down:
- 179:50
- 179:40
- ... etc

The task stays visible as a reminder of the focus.

### Phase 5: Break Time

When the round ends:
- Bell sound plays
- Background turns green
- Task disappears (no tasks during breaks)
- User rests for 1 minute

### Phase 6: Next Round

When break ends, repeat from Phase 2 with a NEW random task

---

## Code Architecture

### Files Involved

**1. useTaskSpar Hook** (`src/hooks/useTaskSpar.ts`)
- Manages task state and display logic
- Handles pre-round countdown
- Integrates with timer state

**2. Task Selection** (`src/utils/tasks.ts`)
- Stores 20+ predefined training tasks
- `getRandomTask()` function with no-repeat logic
- `getTaskSequence()` for preview purposes

**3. Timer Integration** (`src/screens/TimerScreen.tsx`)
- Displays current task in UI
- Shows pre-round countdown overlay
- Integrates with timer display

---

## No-Repeat Algorithm

### Problem
Without this logic, you could get:
- Round 1: "Land 15 jabs"
- Round 2: "Land 15 jabs" ← Same task, boring!

### Solution
The `getRandomTask()` function:

```typescript
export const getRandomTask = (previousTask?: string): string => {
  // Create filtered list excluding previous task
  let availableTasks = TRAINING_TASKS;
  
  if (previousTask) {
    availableTasks = TRAINING_TASKS.filter(
      task => task !== previousTask
    );
  }
  
  // Pick random from remaining tasks
  const randomIndex = Math.floor(
    Math.random() * availableTasks.length
  );
  
  return availableTasks[randomIndex];
};
```

**How it works:**
1. If previousTask = "Land 15 jabs"
2. availableTasks = [all tasks EXCEPT "Land 15 jabs"]
3. Random selection happens from filtered list
4. Result: Different task every time!

---

## UI/UX Flow

### State Machine

```
                    [User Presses START]
                           ↓
                  ROUND (background RED)
                  Task displays 3-2-1
                           ↓
                  ROUND continues (task below timer)
                           ↓
                   [60 seconds passes]
                           ↓
                  BREAK (background GREEN)
                    No task visible
                           ↓
                   [30 seconds passes]
                           ↓
                  Next ROUND (NEW random task)
```

### Visual Feedback

**Pre-Round Display:**
- BIG text for the task (48px)
- High contrast
- 3-second warning before actual round starts

**During Round:**
- Task becomes smaller (28px) under timer
- Fits naturally with UI
- Easy to glance at

**Color Context:**
- Red background = focus/intensity
- Green background = task hidden (recovery)

---

## Customization

### Adding Tasks

1. Open `src/utils/tasks.ts`
2. Add to `TRAINING_TASKS` array:

```typescript
export const TRAINING_TASKS = [
  "Land 15 jabs",
  "Your custom task here",  // ← Add new
  "Land 5 1-2 combinations",
  // ... rest of tasks
];
```

3. Save file → App reloads → New task available

### Removing Tasks

Just delete the line from the array.

### Themed Task Lists

You could create different task lists for different styles:

```typescript
const MUAY_THAI_TASKS = [
  "Land 20 low kicks",
  "Clinch work",
  // ... muay thai specific
];

const K1_TASKS = [
  "Knees in clinch",
  "High kicks",
  // ... K1 specific
];
```

Then randomize between them based on a mode toggle.

---

## Performance Considerations

### Why This Approach?

**✅ Efficient:**
- No database calls
- No API requests
- Array filtering is O(n) - negligible for 20 tasks
- Random selection is O(1)

**✅ Lightweight:**
- Fits entirely in app memory
- No external dependencies
- Works offline

**✅ Responsive:**
- Task appears instantly
- No loading delays
- Smooth transitions

---

## Edge Cases Handled

### What if only 1 task exists?
- Filter removes it, leaving empty array
- App picks from empty = undefined
- Fixed by: `getRandomTask()` returns undefined? Use default

### What if user finishes session mid-round?
- Timer reaches 0 for last round
- Task cleared on `isFinished` state change
- "SESSION COMPLETE" message displays

### What if user pauses then resumes?
- Task stays in memory
- Same task displays when resumed
- New task only on actual round transition

---

## Testing Task Spar

### Manual Test Checklist

- [ ] Turn Task Spar ON in settings
- [ ] Start a short session (1 round, 1 minute)
- [ ] Verify task appears 3 seconds before round
- [ ] Verify countdown shows 3, 2, 1
- [ ] Verify task stays under timer during round
- [ ] Run 5 rounds and verify no consecutive repeats
- [ ] Turn Task Spar OFF, verify no tasks appear
- [ ] Toggle ON again, verify it works
- [ ] Complete full session and verify "SESSION COMPLETE"

---

## Future Enhancements

Possible improvements:

1. **Custom Task Lists**
   - User can create and save their own task lists
   - Switch between "Boxing", "Muay Thai", "MMA" presets

2. **Difficulty Levels**
   - Easy: Simple, basic tasks
   - Medium: Complex combinations
   - Hard: High intensity challenges

3. **Task History**
   - Show completed tasks at session end
   - Review what you trained
   - Plan next session

4. **Random Modifiers**
   - "Land 15 jabs" + "while defending"
   - Compound challenges

5. **Voice Announcements**
   - "Land 15 jabs!" announced via text-to-speech
   - Hands-free operation

---

## Debugging

### If tasks don't appear:

1. **Check if Task Spar is ON:**
   ```
   Settings → Look for toggle
   ```

2. **Check console for errors:**
   ```
   In terminal: Look for error messages
   ```

3. **Verify task logic:**
   ```
   Add console.log in useTaskSpar.ts:
   console.log('Current task:', currentTask);
   ```

4. **Check timer state:**
   ```
   Task only shows during isRound && !isFinished
   ```

### Monitor Task Selection

Add to `src/utils/tasks.ts`:
```typescript
export const getRandomTask = (previousTask?: string): string => {
  // ... filtering logic ...
  console.log('Previous task:', previousTask);
  console.log('Selected task:', result);
  return result;
};
```

---

## Summary

Task Spar transforms a simple timer into an intelligent training tool:

✅ **Randomizes objectives** each round
✅ **Prevents repetition** for variety  
✅ **Provides pre-round warning** to prepare
✅ **Displays during round** for focus
✅ **No performance cost** - lightweight
✅ **Easy to customize** - just edit array

The result: Varied, engaging training sessions without manual planning! 🥊
