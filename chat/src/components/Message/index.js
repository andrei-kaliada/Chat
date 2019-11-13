import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';
import { Icon } from 'antd';

import './Message.scss';

const iconRead = {
    display: 'flex',
    alignItems: 'flex-end',
    color: 'red',
    marginBottom: '20px',
    marginRight: '8px',
}

const Message = ({ avatar, text, date, user, isMe, isReady, attachments }) => {

    return (
        <div className={classNames('message', { 'message--isme': isMe })}>
            <div className="message__content">
                {isMe ?
                    <div style={iconRead}>
                        {isReady ?
                            (<Icon type="check" />) :
                            (<Icon type="check-circle" style={{ color: 'green' }} />)
                        }
                    </div>
                    : ""}
                    <div className="message__avatar">
                        <img src={avatar} alt={`Avatar ${user.fullname}`} />
                    </div>
                    <div className="message__info">
                        <div className="message__bubble">
                            <div className="message__text">
                                <p>{text}</p>
                            </div>
                        </div>
                        <span className="message__date">
                            {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}
                        </span>
                    </div> 
            </div>

            {/* <div className="message__attachments">
                {attachments && attachments.map(item => (
                    <div className="message__attachments-item">
                        <img src={item.url} alt={item.filename} />
                    </div>
                ))}
            </div> */}
        </div>

    );
}

Message.defaultProps = {
    user: {},
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
}

export default Message;