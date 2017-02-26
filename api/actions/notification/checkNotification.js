import loadNotification from './loadNotification';

export default function checkNotitification(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (req) {
        loadNotification(req).then((data) => {
          const notification = req.body;
          console.log(notification);
          if (notification.id) {
            const check = data.map(item => {
              if (item.id === notification.id) {
                console.log(item);
                return {
                  id: item.id,
                  title: item.title,
                  unread: false,
                  datetime: item.datetime
                };
              }
              return item;
            });
            req.session.notification = check;
            resolve(check);
          }
          resolve(data);
        }, err => {
          reject(err);
        });
      } else {
        reject({
          error: 'Not request'
        });
      }
    }, 1500); // simulate async db write
  });
}
