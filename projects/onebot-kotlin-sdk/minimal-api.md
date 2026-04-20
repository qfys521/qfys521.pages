# 最小 API 调用（发送消息 / 查自身信息）

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
import cn.qfys521.onebot.v12.lib.model.ResponseStatus
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

    val selfInfo = client.getSelfInfo()
    println("self_info status=${selfInfo.status}, data=${selfInfo.data}")

    val sendResp = client.sendMessage(
        SendMessageRequest(
            detailType = "private",
            userId = System.getenv("ONEBOT_TARGET_USER_ID") ?: "123456",
            message = listOf(Segment.text("hello from onebot-kotlin-sdk"))
        )
    )

    if (sendResp.status == ResponseStatus.OK) {
        println("send_message ok, messageId=${sendResp.data?.messageId}")
    } else {
        println("send_message failed, retcode=${sendResp.retcode}, msg=${sendResp.message}")
    }

    client.close()
}
```

- 私聊：`detailType = "private"` + `userId`
- 群聊：`detailType = "group"` + `groupId`
- 频道：`detailType = "channel"` + `guildId` + `channelId`

