import React, {Component} from 'react';

import NotificationView from './NotificationView';

import IconButton from 'material-ui/IconButton';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import NotificationNoneIcon from 'material-ui/svg-icons/social/notifications-none';

const styleIcon = {
  color: 'white'
};

export default class Notification extends Component {
  state = {
    open: false,
    anchorEl: {}
  };
  handleOpenNotification = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleCloseNotification = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const notification = this.state.open ? <NotificationIcon/> : <NotificationNoneIcon/>;
    return (
       <div>
         <NotificationView
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          closeNotification={this.handleCloseNotification}
         />
         <IconButton
            iconStyle={styleIcon}
            onTouchTap={this.handleOpenNotification}
         >
           {notification}
         </IconButton>
       </div>
    );
  }
}
