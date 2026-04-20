# 模块怎么引用

`onebot-kotlin-sdk` 现在是 Gradle 多模块工程（见 `settings.gradle.kts`）：

- `:onebot-v12-lib`：模型与 API 抽象（`OneBotClient` 等）
- `:onebot-v12-impl`：Ktor 传输层实现与工厂（`createOneBotV12Client`）
- `:onebot-v12-example`：可运行示例

## 方式 1：在同一仓库内按模块依赖（推荐）

```kotlin
// build.gradle.kts
plugins {
    kotlin("jvm")
    kotlin("plugin.serialization")
}

dependencies {
    implementation(project(":onebot-v12-lib"))
    implementation(project(":onebot-v12-impl"))
}
```

## 方式 2：作为 Maven 依赖引入（前提：你已发布制品）

当前根工程坐标来自 `build.gradle.kts`：

- group: `com.onebot`
- version: `0.1.0`

如果你已经发布到私服或本地仓库，可按下面方式引用：

```kotlin
dependencies {
    implementation("com.onebot:onebot-v12-lib:0.1.0")
    implementation("com.onebot:onebot-v12-impl:0.1.0")
}
```

## 最小入口

你通常只需要从实现模块引入两个符号：

- `cn.qfys521.onebot.v12.impl.OneBotClientConfig`
- `cn.qfys521.onebot.v12.impl.createOneBotV12Client`

