import loadNotification from './loadNotification';

export default function removeNotification(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (req) {
        loadNotification(req).then((data) => {
          const notifications = data;
          notifications.splice(0, notifications.length);
          if (notifications.length > 0) {
            reject({
              error: 'Not removed notification'
            });
          } else {
            resolve(notifications);
          }
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
