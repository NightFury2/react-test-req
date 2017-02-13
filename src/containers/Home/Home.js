import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';


import {setOpen} from '../../redux/modules/notification';
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
    open: state.notification.open
  }),
  {setOpen})
export default class Home extends Component {
  static propTypes = {
    open: React.PropTypes.bool,
    setOpen: React.PropTypes.func.isRequired
  };
  render() {
    const style = require('./Home.scss');
    const textToggle = this.props.open ? 'Скрыть' : 'Показать';
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <div className="col s12">
          <h1 className="center">Добавление оповещений</h1>
          <form>
            <TextField className={style.inputs} floatingLabelText="Введите название события..."/>
            <RaisedButton style={styleButton.formButton} primary label="Отправить"/>
          </form><br/>
          <div className="row">
            <div className="col s12 m4">
              <RaisedButton style={styleButton.settingButton} fullWidth primary label="Пометить все события прочитанными"/><br/>
              <RaisedButton style={styleButton.settingButton} fullWidth primary label="Удалить все события"/><br/>
              <Toggle toggled={this.props.open}
                      defaultToggled={this.props.open}
                      onToggle={this.props.setOpen(!this.props.open)}
                      style={styleButton.settingButton}
                      labelStyle={{fontSize: '20px'}}
                      labelPosition="right"
                      label={textToggle + ' попап нотификации'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
