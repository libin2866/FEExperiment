var CACHE_CACHE_VERSION = 'ver1.0';

// 缓存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll([
        './index.html',
        './static/jquery.min.js',
        './static/time.jpg'
      ]);
    })
  );
});

// 缓存更新
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {


      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== CACHE_VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据 fetch 不会带 http 信息
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    }).then(function(response) {
      // 返回命中的文件
      if (response) {
        return response;
      }
      if (navigator.online) {
        // 如果为联网状态
        //onlineActions();
      }
      else {
        // 如果为离线状态
        // offlineActions();
      }

      caches.open(CACHE_VERSION).then(function(cache) {
        cache.put(event.request, response);
      });
      return response.clone();
   }).catch(function() {
    return caches.match('./static/time.jpg');
  }));
});

self.addEventListener('push', function(event) {
    // 读取 event.data 获取传递过来的数据，根据该数据做进一步的逻辑处理
    const obj = event.data.json();

    // 逻辑处理示例
    if(Notification.permission === 'granted' && obj.action === 'subscribe') {
        self.registration.showNotification("Hi Notification：", {
            body: 'Notification body',
            icon: 'https://avatars2.githubusercontent.com/u/1854353?s=96&v=4',
            tag: 'push'
        });
    }
});

self.addEventListener('message', function(ev) {
    console.log('获得消息:')
    console.log(ev.data);
});

self.clients.matchAll().then(clientList => {
    clientList.forEach(client => {
        client.postMessage('Hi, I am send from Service worker！');
    })
});


self.addEventListener('offline', function() {
    Notification.requestPermission().then(grant => {
        if (grant !== 'granted') {
            return;
        }
        console.log('掉线了！！');
        const notification = new Notification("网络不给力", {
            body: '虽然离线了，但访问过的页面还可以继续打开',
            icon: 'https://avatars2.githubusercontent.com/u/1854353?s=96&v=4'
        });

        notification.onclick = function() {
            notification.close();
        };
    });
});

self.addEventListener('online', function() {
    Notification.requestPermission().then(grant => {
        if (grant !== 'granted') {
            return;
        }
        console.log('上线了！！');
        const notification = new Notification("上线了", {
            body: '终于在线了',
            icon: 'https://avatars2.githubusercontent.com/u/1854353?s=96&v=4'
        });

        notification.onclick = function() {
            notification.close();
        };
    });
});

