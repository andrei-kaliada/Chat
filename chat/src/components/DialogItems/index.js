import React, { useReducer } from 'react';
import classNames from 'classnames';
import { IconRead } from '../index';
import isToday from 'date-fns/isToday';
import format  from 'date-fns/format';

import './DialogItems.scss';


const getMessageTime = created_at => {
    if(isToday(created_at)){
        return format(created_at, 'HH:mm');
    }else{
        return format(created_at, 'dd.MM.yyyy');
    }
}

const getAvatar = (avatar, fullname) => {
    if(avatar){
        return (
            <img src={avatar} alt={fullname}/>
        );
    }else{
        //make avatar
    }
}

const DialogItem = ({ user, message, date, unreaded, isMe}) => {

    return(
       <div className={classNames("dialogs__item" , {"dialogs__item--online":user.isOnline})}>
           <div className="dialogs__item-avatar">
               {getAvatar(user.avatar, user.fullname)}      
           </div>
           <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(message.created_at)}                      
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{message.text}</p>
                {/* {unreaded ?
                "" : <IconRead isMe={true} isReady={false} />  } */}
                {isMe && <IconRead isMe={true} isReady={false} />}
                   { unreaded > 0 && <div className="dialogs__item-info-bottom-count">
                       {unreaded}
                   </div>}
                </div>
           </div>
       </div>
    );
}

export default DialogItem;