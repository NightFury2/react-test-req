import React from 'react';

import Notification from '../Notification/Notification';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';

export default class RightMenuComponent extends React.Component {
  static propTypes = {
    // notification
    notification: React.PropTypes.object,
    setOpen: React.PropTypes.func.isRequired,
    count: React.PropTypes.number,
    setCountBadges: React.PropTypes.func.isRequired
  };
  componentDidMount() {
    const arr = this.props.notification.data.filter((item) => {return item.unread === true;});
    this.props.setCountBadges(arr.length);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.notification.data !== nextProps.notification.data) {
      const arr = nextProps.notification.data.filter((item) => {return item.unread === true;});
      this.props.setCountBadges(arr.length);
    }
  }

  render() {
    const viewBadge = this.props.count > 0 ? 'visible' : 'hidden';
    return (
      <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
        <ToolbarGroup>
          <Badge
            badgeContent={this.props.count}
            secondary
            badgeStyle={{top: '25px', right: '25px', visibility: viewBadge}}
            style={{marginBottom: '14px'}}
          >
            <Notification setOpen={this.props.setOpen} data={this.props.notification.data} open={this.props.notification.open}/>
          </Badge>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
