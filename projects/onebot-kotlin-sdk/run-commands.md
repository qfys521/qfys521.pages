# 可直接跑的命令

以下命令按 Windows PowerShell 编写。

## 编译与测试

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat clean test
```

## 运行示例

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
$env:ONEBOT_BASE_URL="http://127.0.0.1:6700"
$env:ONEBOT_PLATFORM="kook"
$env:ONEBOT_ACCOUNT_ID="demo"
$env:ONEBOT_ACCESS_TOKEN=""
$env:ONEBOT_WS_URL="ws://127.0.0.1:6700/onebot/v12/ws"
.\gradlew.bat :onebot-v12-example:run
```

## 文档站本地预览

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk\qfys521.pages"
npm install
npm run docs:dev
```

