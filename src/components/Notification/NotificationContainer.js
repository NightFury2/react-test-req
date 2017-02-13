import React, {Component, PropTypes} from 'react';

import NotificationList from './NotificationList';

import Popover from 'material-ui/Popover/Popover';

export default class NotificationContainer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    data: React.PropTypes.array,
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
         <NotificationList data={this.props.data}/>
      </Popover>
    );
  }
}
