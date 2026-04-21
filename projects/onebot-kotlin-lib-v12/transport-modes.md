# V12 通信模式

V12 使用 `OneBotClientConfig` + `createOneBotV12Client`。

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.OneBotTransportMode

val forwardHttp = OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.FORWARD_HTTP,
    receiveEventsByWebSocket = true
)

val forwardWs = forwardHttp.copy(mode = OneBotTransportMode.FORWARD_WS)
val reverseHttp = forwardHttp.copy(mode = OneBotTransportMode.REVERSE_HTTP)
val reverseWs = forwardHttp.copy(mode = OneBotTransportMode.REVERSE_WS)
```

