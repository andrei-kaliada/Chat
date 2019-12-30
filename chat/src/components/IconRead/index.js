import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const iconRead = {
    display: 'flex',
    alignItems: 'flex-end',
    color: 'red',
    marginBottom: '20px',
    marginRight: '8px',
}

const IconRead = ({isMe, isReady}) => {

    return (
        <>
            {isMe ?
                <div style={iconRead}>
                    {isReady ?
                        (<Icon type="check" className="message__icon-readed" />) :
                        (<Icon type="check-circle" className="message__icon-readed" style={{ color: 'green' }} />)
                    }
                </div>
                : ""}
        </> 
    );
}

IconRead.propTypes = {
    isMe:PropTypes.bool,
    isReady:PropTypes.bool,
}

export default IconRead;