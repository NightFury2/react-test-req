import React from 'react';

import Notification from '../Notification/Notification';

import IconButton from 'material-ui/IconButton';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import SearchIcon from 'material-ui/svg-icons/action/search';

export default class RightMenuIcon extends React.Component {
  render() {
    return (
      <ToolbarGroup>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <Notification/>
      </ToolbarGroup>
    );
  }
}