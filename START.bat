@echo off
REM StrikeFlow - One-Click Starter for Windows
REM Double-click this file to start the app

setlocal enabledelayedexpansion

title StrikeFlow - Starting...

echo.
echo ========================================
echo    STRIKEFLOW - Muay Thai Timer
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo.
    echo Steps:
    echo   1. Go to https://nodejs.org/
    echo   2. Download the LTS (Long Term Support) version
    echo   3. Run the installer
    echo   4. Restart your computer
    echo   5. Double-click this file again
    echo.
    pause
    exit /b 1
)

echo Node.js found. Checking npm...
npm --version >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm is not working!
    echo.
    echo Try restarting your computer, then try again.
    echo.
    pause
    exit /b 1
)

echo npm found. Continuing...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo (This may take 2-5 minutes on first run)
    echo.
    call npm install
    if !errorlevel! neq 0 (
        echo.
        echo ERROR: Failed to install dependencies
        echo Please try again, or see GETTING_STARTED.md for help
        echo.
        pause
        exit /b 1
    )
    echo.
    echo Dependencies installed!
    echo.
)

echo ========================================
echo    STARTING SERVER...
echo ========================================
echo.
echo Your app is starting!
echo.
echo Instructions:
echo   1. On iPhone: Point camera at QR code, tap the link
echo   2. On Android: Open Expo Go, scan the QR code
echo.
echo Keep this window open while using the app.
echo Press Ctrl+C to stop when done.
echo.
echo ========================================
echo.

REM Start the app
npm start

if !errorlevel! neq 0 (
    echo.
    echo ERROR: Failed to start app
    echo.
    pause
    exit /b 1
)

pause
