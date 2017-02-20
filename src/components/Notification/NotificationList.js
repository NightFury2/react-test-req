import React, {Component} from 'react';

import NotificationItem from './NotoficationItem';

import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class NotificationList extends Component {
  static propTypes = {
    data: React.PropTypes.array,
    checkNotification: React.PropTypes.func.isRequired,
  };
  render() {
    const notification = this.props.data.map((item) => {
      if (item.unread) {
        return <NotificationItem data={this.props.data} checkNotification={this.props.checkNotification} {...item} key={item.id}/>;
      }
    });
    const notificationFilter = notification.splice(0, 5);
    return (
      <List>
        <Subheader>Уведомления</Subheader>
        {notificationFilter}
      </List>
    );
  }
}
