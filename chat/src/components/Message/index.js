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

const Message = ({ avatar, text, date, user, isMe, isReady, attachments, isTyping }) => {

    return (
        <div className={classNames('message', { 
            'message--isme': isMe,
            'message--is-typing':isTyping, 
            })}>
            <div className="message__content">
                {isMe ?
                    <div style={iconRead}>
                        {isReady ?
                            (<Icon type="check" className="message__icon-readed" />) :
                            (<Icon type="check-circle" className="message__icon-readed" style={{ color: 'green' }} />)
                        }
                    </div>
                    : ""}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className="message__info">
                    {( text || isTyping) && <div className="message__bubble">
                        <div className="message__text">
                            { text && <p>{text}</p>}
                           { isTyping &&
                            <div className="message_typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            }
                        </div>
                    </div>}
                    <div className="message__attachments">
                        {attachments && attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                    </div>
                    { date && 
                    <span className="message__date">
                        {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}
                    </span>
                    }
                </div>
            </div>
        </div>

    );
}

Message.defaultProps = {
    user: {},
    isTyping:false,
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    isTyping:PropTypes.bool,
}

export default Message;