# 模块怎么引用

`onebot-kotlin-lib` 为多模块工程：

- `:onebot-v11-lib`
- `:onebot-v11-impl`
- `:onebot-v11-example`
- `:onebot-v12-lib`
- `:onebot-v12-impl`
- `:onebot-v12-example`

建议按两个独立项目使用：

- V11：[`onebot-kotlin-lib-v11`](/projects/onebot-kotlin-lib-v11/)
- V12：[`onebot-kotlin-lib-v12`](/projects/onebot-kotlin-lib-v12/)

```kotlin
dependencies {
    implementation("cn.qfys521:onebot-v11-lib:0.1.0")
    implementation("cn.qfys521:onebot-v11-impl:0.1.0")
    implementation("cn.qfys521:onebot-v12-lib:0.1.0")
    implementation("cn.qfys521:onebot-v12-impl:0.1.0")
}
```

