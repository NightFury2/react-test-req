import loadNotification from './loadNotification';

export default function checkAllNotitification(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (req) {
        loadNotification(req).then((data) => {
          const notification = data.map(item => {
            return {
              id: item.id,
              title: item.title,
              unread: false,
              datetime: item.datetime
            };
          });
          console.log(notification);
          req.session.notification = notification;
          resolve(notification);
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
