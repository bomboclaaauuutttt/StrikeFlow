# 🥊 StrikeFlow - Getting Started for Beginners

**Never used React Native or Node.js before? No problem!** This guide walks you through everything from scratch.

---

## Prerequisites: What You'll Need

### 1. A Computer (Windows, Mac, or Linux)
Any modern computer will work.

### 2. A Smartphone (iPhone or Android)
- Must have Expo Go app installed (free - search "Expo Go" in App Store or Play Store)
- Must be on same WiFi network as computer (during development)

### 3. Node.js
**What is it?** JavaScript runtime that lets you run code on your computer.

**How to install:**
1. Go to https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart your computer

**Verify installation:**
```bash
node --version
npm --version
```

Should output version numbers (e.g., v18.16.0)

---

## Step 1: Get the Project Files

You already have the project! It's in:
```
C:\Users\nimbl\Downloads\StrikeFlow
```

If not, create a folder named `StrikeFlow` and place all the files there.

---

## Step 2: Open Terminal/Command Prompt

### Windows:
1. Open File Explorer
2. Navigate to the StrikeFlow folder
3. Right-click in the empty space
4. Select "Open in Terminal" (or "Open PowerShell here")

### Mac:
1. Open Finder
2. Navigate to the StrikeFlow folder
3. Right-click → "New Terminal at Folder"

### Linux:
1. Open File Manager
2. Navigate to the StrikeFlow folder
3. Right-click → "Open Terminal Here"

---

## Step 3: Install Dependencies

In the terminal, type:
```bash
npm install
```

**What this does:** Downloads all the required packages (React Native, Expo, etc.)

**How long?** Usually 2-5 minutes

**It's done when** you see no error messages and the terminal prompt returns.

---

## Step 4: Start the App

In the terminal, type:
```bash
npm start
```

**What this does:** Starts the development server

**You'll see:**
```
Starting Metro Bundler on port 8081.
...
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

**Keep the terminal open!** If you close it, the app stops.

---

## Step 5: Open on Your Phone

### For iPhone:
1. Point your iPhone camera at the QR code shown in terminal
2. A link appears at the top
3. Tap the link
4. It opens in Expo Go
5. App loads (usually 30-60 seconds)

### For Android:
1. Open the Expo Go app
2. Tap the "Scan QR Code" button
3. Point your phone at the QR code in terminal
4. App loads automatically (usually 30-60 seconds)

### What You'll See:
- Bright red screen
- Large "00:03" timer
- Start button at bottom
- Settings icon (⚙️) at top right

✅ **Success!** The app is now running on your phone!

---

## Step 6: Test the Timer

1. **Tap START button** - Timer counts down
2. **Tap PAUSE button** - Timer stops (you can tap PAUSE again to see START)
3. **Tap RESET button** - Timer goes back to the beginning
4. **Tap ⚙️ icon** - Opens settings

### Try This:
1. Tap START
2. Watch timer count down from 00:03
3. When it reaches 00:00:
   - You'll feel vibration on your phone
   - Bell sound plays (if audio works)
   - Red screen flashes
   - Timer shows "BREAK" with green background

---

## Step 7: Adjust Settings

1. **Tap the ⚙️ icon** in the top right
2. You'll see the Settings screen with:

### Try These:

**Use a Preset:**
- Tap "K1: 3x3min" button
- Tap "SAVE & CLOSE"
- Notice the timer now shows 00:03:00 (3 minutes)

**Adjust Round Time:**
- Tap "ROUND TIME" section
- See the current value in big red text
- Tap "+30s" to add 30 seconds
- Or tap "-30s" to remove 30 seconds
- Watch the number change

**Enable Task Spar Mode:**
- Find "TASK SPAR MODE"
- Tap the toggle switch (ON/OFF)
- When ON, switch turns green
- Tap "SAVE & CLOSE"

---

## Step 8: Try Task Spar Mode

**Make sure Task Spar is ON:**
1. Open Settings (⚙️)
2. Find "TASK SPAR MODE"
3. Tap toggle until it's ON (switch is green)
4. Tap "SAVE & CLOSE"

**Now start a session:**
1. Tap "START" button
2. Wait 3 seconds...
3. You'll see:
   - "GET READY" text
   - A random training task (e.g., "Land 15 jabs")
   - Countdown: "3" → "2" → "1"
4. When countdown reaches 0:
   - Timer starts
   - Background turns red
   - Task moves under timer (smaller text)
5. Watch it for the full 3 minutes
6. When round ends, bell sounds, background turns green
7. On next round, a DIFFERENT random task appears

---

## Troubleshooting

### Problem: "Could not find command npm"
**Solution:**
- You didn't install Node.js (see Step: Prerequisites)
- Or you didn't restart computer after installing
- Restart computer and try again

### Problem: "npm ERR! code EACCES"
**Solution:**
- You need admin rights
- Restart terminal as administrator (right-click → "Run as administrator")

### Problem: App won't open on phone
**Solution:**
1. Make sure your phone and computer are on **same WiFi network**
2. Close Expo Go app completely
3. Scan the QR code again
4. If still doesn't work:
   - Press `q` in terminal to quit
   - Run `npm start -c` (clears cache)
   - Try again

### Problem: I don't see a QR code
**Solution:**
- Look for text in terminal that says "Scan this QR code"
- It might be above or below the current view
- Scroll up in terminal to find it

### Problem: Sound isn't working
**Solution:**
- Check your phone volume isn't muted
- Sound files are optional - vibration still works
- This is normal if you don't have audio files added

### Problem: Timer seems fast or slow
**Solution:**
- This is normal - it updates every 1 second
- The time displayed might be slightly behind real time
- App is working correctly

### Problem: App crashes
**Solution:**
1. Press `q` in terminal
2. Delete `node_modules` folder:
   ```bash
   rm -r node_modules
   ```
3. Reinstall:
   ```bash
   npm install
   ```
4. Start again:
   ```bash
   npm start -c
   ```

---

## What Each Button Does

### Main Timer Screen

**START Button** (big button at bottom left)
- Tap to begin countdown
- Button changes to "PAUSE" while running

**PAUSE Button**
- Appears when timer is running
- Tap to pause the countdown
- Button changes back to "START"

**RESET Button** (big button at bottom right)
- Resets everything to the beginning
- Use this when you want to start over

**⚙️ Settings Button** (top right)
- Opens the settings screen
- Adjust times, rounds, enable Task Spar

---

## What Each Color Means

**Red Background**
- You're in a ROUND
- This is when you train
- Keep moving!

**Green Background**
- You're in a BREAK
- This is rest time
- Catch your breath

---

## Example Training Session

### Default Settings (3 min rounds, 1 min breaks, 5 rounds)

```
Time: 00:00
Press START

↓ Timer starts ↓

ROUND 1: Red background, timer counts from 03:00 down
- 03:00, 02:59, 02:58... (exercise!)
- When reaches 00:00: BELL! ⏰

BREAK 1: Green background, timer counts from 01:00 down
- 01:00, 00:59, 00:58... (rest)
- When reaches 00:00: BELL! ⏰

ROUND 2: Red background, timer counts from 03:00 down
- (repeat)

BREAK 2: Green background, timer counts from 01:00 down
- (repeat)

ROUND 3: Red background, timer counts from 03:00 down
- (repeat)

BREAK 3: Green background, timer counts from 01:00 down
- (repeat)

ROUND 4: Red background, timer counts from 03:00 down
- (repeat)

BREAK 4: Green background, timer counts from 01:00 down
- (repeat)

ROUND 5: Red background, timer counts from 03:00 down
- When reaches 00:00: BELL! ⏰
- Message appears: "SESSION COMPLETE! 🏆"
- Press RESET to do another session
```

---

## Example with Task Spar Enabled

### Same session, but with random tasks

```
ROUND 1 starts:
- Pre-round display: "GET READY" / "Land 15 jabs" / "3...2...1"
- Timer starts, task shows under timer
- You focus on landing 15 jabs

BREAK 1:
- Task disappears
- Rest and recover

ROUND 2 starts:
- Pre-round display: "GET READY" / "Only body shots" / "3...2...1"
- Timer starts, task shows under timer
- Different objective!

ROUND 3 starts:
- Pre-round display: "GET READY" / "Defend and counter only" / "3...2...1"
- Again, new task!

(And so on...)
```

---

## Hot Reload Feature

**Cool trick:** You can edit code and see changes without restarting!

1. Edit a file (e.g., change a color)
2. Save the file
3. App on your phone updates automatically in ~1 second!

This is super useful for customizing the app.

---

## Next Steps After Getting Running

### Now That You Have It Working:

1. **Learn the app** - Use all the buttons, try all presets
2. **Try Task Spar mode** - Enable it and run a full 5-round session
3. **Customize** - Edit colors, add your own tasks
4. **Train** - Use it for real sparring sessions!

### Want to Modify Code?

1. Open `src/utils/tasks.ts` in a text editor
2. Add new tasks to the `TRAINING_TASKS` array
3. Save the file
4. Watch your phone update instantly!

---

## Useful Folders/Files

| Path | What It Is | Can I Edit? |
|------|-----------|------------|
| `src/App.tsx` | Main app code | Yes (advanced) |
| `src/utils/tasks.ts` | List of training tasks | Yes! |
| `src/screens/TimerScreen.tsx` | Timer display | Yes (advanced) |
| `package.json` | List of dependencies | No |
| `app.json` | Expo config | Mostly no |
| `assets/` | Media files go here | Yes (for audio) |

---

## Tips for Success

✅ **Keep terminal open** - If closed, app stops
✅ **Stay on same WiFi** - Phone and computer must be on same network
✅ **Wait for app to load** - Takes 30-60 seconds first time
✅ **Try the presets first** - Good way to understand the app
✅ **Check volume is ON** - For bell sounds
✅ **Use big touch targets** - Buttons are sized for gloves

---

## Common Questions

**Q: Why is my app so big to download?**
A: React Native + Expo runtime = ~25MB on device. This is normal.

**Q: Can I use this offline?**
A: Yes! Once it's running on your phone, no internet needed.

**Q: Can I close the terminal?**
A: No - the terminal runs the development server. Close it = app stops.

**Q: How do I stop the app?**
A: Press `q` in the terminal (or Ctrl+C)

**Q: Can I install this on multiple phones?**
A: Yes! All on same WiFi, scan the same QR code.

**Q: What if the code breaks?**
A: Delete `node_modules`, run `npm install`, restart. Fixes 90% of issues.

**Q: Can I build for App Store/Google Play?**
A: Yes, but requires more setup. See advanced docs.

---

## You're Ready! 🎉

You now have a fully functional Muay Thai/K1 sparring timer on your phone!

### Current Status:
✅ App is running
✅ Timer works
✅ Settings work
✅ Task Spar mode works
✅ Ready to train!

### Next Time You Use It:
1. Open terminal in StrikeFlow folder
2. Type: `npm start`
3. Scan QR code
4. Train! 💪

---

## Need More Help?

- **SETUP.md** - Quick start instructions
- **README.md** - Full features and troubleshooting
- **TASK_SPAR_GUIDE.md** - How Task Spar works
- **DIRECTORY_GUIDE.md** - File organization

---

**Happy training! 🥊**

Now you have a timer that keeps your workouts fresh, challenging, and engaging!
