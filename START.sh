#!/bin/bash
# StrikeFlow - One-Click Starter for Mac/Linux
# Double-click or run: bash START.sh

clear

echo ""
echo "========================================"
echo "   STRIKEFLOW - Muay Thai Timer"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo ""
    echo "Please install Node.js from: https://nodejs.org/"
    echo "After installing, run this script again."
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    echo "(This may take 2-5 minutes on first run)"
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "ERROR: Failed to install dependencies"
        read -p "Press Enter to exit..."
        exit 1
    fi
fi

echo ""
echo "========================================"
echo "   STARTING SERVER..."
echo "========================================"
echo ""
echo "Your app is starting!"
echo ""
echo "Instructions:"
echo "  1. On iPhone: Point camera at QR code, tap the link"
echo "  2. On Android: Open Expo Go, scan the QR code"
echo ""
echo "Keep this terminal open while using the app."
echo "Press Ctrl+C to stop the app."
echo ""
echo "========================================"
echo ""

# Start the app
npm start
