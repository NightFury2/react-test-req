import React, {Component, PropTypes} from 'react';

import NotificationList from './NotificationList';

import Popover from 'material-ui/Popover/Popover';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class NotificationContainer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    data: React.PropTypes.array,
    anchorEl: PropTypes.object.isRequired,
    closeNotification: PropTypes.func.isRequired,
    count: React.PropTypes.number,
    setCountBadges: React.PropTypes.func.isRequired
  };
  render() {
    const notification = this.props.data.length > 0 ?
      <NotificationList count={this.props.count} setCountBadges={this.props.setCountBadges} data={this.props.data}/>
      : (
        <List>
          <Subheader>Уведомлений нет</Subheader>
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
