import React from 'react';
import { Message } from '../../components/index';


import './Home.scss';

const Home = () => {
    return (
        <section className="home">
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
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
        </section>
    );
}

export default Home;