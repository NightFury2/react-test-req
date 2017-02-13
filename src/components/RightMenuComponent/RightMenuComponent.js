import React from 'react';

import Notification from '../Notification/Notification';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';
import SearchIcon from 'material-ui/svg-icons/action/search';

export default class RightMenuComponent extends React.Component {
  static propTypes = {
    // notification
    notification: React.PropTypes.object,
    setOpen: React.PropTypes.func.isRequired,
  };
  render() {
    return (
      <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
        <ToolbarGroup>
          <SearchIcon style={{color: 'white'}}/>
          <Badge
            badgeContent={4}
            secondary
            badgeStyle={{top: '25px', right: '25px'}}
            style={{marginBottom: '14px'}}
          >
            <Notification setOpen={this.props.setOpen} data={this.props.notification.data} open={this.props.notification.open}/>
          </Badge>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
