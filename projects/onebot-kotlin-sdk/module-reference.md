# 模块怎么引用

`onebot-kotlin-sdk` 是 Gradle 多模块工程：

- `:onebot-v12-lib`：模型与 API 抽象
- `:onebot-v12-impl`：Ktor 传输层实现
- `:onebot-v12-example`：可运行示例

## 同仓库模块依赖（推荐）

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

## Maven 坐标依赖（需先发布）

根工程当前坐标：`cn.qfys521.onebot:0.1.0`。

```kotlin
dependencies {
    implementation("cn.qfys521.onebot:onebot-v12-lib:0.1.0")
    implementation("cn.qfys521.onebot:onebot-v12-impl:0.1.0")
}
```

## 最小入口

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
```

