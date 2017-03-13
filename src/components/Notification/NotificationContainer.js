import React from 'react';

import NotificationList from './NotificationList';

import Popover from 'material-ui/Popover/Popover';
import {List, ListItem} from 'material-ui/List';

export default class NotificationContainer extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    data: React.PropTypes.array,
    anchorEl: React.PropTypes.object.isRequired,
    closeNotification: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
  };
  render() {
    const notification = this.props.data.length > 0 ?
      <NotificationList checkNotification={this.props.checkNotification} data={this.props.data}/>
      : (
        <List>
          <ListItem
            primaryText={'Новых уведомлений нет'}
            disabled
          />
        </List>
      );
    return (
       <Popover
          open={this.props.open}
          anchorEl={this.props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.props.closeNotification}
      >
         {notification}
      </Popover>
    );
  }
}
