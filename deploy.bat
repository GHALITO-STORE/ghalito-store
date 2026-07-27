@echo off
cd /d "%~dp0"

git add .

set /p msg=Message du commit : 

git commit -m "%msg%"

git push origin main

echo.
echo ===============================
echo Le code a ete envoye sur GitHub.
echo Vercel va maintenant redeployer automatiquement.
echo ===============================
pause