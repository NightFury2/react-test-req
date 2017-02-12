import React, {Component, PropTypes} from 'react';

import Popover from 'material-ui/Popover/Popover';
import {List, ListItem} from 'material-ui/List';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

export default class NotificationView extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object.isRequired,
    closeNotification: PropTypes.func.isRequired
  };
  render() {
    return (
       <Popover
          open={this.props.open}
          anchorEl={this.props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.props.closeNotification}
      >
        <List>
          <Subheader>Уведомления</Subheader>
          <ListItem
            primaryText="Изменение в расписании"
            leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
          />
          <ListItem
            primaryText="изменения в расписание"
            leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
          />
          <ListItem
            primaryText="У вас новая позиция в рейтинге"
            leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
          />
          <ListItem
            primaryText="Настройки"
          />
        </List>
      </Popover>
    );
  }
}
