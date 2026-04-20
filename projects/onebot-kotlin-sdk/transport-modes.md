# 四种通信模式配置示例（正向/反向 HTTP/WS）

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.OneBotTransportMode
```

## 正向 HTTP（FORWARD_HTTP）

```kotlin
OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.FORWARD_HTTP,
    accessToken = "your-token",
    receiveEventsByWebSocket = true,
    wsUrl = "ws://127.0.0.1:6700/onebot/v12/ws"
)
```

## 正向 WS（FORWARD_WS）

```kotlin
OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.FORWARD_WS,
    wsUrl = "ws://127.0.0.1:6700/onebot/v12/ws",
    accessToken = "your-token"
)
```

## 反向 HTTP（REVERSE_HTTP）

```kotlin
OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.REVERSE_HTTP,
    reverseHost = "0.0.0.0",
    reversePort = 8080,
    reverseHttpPath = "/onebot/v12/http",
    reverseHttpActionBaseUrl = "http://127.0.0.1:6700"
)
```

## 反向 WS（REVERSE_WS）

```kotlin
OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.REVERSE_WS,
    reverseHost = "0.0.0.0",
    reversePort = 8080,
    reverseWsPath = "/onebot/v12/ws"
)
```

