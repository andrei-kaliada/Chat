import React from 'react';
import { Message } from '../../components/index';


import './Home.scss';

const Home = () => {
    return (
        <section className="home">
            <Message 
            avatar="https://sun9-58.userapi.com/c854220/v854220990/11a61d/M6aR0K7W21k.jpg?ava=1" 
            text="Hello world" 
            date="Mon Nov 11 2019 21:20:24"
            isMe={true}
            />
           
        </section>
    );
}

export default Home;