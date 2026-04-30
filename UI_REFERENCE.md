# StrikeFlow - Visual UI Reference

## Main Timer Screen - During ROUND

```
┌──────────────────────────────────────┐
│  ROUND 1/5              ⚙️           │  ← Phase label & Settings button
│                                      │
│                                      │
│                  00:02:45            │  ← Big timer (120px font)
│                                      │
│              Land 15 jabs            │  ← Task (when enabled)
│                                      │
│                                      │
│              ▌▌▌▌▌▌░░░░░░░          │  ← Progress bar
│                                      │
│                                      │
│           ┌─────────────┬──────────┐ │
│           │             │          │ │
│           │   START     │  RESET   │ │  ← Control buttons
│           │             │          │ │
│           └─────────────┴──────────┘ │
│                                      │
└──────────────────────────────────────┘

BACKGROUND COLOR: #ff2b2b (BRIGHT RED)
TEXT COLOR: #ffffff (WHITE)
```

---

## Main Timer Screen - During BREAK

```
┌──────────────────────────────────────┐
│  BREAK                  ⚙️           │  ← Shows "BREAK" instead of round
│                                      │
│                                      │
│                  00:00:45            │  ← Timer for break
│                                      │
│                   (no task)          │  ← Tasks hidden during break
│                                      │
│                                      │
│              ▌▌▌▌▌▌▌░░░░░░░         │  ← Progress bar
│                                      │
│                                      │
│           ┌─────────────┬──────────┐ │
│           │             │          │ │
│           │   PAUSE     │  RESET   │ │  ← PAUSE when running
│           │             │          │ │
│           └─────────────┴──────────┘ │
│                                      │
└──────────────────────────────────────┘

BACKGROUND COLOR: #2bff4a (BRIGHT GREEN)
TEXT COLOR: #000000 (BLACK)
```

---

## Pre-Round Task Display (3-2-1 Countdown)

```
┌──────────────────────────────────────┐
│  ROUND 2/5              ⚙️           │
│                                      │
│         ╔════════════════════════╗   │
│         ║                        ║   │
│         ║     GET READY!         ║   │  ← Title
│         ║                        ║   │
│         ║   Land 5 1-2 Combos   ║   │  ← Current task (BIG)
│         ║                        ║   │
│         ║          3             ║   │  ← Countdown
│         ║                        ║   │
│         ╚════════════════════════╝   │
│                                      │
│                                      │
│                                      │
│           ┌─────────────┬──────────┐ │
│           │             │          │ │
│           │   START     │  RESET   │ │
│           │             │          │ │
│           └─────────────┴──────────┘ │
│                                      │
└──────────────────────────────────────┘

AFTER 1 SECOND: Countdown shows "2"
AFTER 2 SECONDS: Countdown shows "1"
AFTER 3 SECONDS: Countdown shows "0" then disappears
```

---

## Settings Screen

```
┌──────────────────────────────────────┐
│ SETTINGS                             │  ← Top header
│ ════════════════════════════════════ │
│                                      │
│ QUICK PRESETS                        │
│ ──────────────────────────────────── │
│  ┌────────────────────────────────┐  │
│  │  K1: 3x3min                    │  │  ← Preset buttons
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │  Muay Thai: 5x3min             │  │
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │  Conditioning: 10x1min         │  │
│  └────────────────────────────────┘  │
│                                      │
│ ROUND TIME                           │
│ ──────────────────────────────────── │
│              3:00                    │  ← Current value in RED
│  ┌──────┬──────┬──────┬──────┐      │
│  │ -30s │ -5s  │ +5s  │ +30s │      │  ← Adjustment buttons
│  └──────┴──────┴──────┴──────┘      │
│                                      │
│ BREAK TIME                           │
│ ──────────────────────────────────── │
│              1:00                    │
│  ┌──────┬──────┬──────┬──────┐      │
│  │ -15s │ -5s  │ +5s  │ +15s │      │
│  └──────┴──────┴──────┴──────┘      │
│                                      │
│ NUMBER OF ROUNDS                     │
│ ──────────────────────────────────── │
│               5                      │
│  ┌──────┬──────┬──────┬──────┐      │
│  │  -1  │  -5  │  +5  │  +1  │      │
│  └──────┴──────┴──────┴──────┘      │
│                                      │
│ TASK SPAR MODE                       │
│ ──────────────────────────────────── │
│  Enabled              [    ●  ON ]   │  ← Toggle switch
│  Random tasks each round             │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  SAVE & CLOSE                  │  │  ← Save button (green)
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘

BACKGROUND: #1a1a1a (Dark gray)
TEXT: #ffffff (White)
RED buttons: Minus adjustments
GREEN buttons: Plus adjustments
```

---

## Session Complete Screen

```
┌──────────────────────────────────────┐
│ ROUND 5/5              ⚙️           │
│                                      │
│                                      │
│       ╔════════════════════════╗     │
│       ║                        ║     │
│       ║  SESSION COMPLETE! 🏆  ║     │
│       ║                        ║     │
│       ║     Great workout!     ║     │
│       ║                        ║     │
│       ╚════════════════════════╝     │
│                                      │
│           ┌─────────────┬──────────┐ │
│           │             │          │ │
│           │   START     │  RESET   │ │
│           │  (disabled) │          │ │
│           └─────────────┴──────────┘ │
│                                      │
└──────────────────────────────────────┘

Shows overlay when timer completes all rounds
```

---

## Color Scheme

### During ROUND
```
Background: #ff2b2b (Bright Red)
    RGB: (255, 43, 43)
    Purpose: Intensity, focus, action

Text: #ffffff (White)
    RGB: (255, 255, 255)
    Purpose: High contrast against red
    Readability: Excellent
```

### During BREAK
```
Background: #2bff4a (Bright Green)
    RGB: (43, 255, 74)
    Purpose: Recovery, rest, calm

Text: #000000 (Black)
    RGB: (0, 0, 0)
    Purpose: High contrast against green
    Readability: Excellent
```

### Settings Screen
```
Background: #1a1a1a (Very Dark Gray)
    RGB: (26, 26, 26)
    Purpose: Eye-friendly dark mode

Text: #ffffff (White)
    RGB: (255, 255, 255)

Buttons (Minus): #ff2b2b (Red)
Buttons (Plus): #2bff4a (Green)
Values: #ff2b2b (Red)
```

---

## Typography

### Timer Font
```
Font Size: 120px
Font Weight: 700 (Bold)
Letter Spacing: -5
Example: "03:45"
Purpose: Visible from 10+ feet away
```

### Round/Phase Label
```
Font Size: 20px
Font Weight: 700
Letter Spacing: 2
Example: "ROUND 1/5"
Example: "BREAK"
```

### Task Text (Pre-Round)
```
Font Size: 32px
Font Weight: 700
Example: "Land 15 jabs"
```

### Task Text (During Round)
```
Font Size: 28px
Font Weight: 600
Example: "Land 15 jabs"
```

### Button Text
```
Font Size: 20px
Font Weight: 700
Letter Spacing: 1
Example: "START", "PAUSE", "RESET"
```

### Settings Labels
```
Font Size: 18px
Font Weight: 700
Letter Spacing: 1
Example: "ROUND TIME", "BREAK TIME"
```

### Settings Value
```
Font Size: 36px
Font Weight: 700
Color: #ff2b2b
Example: "3:00", "5"
```

---

## Button Sizes & Spacing

### Control Buttons (Start/Pause, Reset)
```
Height: 54px (18pt minimum for touch)
Padding: 18px vertical, 16px horizontal
Border Radius: 12px
Border Width: 3px
Gap Between: 15px
```

### Preset Buttons (K1, Muay Thai, etc.)
```
Height: 48px
Padding: 14px vertical, 16px horizontal
Border Radius: 8px
Border Width: 2px
Margin Bottom: 10px
```

### Adjustment Buttons (±5s, ±30s, etc.)
```
Height: 48px
Padding: 12px vertical
Border Radius: 8px
Gap Between: 10px
Flex: 1 (equal width)
```

### Settings Button (⚙️)
```
Font Size: 28px
Padding: 10px
Background: Transparent
```

---

## Progress Bar

```
Container: {backgroundColor}20 (20% opacity of text color)
Height: 12px
Border Radius: 6px
Margin: 20px horizontal, 30px bottom

Progress Fill:
Height: 100% of container
Border Radius: 6px
Color: Same as text (inverse of background)
Width: (timeLeft / maxTime) * 100%

Visual Example (50% complete):
╔═══════════════════════════════════════╗
║ ▌▌▌▌▌▌▌▌░░░░░░░░░░░░░░░░░░░░░░ ║
╚═══════════════════════════════════════╝
```

---

## Safe Area & Padding

```
┌──────────────────────────────────────┐
│  [10px padding top]                  │
│                                      │  ← Safe area (status bar)
├──────────────────────────────────────┤
│                                      │
│       [20px horizontal padding]      │
│                                      │
│          (Main content)              │
│                                      │
│       [20px horizontal padding]      │
│                                      │
├──────────────────────────────────────┤
│  [20px padding bottom]               │  ← Safe area (home button)
└──────────────────────────────────────┘
```

---

## Responsive Layout

### Portrait (Normal)
- Width: Full screen width
- Height: Full screen height
- Orientation: Locked to portrait

### What Adapts
- Font sizes scale proportionally on different screen sizes
- Button sizes always 18pt+ for touch
- Padding adjusts based on screen width

---

## Visual Hierarchy

### Importance Level 1 (Most Important)
- Timer number (120px) - what user needs to see
- Color background (RED/GREEN) - at a glance context

### Importance Level 2 (Important)
- Round/Break label (20px)
- Control buttons (START/PAUSE/RESET)
- Task text (32px pre-round, 28px during)

### Importance Level 3 (Secondary)
- Progress bar
- Settings button
- Phase label

---

## Accessibility Features

✅ **Large Font Sizes**
- Timer: 120px (visible from 10+ feet)
- Buttons: Minimum 50×50 points (finger-friendly)

✅ **High Contrast**
- White on red (pass WCAG AAA)
- Black on green (pass WCAG AAA)

✅ **Clear Visual States**
- START = button ready
- PAUSE = timer running
- RESET = always available

✅ **Haptic Feedback**
- Vibration on transitions
- Confirmation without sound

---

## Animation & Transitions

### Timer Display
- Updates every 1 second
- No animation - clean, professional

### Screen Transitions
- Settings open/close: Smooth slide
- Background color change: Instant (or 0.3s fade)
- Task countdown: Shows 3, 2, 1 with smooth updates

### Button States
- Pressed: Slight opacity change
- Disabled: Greyed out (after session complete)

---

## Dark Mode Compatibility

The app is designed for **dark mode only** (no light mode):

✅ Dark background (#1a1a1a)
✅ Red accent (#ff2b2b) - warm, doesn't strain eyes at night
✅ Green accent (#2bff4a) - natural, complementary
✅ White text (#ffffff) - clear and readable

---

## Device Screen Examples

### iPhone 14 Pro (390×844)
- Timer takes 300+ pixels of height
- Buttons at bottom
- Settings icon at top

### Samsung Galaxy S22 (360×800)
- Similar layout, slightly compressed
- All elements remain readable
- Touch targets stay 50×50+

### iPad (Not optimized)
- App works but UI not stretched
- Portrait-only design intended for phones

---

## Visual Consistency

All screens follow these principles:

1. **Consistent Button Style**
   - All buttons: Rounded, bordered, clear labels
   - Interactive buttons: Color-coded (Red = minus, Green = plus)

2. **Consistent Spacing**
   - 20px horizontal padding everywhere
   - 15px gap between button groups
   - 10px internal padding in sections

3. **Consistent Typography**
   - All labels: 20px, weight 700
   - All values: 36px, weight 700
   - All content: White on dark or dark on light

4. **Consistent Color Usage**
   - Red for intensity/action/minus
   - Green for recovery/positive/plus
   - White for primary text
   - Dark gray for background

---

**This visual reference ensures consistent, professional UI across all screens and user interactions.** 🎨
