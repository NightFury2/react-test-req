import React from 'react';

import Notification from '../Notification/Notification';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';

export default class RightMenuComponent extends React.Component {
  static propTypes = {
    // notification
    data: React.PropTypes.array,
    open: React.PropTypes.bool,
    setOpen: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
  };
  state = {
    data: this.props.data.filter(item => {return item.unread;}),
  };
  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.data.filter(item => {return item.unread;})});
  }
  render() {
    const viewBadge = this.state.data.length > 0 ? 'visible' : 'hidden';
    return (
      <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
        <ToolbarGroup>
          <Badge
            badgeContent={this.state.data.length}
            secondary
            badgeStyle={{top: '25px', right: '25px', visibility: viewBadge}}
            style={{marginBottom: '14px'}}
          >
            <Notification setOpen={this.props.setOpen}
                          checkNotification={this.props.checkNotification}
                          data={this.props.data}
                          open={this.props.open}
            />
          </Badge>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
