# 可直接跑的命令

以下命令按 Windows PowerShell 编写，可在仓库根目录执行。

## 1) 编译 + 测试

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat clean test
```

## 2) 运行官方示例模块

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
$env:ONEBOT_BASE_URL="http://127.0.0.1:6700"
$env:ONEBOT_PLATFORM="kook"
$env:ONEBOT_ACCOUNT_ID="demo"
$env:ONEBOT_ACCESS_TOKEN=""
$env:ONEBOT_WS_URL="ws://127.0.0.1:6700/onebot/v12/ws"
.\gradlew.bat :onebot-v12-example:run
```

## 3) 只跑实现层测试

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat :onebot-v12-impl:test
```

## 4) 预览文档站（VitePress）

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk\qfys521.pages"
npm install
npm run docs:dev
```

