import React, {Component} from 'react';

import NotificationItem from './NotoficationItem';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class NotificationList extends Component {
  static propTypes = {
    data: React.PropTypes.array,
    count: React.PropTypes.number,
    setCountBadges: React.PropTypes.func.isRequired
  };
  render() {
    const notification = this.props.data ? this.props.data.map(item => <NotificationItem count={this.props.count} setCountBadges={this.props.setCountBadges} {...item} key={item.id}/>) : '';
    return (
      <List>
        <Subheader>Уведомления</Subheader>
        {notification}
        <ListItem
          primaryText="Настройки"
        />
      </List>
    );
  }
}
