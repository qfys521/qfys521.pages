# V11 通信模式

V11 使用 `OneBotV11ClientConfig` + `createOneBotV11Client`。

```kotlin
import cn.qfys521.onebot.v11.impl.OneBotV11ClientConfig
import cn.qfys521.onebot.v11.impl.OneBotV11TransportMode

val forwardHttp = OneBotV11ClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotV11TransportMode.FORWARD_HTTP,
    receiveEventsByWebSocket = true
)

val forwardWs = forwardHttp.copy(mode = OneBotV11TransportMode.FORWARD_WS)
val reverseHttp = forwardHttp.copy(mode = OneBotV11TransportMode.REVERSE_HTTP)
val reverseWs = forwardHttp.copy(mode = OneBotV11TransportMode.REVERSE_WS)
```

