import React from 'react';

import NotificationContainer from './NotificationContainer';

import IconButton from 'material-ui/IconButton';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import NotificationNoneIcon from 'material-ui/svg-icons/social/notifications-none';

const styleIcon = {
  color: 'white'
};

export default class Notification extends React.Component {
  static propTypes = {
    // notification
    open: React.PropTypes.bool,
    data: React.PropTypes.array,
    setOpen: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
  };
  state = {
    anchorEl: {}
  };
  handleOpenNotification = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.props.setOpen(true);
    this.setState({
      anchorEl: event.currentTarget,
    });
  };
  handleCloseNotification = () => {
    this.props.setOpen(false);
  };
  render() {
    const notification = this.state.open ? <NotificationIcon/> : <NotificationNoneIcon/>;
    return (
       <div>
         <NotificationContainer
            checkNotification={this.props.checkNotification}
            open={this.props.open}
            data={this.props.data}
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
