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

也可以使用 `@Event` 注解自动分发：

```kotlin
import cn.qfys521.onebot.v11.lib.api.Event
import cn.qfys521.onebot.v11.lib.api.listenEventsAnnotated
import cn.qfys521.onebot.v11.lib.model.OneBotV11Event
import kotlinx.coroutines.runBlocking

private class MyV11Listener {
    @Event
    fun onPrivate(event: OneBotV11Event.PrivateMessageEvent) {
        println("[private] ${event.rawMessage}")
    }

    @Event
    fun onAny(event: OneBotV11Event) {
        println("[event] post_type=${event.postType}")
    }
}

fun main(): Unit = runBlocking {
    // ...create client
    val job = client.listenEventsAnnotated(MyV11Listener(), this)
    job.join()
}
```

