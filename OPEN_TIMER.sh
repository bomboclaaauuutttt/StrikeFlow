#!/bin/bash
# Open StrikeFlow timer in your default browser
# This is the EASIEST way to use the app

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Open the HTML file in default browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "$SCRIPT_DIR/timer.html"
else
    # Linux
    xdg-open "$SCRIPT_DIR/timer.html" &
fi

echo ""
echo "StrikeFlow is opening in your browser!"
echo ""
