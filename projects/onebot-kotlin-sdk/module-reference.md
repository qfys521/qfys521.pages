# 模块怎么引用

`onebot-kotlin-sdk` 现在是 Gradle 多模块工程（见 `settings.gradle.kts`）：

> 文档使用上请按两个独立项目选择：
>
> - OneBot V11：`onebot-v11-*`
> - OneBot V12：`onebot-v12-*`

- `:onebot-v11-lib`：V11 模型与 API 抽象（`OneBotV11Client` 等）
- `:onebot-v11-impl`：V11 Ktor 传输层实现与工厂（`createOneBotV11Client`）
- `:onebot-v11-example`：V11 可运行示例
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
    implementation(project(":onebot-v11-lib"))
    implementation(project(":onebot-v11-impl"))
    implementation(project(":onebot-v12-lib"))
    implementation(project(":onebot-v12-impl"))
}
```

## 方式 2：作为 Maven 依赖引入（前提：你已发布制品）

当前根工程坐标来自 `build.gradle.kts`：

- group: `cn.qfys521`
- version: `0.1.0`

如果你已经发布到私服或本地仓库，可按下面方式引用：

```kotlin
dependencies {
    implementation("cn.qfys521:onebot-v11-lib:0.1.0")
    implementation("cn.qfys521:onebot-v11-impl:0.1.0")
    implementation("cn.qfys521:onebot-v12-lib:0.1.0")
    implementation("cn.qfys521:onebot-v12-impl:0.1.0")
}
```

## 最小入口

你通常只需要从实现模块引入对应版本的入口符号：

- V11:
  - `cn.qfys521.onebot.v11.impl.OneBotV11ClientConfig`
  - `cn.qfys521.onebot.v11.impl.createOneBotV11Client`

- V12:
  - `cn.qfys521.onebot.v12.impl.OneBotClientConfig`
  - `cn.qfys521.onebot.v12.impl.createOneBotV12Client`

