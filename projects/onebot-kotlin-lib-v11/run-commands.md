# V11 可直接跑的命令

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
$env:ONEBOT_BASE_URL="http://127.0.0.1:6700"
$env:ONEBOT_PLATFORM="kook"
$env:ONEBOT_ACCOUNT_ID="demo"
$env:ONEBOT_ACCESS_TOKEN=""
$env:ONEBOT_WS_URL="ws://127.0.0.1:6700/onebot/v11/ws"
.\gradlew.bat :onebot-v11-example:run
```

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat :onebot-v11-lib:test :onebot-v11-impl:test
```

