import React from 'react';
import { Message, Dialogs } from '../../components/index';


import './Home.scss';

const Home = () => {
    return (
        <section className="home">
            <Dialogs
            userId={0}
             items={
                [{
                    _id:Math.random(),
                        text:"Hello my name Alex",
                        isReady:false,
                        created_at:new Date(),
                        user:{
                            _id:1,
                            fullname:'Alex Pullinovski',
                            avatar:'https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1',
                        },
                },
                {
                    _id:Math.random(),
                        text:"Fucckkkk",
                        isReady:true,
                        created_at:new Date(2014, 1, 11),
                        user:{
                            _id:1,
                            fullname:'Kulik Polivik',
                            avatar:'https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1',
                        },
                    
                },
            ]
                } />
            {/* <Message 
            avatar="" 
            text="Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world" 
            date="Mon Nov 11 2019 21:20:24"
            attachments={[
                {
                    filename:"image.jpg",
                    url:"https://source.unsplash.com/100x100/?random=1&nature,water/"
                },
                {
                    filename:"image.jpg",
                    url:"https://source.unsplash.com/100x100/?random=2&nature,water/"
                },
                {
                    filename:"image.jpg",
                    url:"https://source.unsplash.com/100x100/?random=3&nature,water/"
                },
            ]}
           
            />
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            text="Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world" 
            date="Mon Nov 11 2019 21:20:24"
            
            />
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            text="Hello worldHello worldHello worldHello worldHello worldHello worldHello world" 
            date="Mon Nov 11 2019 21:20:24"
            isMe={true}
            isReady={false}
           
            />
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            text="Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world" 
            date="Mon Nov 11 2019 21:20:24"
            isMe={true}
            isReady={true}
            />  
             */}
             {/* <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            isTyping={true}
            />
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            attachments={[
                {
                    filename:"image.jpg",
                    url:"https://source.unsplash.com/100x100/?random=1&nature,water/"
                }
            ]}
            /> */}
             
        </section>
    );
}

export default Home;