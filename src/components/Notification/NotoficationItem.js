import React from 'react';

import {ListItem} from 'material-ui/List';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import 'moment/locale/ru';

export default class NotoficationItem extends React.Component {
  static propTypes = {
    count: React.PropTypes.number,
    data: React.PropTypes.array,
    setCountBadges: React.PropTypes.func.isRequired
  };
  componentDidMount() {
    if (this.props.data.unread) {
      this.props.setCountBadges(this.props.count + 1);
    }
  }
  render() {
    return (
      <div>
        {this.props.data.unread &&
          <ListItem
            primaryText={this.props.data.title}
            secondaryText={<time dateTime={this.props.data.datetime}>{moment(this.props.data.datetime).fromNow()}</time>}
            leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
          />
        }
      </div>
    );
  }
}
