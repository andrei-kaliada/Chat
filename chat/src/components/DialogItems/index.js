import React, { useReducer } from 'react';
import classNames from 'classnames';
import { Time, IconRead } from '../index';

import './DialogItems.scss';

const getAvatar = avatar => {
    if(avatar){
        return (
            <img src={avatar} alt=""/>
        );
    }else{
        //make avatar
    }
}

const DialogItem = ({ user, message, date }) => {

    return(
       <div className="dialogs__item dialogs__item--online">
           <div className="dialogs__item-avatar">
               {/* <img src={user.avatar} alt={`${user.fullname}`} /> */}
               {getAvatar('https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1')}
              
           </div>
           <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Andrey Koleda</b>
                    <span>
                        {/* <Time date={date}/> */}
                        13.03
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   {/* <IconRead isMe={true} isReady={false} /> */}
                   <div className="dialogs__item-info-bottom-count">
                       3
                   </div>
                </div>
           </div>
       </div>
    );
}

export default DialogItem;