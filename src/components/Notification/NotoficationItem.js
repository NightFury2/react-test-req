import React from 'react';

import {ListItem} from 'material-ui/List';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import DoneIcon from 'material-ui/svg-icons/action/done';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';
import cyan100 from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import 'moment/locale/ru';

export default class NotoficationItem extends React.Component {
  render() {
    const notification = this.props;
    const iconItem = notification.unread ? <DoneIcon/> : <DoneAllIcon/>;
    return (
      <div>
        <ListItem
          rightIcon={iconItem}
          hoverColor={cyan100}
          onTouchTap={() => notification.checkNotification(notification.data, notification.id)}
          primaryText={notification.title}
          secondaryText={<time dateTime={notification.datetime}>{moment(notification.datetime).fromNow()}</time>}
          leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
        />
      </div>
    );
  }
}
