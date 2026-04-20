# 事件监听示例

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
import cn.qfys521.onebot.v12.lib.model.OneBotEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.collect
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
                is OneBotEvent.PrivateMessageEvent ->
                    println("[private] user=${event.userId}, text=${event.altMessage}")

                is OneBotEvent.GroupMessageEvent ->
                    println("[group] group=${event.groupId}, user=${event.userId}, text=${event.altMessage}")

                is OneBotEvent.HeartbeatMetaEvent ->
                    println("[heartbeat] interval=${event.interval}")

                else ->
                    println("[event] type=${event.type}, detail=${event.detailType}")
            }
        }
    }

    job.join()
}
```

只做连通性检查时，也可以用 `client.events.first()` 收一条事件后退出。

