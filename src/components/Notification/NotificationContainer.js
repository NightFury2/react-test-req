import React from 'react';

import NotificationList from './NotificationList';

import Popover from 'material-ui/Popover/Popover';

export default class NotificationContainer extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    data: React.PropTypes.array,
    loaded: React.PropTypes.bool,
    loadingNotification: React.PropTypes.bool,
    loadingCheckNotification: React.PropTypes.bool,
    anchorEl: React.PropTypes.object.isRequired,
    closeNotification: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
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
         <NotificationList checkNotification={this.props.checkNotification}
                           data={this.props.data}
                           loaded={this.props.loaded}
                           loadingCheckNotification={this.props.loadingCheckNotification}
                           loadingNotification={this.props.loadingNotification}
         />
      </Popover>
    );
  }
}
