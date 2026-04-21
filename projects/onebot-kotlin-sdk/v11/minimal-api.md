# V11 最小 API 调用

```kotlin
import cn.qfys521.onebot.v11.impl.OneBotV11ClientConfig
import cn.qfys521.onebot.v11.impl.createOneBotV11Client
import cn.qfys521.onebot.v11.lib.api.v11Api
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val client = createOneBotV11Client(
        OneBotV11ClientConfig(
            baseUrl = System.getenv("ONEBOT_BASE_URL") ?: "http://127.0.0.1:6700",
            platform = System.getenv("ONEBOT_PLATFORM") ?: "kook",
            accountId = System.getenv("ONEBOT_ACCOUNT_ID") ?: "demo",
            accessToken = System.getenv("ONEBOT_ACCESS_TOKEN")
        )
    )
    val api = client.v11Api()

    client.start()
    try {
        println(api.getLoginInfo())
        val targetUser = System.getenv("ONEBOT_TARGET_USER_ID")?.toLongOrNull()
        if (targetUser != null) {
            println(api.sendPrivateMessage(targetUser, "hello from onebot-v11"))
        }
    } finally {
        client.close()
    }
}
```

