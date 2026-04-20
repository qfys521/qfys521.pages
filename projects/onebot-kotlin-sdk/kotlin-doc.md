# Kotlin API 文档（KDoc）

这里提供 `onebot-v12-lib` 的 KDoc HTML 文档。

- 打开 KDoc：[`/projects/onebot-kotlin-sdk/kdoc/`](/projects/onebot-kotlin-sdk/kdoc/)
- 返回站点首页：[`/`](/)
- 返回项目首页：[`/projects/onebot-kotlin-sdk/`](/projects/onebot-kotlin-sdk/)

> 说明：KDoc 页面右上角会注入 `Home` / `Project` 快捷链接，方便从任意 API 页面跳回站点。

## 生成并同步 KDoc

在仓库根目录执行：

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat syncOnebotKdocToPages
```

执行后，文档会同步到：`qfys521.pages/public/projects/onebot-kotlin-sdk/kdoc`。

如果你的 VitePress 是独立项目，可用可配置导出任务：

```powershell
Set-Location "D:\Code\onebot-kotlin-sdk"
.\gradlew.bat exportOnebotKdoc -PkdocOutputDir="D:\Sites\my-vitepress\.vitepress\public\onebot-kdoc"
```

也可以在仓库根目录 `gradle.properties` 固化默认路径：

```ini
onebot.kdoc.outputDir=D:/Sites/my-vitepress/.vitepress/public/onebot-kdoc
```

路径优先级：`-PkdocOutputDir` > `onebot.kdoc.outputDir` > `ONEBOT_KDOC_OUTPUT_DIR` > 内置默认路径。

可选参数：

- `-PkdocScriptPath`：注入到 HTML 的脚本路径（默认 `/projects/onebot-kotlin-sdk/kdoc/kdoc-home-link.js`）
- `-PkdocHomeUrl`：KDoc 页面的 Home 跳转地址（默认 `/`）
- `-PkdocProjectUrl`：KDoc 页面的 Project 跳转地址（默认 `/projects/onebot-kotlin-sdk/`）

