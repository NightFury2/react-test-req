import React, {Component, PropTypes} from 'react';

import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import HomeIcon from 'material-ui/svg-icons/action/home';

export default class MenuContent extends Component {
  static propTypes = {
    pushState: PropTypes.func,
    menuClose: PropTypes.func.isRequired,
    setTitle: React.PropTypes.func.isRequired
  };
  render() {
    return (
       <div>
         <AppBar
           title="Меню"
           iconElementLeft={<IconButton onTouchTap={this.props.menuClose}><NavigationCloseIcon/></IconButton>}
         />
         <ccLiveIcon/>
         <MenuItem primaryText="Главная" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
       </div>
    );
  }
}
