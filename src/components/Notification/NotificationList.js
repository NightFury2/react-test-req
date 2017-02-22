import React from 'react';

import NotificationItem from './NotoficationItem';

import {List, ListItem} from 'material-ui/List';


export default class NotificationList extends React.Component {
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
    return (
      <List>
        <ListItem primaryText={'Уведомления'} disabled/>
        {notification}
      </List>
    );
  }
}
