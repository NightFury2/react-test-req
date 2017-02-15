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
    setCountBadges: React.PropTypes.func.isRequired
  };
  state = {
    count: this.props.data.length
  };
  componentWillReceiveProps(nextProps) {
    this.setState({count: nextProps.data.length});
  }
  render() {
    const viewBadge = this.state.count > 0 ? 'visible' : 'hidden';
    return (
      <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
        <ToolbarGroup>
          <Badge
            badgeContent={this.state.count}
            secondary
            badgeStyle={{top: '25px', right: '25px', visibility: viewBadge}}
            style={{marginBottom: '14px'}}
          >
            <Notification setOpen={this.props.setOpen}
                          data={this.props.data}
                          open={this.props.open}
            />
          </Badge>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
