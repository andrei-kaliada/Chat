import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Time, IconRead } from '../index';
import waveSvg from '../../assets/img/wave.svg' ;
import pauseSvg from '../../assets/img/pause.svg' ;
import playSvg from '../../assets/img/play.svg' ;
import './Message.scss';
import {convertCurrentTime} from '../../utils/helpers/index';



const Message = ({ avatar, text, date, user, isMe, isReady, attachments, isTyping, audio }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioElem = useRef(null);
    const togglePlay = () => {
       
        if(!isPlaying){
            audioElem.current.play();
        }else{
            audioElem.current.pause();
        }
    }

    useEffect(()=>{
        audioElem.current.volume = "0.5";
        
        audioElem.current.addEventListener('playing', () => {
            setIsPlaying(true);
        }, false);
        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audioElem.current.addEventListener('pause', () => {
            setIsPlaying(false);
        }, false);
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = audioElem && audioElem.current.duration || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    },[]);

    return (
        <div className={classNames('message', { 
            'message--isme': isMe,
            'message--is-typing':isTyping, 
            'message--image':attachments && attachments.length === 1,
            'message--is-audio':audio,
            })}>
            <div className="message__content">
                <IconRead isMe={isMe} isReady={isReady} />
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className="message__info">
                    {( audio || text || isTyping) && 
                    <div className="message__bubble">
                        <div className="message__text">
                            { text && <p>{text}</p>}
                           { isTyping &&
                            <div className="message_typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            }
                            { audio &&
                             <div className="message__audio">
                                 <audio ref={audioElem} src={audio} preload="auto"/>
                                <div 
                                className="message__audio-progress"
                                style={{width: progress + "%"}}
                                />
                                <div className="message__audio-info">
                                    <div className="message__audio-btn">
                                        <button onClick={togglePlay}>
                                        { isPlaying ?
                                         (<img src={pauseSvg} alt="Pause svg" />)
                                         : (<img src={playSvg} alt="Play svg" />)
                                         }
                                        </button>
                                    </div>
                                    <div className="message__audio-wave">
                                        <img src={waveSvg} alt="Wave svg" />
                                    </div>
                                    <span className="message__audio-duration">
                                        {convertCurrentTime(currentTime)}
                                    </span>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    }
                    
                        {attachments && 
                        <div className="message__attachments">
                            {attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))}
                        </div>
                        }
                    
                    { date && 
                    <span className="message__date">
                        <Time date={date}/>
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
    audio:PropTypes.string,
}

export default Message;