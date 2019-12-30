import React, { useReducer } from 'react';
import classNames from 'classnames';
import { Time, IconRead } from '../index';

import './DialogItems.scss';

const Block = ({ user, message, date }) => {

    return(
       <div className="dialogs__item">
           <div className="dialogs__item-avatar">
               {/* <img src={user.avatar} alt={`${user.fullname}`} /> */}
               <img src='https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1' />
           </div>
           <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Andrey Koleda</b>
                    <span>
                        <Time date={date}/>
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                   <IconRead isMe={true} isReady={false} />
                </div>
           </div>
       </div>
    );
}

export default Block;