# V11 事件监听

`OneBotV11Client.events` 是 `Flow<OneBotV11Event>`。

```kotlin
import cn.qfys521.onebot.v11.impl.OneBotV11ClientConfig
import cn.qfys521.onebot.v11.impl.createOneBotV11Client
import cn.qfys521.onebot.v11.lib.model.OneBotV11Event
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val client = createOneBotV11Client(
        OneBotV11ClientConfig(
            baseUrl = "http://127.0.0.1:6700",
            platform = "kook",
            accountId = "demo",
            receiveEventsByWebSocket = true
        )
    )

    client.start()
    try {
        client.events.collect { event ->
            when (event) {
                is OneBotV11Event.PrivateMessageEvent -> println("[private] ${event.rawMessage}")
                is OneBotV11Event.GroupMessageEvent -> println("[group] ${event.rawMessage}")
                else -> println("[event] post_type=${event.postType}")
            }
        }
    } finally {
        client.close()
    }
}
```

