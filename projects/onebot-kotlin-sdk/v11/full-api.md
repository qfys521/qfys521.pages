# V11 完整 API

高层入口：

```kotlin
import cn.qfys521.onebot.v11.lib.api.v11Api
val api = client.v11Api()
```

主要分组：

- 消息与账号：`getLoginInfo`、`sendPrivateMessage`、`sendGroupMessage`、`sendMessage`、`deleteMessage`
- 查询：`getStrangerInfo`、`getFriendList`、`getGroupInfo`、`getGroupList`、`getGroupMemberInfo`、`getGroupMemberList`
- 扩展：`getMessage`、`getForwardMessage`、`sendLike`、`getGroupHonorInfo`
- 管理：`setGroupKick`、`setGroupBan`、`setGroupWholeBan`、`setGroupAdmin`、`setGroupCard`、`setGroupName`、`setGroupLeave`
- 请求处理与系统：`setFriendAddRequest`、`setGroupAddRequest`、`setRestart`、`cleanCache`

生命周期：

- `client.start()`
- `client.stop()`
- `client.close()`
- `client.isStarted`

