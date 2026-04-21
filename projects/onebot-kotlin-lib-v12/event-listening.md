# V12 事件监听

`OneBotClient.events` 是 `Flow<OneBotEvent>`。

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
import cn.qfys521.onebot.v12.lib.model.OneBotEvent
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val client = createOneBotV12Client(
        OneBotClientConfig(
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
                is OneBotEvent.PrivateMessageEvent -> println("[private] ${event.altMessage}")
                is OneBotEvent.GroupMessageEvent -> println("[group] ${event.altMessage}")
                else -> println("[event] type=${event.type}, detail=${event.detailType}")
            }
        }
    } finally {
        client.close()
    }
}
```

