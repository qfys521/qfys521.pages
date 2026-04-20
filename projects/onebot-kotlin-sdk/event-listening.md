# 事件监听示例

`OneBotClient.events` 是 `Flow<OneBotEvent>`，可以直接按类型分发。

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
import cn.qfys521.onebot.v12.lib.model.OneBotEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
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

    val job = CoroutineScope(Dispatchers.Default).launch {
        client.events.collect { event ->
            when (event) {
                is OneBotEvent.PrivateMessageEvent -> {
                    println("[private] user=${event.userId}, text=${event.altMessage}")
                }

                is OneBotEvent.GroupMessageEvent -> {
                    println("[group] group=${event.groupId}, user=${event.userId}, text=${event.altMessage}")
                }

                is OneBotEvent.HeartbeatMetaEvent -> {
                    println("[heartbeat] interval=${event.interval}")
                }

                else -> {
                    println("[event] type=${event.type}, detail=${event.detailType}")
                }
            }
        }
    }

    // 示例中等待 Ctrl+C；真实项目可由应用生命周期统一管理。
    job.join()
}
```

如果你更喜欢注解风格，也可以用 `@Event` + `listenEventsAnnotated` 自动按参数类型分发：

```kotlin
import cn.qfys521.onebot.v12.lib.api.Event
import cn.qfys521.onebot.v12.lib.api.listenEventsAnnotated
import cn.qfys521.onebot.v12.lib.model.OneBotEvent
import kotlinx.coroutines.runBlocking

private class MyListener {
    @Event
    fun onPrivate(event: OneBotEvent.PrivateMessageEvent) {
        println("[private] user=${event.userId}, text=${event.altMessage}")
    }

    @Event
    fun onAny(event: OneBotEvent) {
        println("[event] type=${event.type}, detail=${event.detailType}")
    }
}

fun main(): Unit = runBlocking {
    // ...create client
    val job = client.listenEventsAnnotated(MyListener(), this)
    job.join()
}
```

如果你只想收一条事件做连通性检查，可参考 `onebot-v12-example/src/main/kotlin/cn/qfys521/onebot/v12/example/Main.kt` 中的示例。

