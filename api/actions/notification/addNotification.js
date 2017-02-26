import loadNotification from './loadNotification';

export default function addNotification(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (req) {
        loadNotification(req).then((data) => {
          const notifications = data;
          const notification = req.body;
          if (notification.id) {
            notifications.push(notification);
            req.session.notification = notifications;
          }
          resolve(notifications);
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