import React from 'react';

import NotificationItem from '../../components/Notification/NotoficationItem';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import {setOpen, removeNotification, addNotification, checkNotification, checkAllNotification, setOpenAllNotification} from '../../redux/modules/notification';
import {connect} from 'react-redux';

const styleButton = {
  formButton: {
    marginLeft: '10px'
  },
  settingButton: {
    marginTop: '10px'
  }
};

@connect(
  state => ({
    open: state.notification.open,
    data: state.notification.data,
    openAllNotification: state.notification.openAllNotification
  }),
  {setOpen, removeNotification, checkAllNotification, checkNotification, setOpenAllNotification, addNotification})
export default class Home extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool,
    openAllNotification: React.PropTypes.bool,
    data: React.PropTypes.array,
    setOpen: React.PropTypes.func.isRequired,
    removeNotification: React.PropTypes.func.isRequired,
    addNotification: React.PropTypes.func.isRequired,
    setOpenAllNotification: React.PropTypes.func.isRequired,
    checkAllNotification: React.PropTypes.func.isRequired,
    checkNotification: React.PropTypes.func.isRequired,
  };
  state = {
    titleNotification: '',
    id: 20,
    errorTextFieldMessage: ''
  };
  componentDidMount() {
    this.timer = setInterval(this.CreateNotification, 20000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  CreateNotification = () => {
    const title = Math.random() * (1000 - 100) + 100;
    const id = this.state.id;
    this.setState({id: id + 1});
    const item = {
      id: id,
      title: title,
      unread: true,
      datetime: new Date(),
    };
    this.props.addNotification(this.props.data, item);
  };
  changeNotificationTitle = (event) => {
    this.setState({titleNotification: event.target.value});
  };
  handleCheckAllNotification = () => {
    this.props.checkAllNotification(this.props.data);
  };
  handleAddNotification = () => {
    if (this.state.titleNotification.length > 3) {
      const title = this.state.titleNotification;
      const id = this.state.id;
      this.setState({id: id + 1});
      const item = {
        id: id,
        title: title,
        unread: true,
        datetime: new Date(),
      };
      this.setState({titleNotification: '', errorTextFieldMessage: ''});
      this.props.addNotification(this.props.data, item);
    } else {
      this.setState({errorTextFieldMessage: 'Введите не меньше 3 символов'});
    }
  };
  render() {
    const style = require('./Home.scss');
    const textToggle = this.props.open ? 'Скрыть' : 'Показать';
    const textToggleAllNotification = this.props.openAllNotification ? 'Скрыть' : 'Показать';
    const styleShowAllNotification = this.props.openAllNotification ? 'block' : 'none';
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <div className="col s12">
          <h1 className="center">Добавление оповещений</h1>
          <div className="row">
            <div className="col s12 m6">
              <div className="row">
                <TextField className={style.inputs}
                           errorText={this.state.errorTextFieldMessage}
                           value={this.state.titleNotification}
                           floatingLabelStyle={{fontSize: '18px'}}
                           floatingLabelFocusStyle={{fontSize: '18px'}}
                           onChange={this.changeNotificationTitle}
                           floatingLabelText="Введите название события..."
                />
                <RaisedButton onTouchTap={this.handleAddNotification} style={styleButton.formButton} primary label="Отправить"/>
              </div>
              <div className="row">
                <RaisedButton style={styleButton.settingButton}
                              fullWidth
                              onTouchTap={this.handleCheckAllNotification}
                              primary
                              label="Пометить все события прочитанными"
                /><br/>
                <RaisedButton style={styleButton.settingButton}
                              fullWidth
                              primary
                              onTouchTap={() => this.props.removeNotification(this.props.data)}
                              label="Удалить все события"
                /><br/>
                <Toggle toggled={this.props.open}
                        defaultToggled={this.props.open}
                        onToggle={() => this.props.setOpen(!this.props.open)}
                        style={styleButton.settingButton}
                        labelStyle={{fontSize: '20px'}}
                        labelPosition="right"
                        label={textToggle + ' попап нотификации'}
                />
              </div>
            </div><br/>
            <div className="col s12 m6">
              <Toggle toggled={this.props.openAllNotification}
                      defaultToggled={this.props.openAllNotification}
                      onToggle={() => this.props.setOpenAllNotification(!this.props.openAllNotification)}
                      labelStyle={{fontSize: '20px'}}
                      label={textToggleAllNotification + ' все оповещения'}
              /><br/>
              <div className="row" style={{display: styleShowAllNotification}}>
                <div className="col s12">
                  <List>
                    <Subheader className="center">Оповещения</Subheader>
                    {this.props.data.length > 0 &&
                      this.props.data.map(item => <NotificationItem data={this.props.data} checkNotification={this.props.checkNotification} {...item} key={item.id}/>)
                    }
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
