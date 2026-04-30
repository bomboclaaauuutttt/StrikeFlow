@echo off
REM Open StrikeFlow timer in your default browser
REM This is the EASIEST way to use the app

setlocal enabledelayedexpansion

REM Get the directory where this script is located
for %%i in ("%~dp0.") do set "current_dir=%%~fi"

REM Open the HTML file in default browser
start "" "%current_dir%\timer.html"

REM Show a quick message
echo.
echo StrikeFlow is opening in your browser!
echo.
timeout /t 2 >nul
