// 向用户申请通知权限，用户可以选择允许或禁止
// Notification.requestPermission 只有在页面上才可执行，Service Worker 内部不可申请权限
Notification.requestPermission().then(grant => {
    console.log(grant); // 如果获得权限，会得到 granted
    if (Notification.permission === 'denied') {
        // 用户拒绝了通知权限
        console.log('Permission for Notifications was denied');
    }
    else {
        console.log('Permission for Notifications was allowed');
    }
});

let reg;
const applicationServerKey = 'xxx'; // 应用服务器的公钥（base64 网址安全编码）
navigator.serviceWorker.ready.then(_reg => {
    reg = _reg;
    // 获取当前订阅的推送
    return reg.pushManager.getSubscription();
})
.then(subscription => {
    // 获取的结果没有任何订阅，发起一个订阅
    if (!subscription) {
        return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        });
    } else {
        // 每一个会话会有一个独立的端点(endpoint)，用于推送时后端识别
        return console.log("已订阅 endpoint:", subscription.endpoint);
    }
})
.then(subscription => {
    if (!subscription) {
        return;
    }

    // 订阅成功
    console.log('订阅成功！', subscription.endpoint);

    // 做更多的事情，如将订阅信息发送给后端，用于后端推送识别
    // const key = subscription.getKey('p256dh');
    // updateStatus(subscription.endpoint, key, 'subscribe');
})
.catch(function (e) {
    // 订阅失败
    console.log('Unable to subscribe to push.', e);
});