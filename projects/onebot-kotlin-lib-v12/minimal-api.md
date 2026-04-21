# V12 最小 API 调用

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
import cn.qfys521.onebot.v12.lib.api.v12Api
import cn.qfys521.onebot.v12.lib.model.Segment
import cn.qfys521.onebot.v12.lib.model.SendMessageRequest
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val client = createOneBotV12Client(
        OneBotClientConfig(
            baseUrl = System.getenv("ONEBOT_BASE_URL") ?: "http://127.0.0.1:6700",
            platform = System.getenv("ONEBOT_PLATFORM") ?: "kook",
            accountId = System.getenv("ONEBOT_ACCOUNT_ID") ?: "demo",
            accessToken = System.getenv("ONEBOT_ACCESS_TOKEN")
        )
    )
    val api = client.v12Api()

    client.start()
    try {
        println(api.getSelfInfo())
        val targetUser = System.getenv("ONEBOT_TARGET_USER_ID")
        if (!targetUser.isNullOrBlank()) {
            println(
                api.sendMessage(
                    SendMessageRequest(
                        detailType = "private",
                        userId = targetUser,
                        message = listOf(Segment.text("hello from onebot-v12"))
                    )
                )
            )
        }
    } finally {
        client.close()
    }
}
```

