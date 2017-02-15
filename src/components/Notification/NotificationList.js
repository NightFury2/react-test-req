import React, {Component} from 'react';

import NotificationItem from './NotoficationItem';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class NotificationList extends Component {
  static propTypes = {
    data: React.PropTypes.array
  };
  render() {
    const notification = this.props.data.map(item => <NotificationItem {...item} key={item.id}/>);
    return (
      <List>
        <Subheader>Уведомления</Subheader>
        {notification}
        <ListItem
          primaryText={'Показать все уведомления'}
        />
      </List>
    );
  }
}
