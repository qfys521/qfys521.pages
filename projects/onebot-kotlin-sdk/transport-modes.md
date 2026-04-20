# 四种通信模式配置示例（正向/反向 HTTP/WS）

以下均基于 `OneBotClientConfig` + `createOneBotV12Client`。

## 1) 正向 HTTP（FORWARD_HTTP）

```kotlin
val config = OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.FORWARD_HTTP,
    accessToken = "your-token",
    receiveEventsByWebSocket = true, // 正向 HTTP 下建议开 WS 收事件
    wsUrl = "ws://127.0.0.1:6700/onebot/v12/ws" // 可选
)
```

## 2) 正向 WS（FORWARD_WS）

```kotlin
val config = OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700", // 保留用于路径推导/兼容
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.FORWARD_WS,
    wsUrl = "ws://127.0.0.1:6700/onebot/v12/ws",
    accessToken = "your-token"
)
```

## 3) 反向 HTTP（REVERSE_HTTP）

```kotlin
val config = OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700", // 也可通过 reverseHttpActionBaseUrl 单独指定动作地址
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.REVERSE_HTTP,
    reverseHost = "0.0.0.0",
    reversePort = 8080,
    reverseHttpPath = "/onebot/v12/http",
    reverseHttpActionBaseUrl = "http://127.0.0.1:6700"
)
```

## 4) 反向 WS（REVERSE_WS）

```kotlin
val config = OneBotClientConfig(
    baseUrl = "http://127.0.0.1:6700",
    platform = "kook",
    accountId = "demo",
    mode = OneBotTransportMode.REVERSE_WS,
    reverseHost = "0.0.0.0",
    reversePort = 8080,
    reverseWsPath = "/onebot/v12/ws"
)
```

## 完整导入

```kotlin
import cn.qfys521.onebot.v12.impl.OneBotClientConfig
import cn.qfys521.onebot.v12.impl.OneBotTransportMode
import cn.qfys521.onebot.v12.impl.createOneBotV12Client
```

> 选型建议：
>
> - 你只需稳定调用动作接口：优先 `FORWARD_HTTP`
> - 你要动作 + 事件都走一条连接：`FORWARD_WS`
> - 平台要求把事件推给你：`REVERSE_HTTP` 或 `REVERSE_WS`

