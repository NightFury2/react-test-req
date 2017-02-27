import React from 'react';

import NotificationItem from './NotoficationItem';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';

import {List, ListItem} from 'material-ui/List';


export default class NotificationList extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
    loaded: React.PropTypes.bool,
    loadingNotification: React.PropTypes.bool,
    loadingCheckNotification: React.PropTypes.bool,
    checkNotification: React.PropTypes.func.isRequired,
  };
  render() {
    const notification = this.props.loaded ? this.props.data.map(item => {
      if (item.unread) {
        return <NotificationItem data={this.props.data} loadingCheckNotification={this.props.loadingCheckNotification} checkNotification={this.props.checkNotification} {...item} key={item.id}/>;
      }
    }) : <ListItem primaryText={'Сервер не доступен'} disabled/>;
    const loadingNotification = this.props.loadingNotification ? <CircularProgress/> : notification;
    return (
      <List>
        <ListItem primaryText={'Уведомления'} disabled/>
        {loadingNotification}
      </List>
    );
  }
}
