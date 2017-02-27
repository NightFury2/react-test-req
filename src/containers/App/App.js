import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import MenuContent from '../../components/MenuContent/MenuContent';
import RightMenuComponent from '../../components/RightMenuComponent/RightMenuComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {addScrollEvent, getTarget, removeScrollEvent} from '../../utils/events';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import {setTitle} from '../../redux/modules/appBar';
import {setOpen, isLoaded as isLoadNotification, load as loadNotification, checkNotification} from '../../redux/modules/notification';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {push} from 'react-router-redux';

const muiTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sanc-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
};
injectTapEventPlugin();

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    console.log('loading');
    const promises = [];

    if (!isLoadNotification(getState())) {
      promises.push(dispatch(loadNotification()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    title: state.appBar.title,
    data: state.notification.data,
    open: state.notification.open,
    loaded: state.notification.loaded,
    errorLoadNotification: state.notification.errorLoadNotification,
    errorCheckNotification: state.notification.errorCheckNotification,
    loadingNotification: state.notification.loadingNotification,
    loadingCheckNotification: state.notification.loadingCheckNotification,
  }),
  {setTitle, setOpen, checkNotification, pushState: push})
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    // react-router-redux
    pushState: React.PropTypes.func.isRequired,
    // notification
    data: React.PropTypes.array,
    open: React.PropTypes.bool,
    loaded: React.PropTypes.bool,
    loadingNotification: React.PropTypes.bool,
    loadingCheckNotification: React.PropTypes.bool,
    errorLoadNotification: React.PropTypes.object,
    errorCheckNotification: React.PropTypes.object,
    setOpen: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
    // appBar
    title: React.PropTypes.string,
    setTitle: React.PropTypes.func,
  };
  state = {
    openMenu: false,
  };
  componentDidMount() {
    this.props.setTitle('Главная');
    addScrollEvent(this.refs.appScroll, this.scrollComponent);
  }
  componentWillUnmount() {
    removeScrollEvent(this.refs.appScroll, this.scrollComponent);
  }
  menuOpen = () => {
    this.setState({openMenu: true});
  };
  scrollComponent = (events) => {
    const event = getTarget(events);
    console.log(event);
  };
  menuClose = () => {
    this.setState({openMenu: false});
  };
  render() {
    const {openMenu} = this.state;
    const styles = require('./App.scss');
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div ref="appScroll">
            <div className={'row ' + styles.app}>
              <AppBar
                 style={{position: 'fixed'}}
                 title={this.props.title ? this.props.title : 'Загрузка...'}
                 iconElementLeft={<IconButton onTouchTap={this.menuOpen}><NavigationMenu/></IconButton>}
                 iconElementRight={
                   <RightMenuComponent checkNotification={this.props.checkNotification}
                                       loaded={this.props.loaded}
                                       loadingCheckNotification={this.props.loadingCheckNotification}
                                       loadingNotification={this.props.loadingNotification}
                                       open={this.props.open}
                                       data={this.props.data}
                                       setOpen={this.props.setOpen}
                   />
                 }
              />
              <Drawer
                width={340}
                docked={false}
                open={openMenu}
                onRequestChange={this.menuClose}
              >
                <MenuContent
                   setTitle={this.props.setTitle}
                   pushState={this.props.pushState}
                   menuClose={this.menuClose}
                />
              </Drawer>
              <Helmet {...config.app.head}/>
            </div>
           <div className={'s12 '}>
              {this.props.children}
            </div>
          </div>
       </MuiThemeProvider>
    );
  }
}
