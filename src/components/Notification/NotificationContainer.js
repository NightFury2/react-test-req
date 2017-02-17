import React, {Component, PropTypes} from 'react';

import NotificationList from './NotificationList';

import Popover from 'material-ui/Popover/Popover';
import {List, ListItem} from 'material-ui/List';

export default class NotificationContainer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    data: React.PropTypes.array,
    anchorEl: PropTypes.object.isRequired,
    closeNotification: PropTypes.func.isRequired,
  };
  render() {
    const notification = this.props.data.length > 0 ?
      <NotificationList data={this.props.data}/>
      : (
        <List>
          <ListItem
            primaryText={'Уведомлений нет'}
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
