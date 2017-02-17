import React, {Component} from 'react';

import NotificationItem from './NotoficationItem';

import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';


export default class NotificationList extends Component {
  static propTypes = {
    data: React.PropTypes.array,
    setOpenAllNotification: React.PropTypes.func.isRequired
  };
  render() {
    const notification = this.props.data.map(item => <NotificationItem {...item} key={item.id}/>);
    return (
      <List>
        <Subheader>Уведомления</Subheader>
        {notification}
        <MenuItem
          primaryText={'Показать все уведомления'}
          onTouchTap={this.props.setOpenAllNotification(true)}
        />
      </List>
    );
  }
}
