# V12 完整 API

高层入口：

```kotlin
import cn.qfys521.onebot.v12.lib.api.v12Api
val api = client.v12Api()
```

主要分组：

- 消息与账号：`getSelfInfo`、`sendMessage`、`deleteMessage`
- 用户/好友：`getUserInfo`、`getFriendList`
- 群：`getGroupInfo`、`getGroupList`、`getGroupMemberInfo`、`getGroupMemberList`
- 频道：`getGuildInfo`、`getGuildList`、`getGuildMemberInfo`、`getGuildMemberList`、`getChannelInfo`、`getChannelList`
- 管理扩展：`setGroupName`、`leaveGroup`、`setGroupKick`、`setGroupBan`、`setGroupWholeBan`、`setGroupAdmin`

生命周期：

- `client.start()`
- `client.stop()`
- `client.close()`
- `client.isStarted`

