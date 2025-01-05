import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import './App.css';
import Cookies from 'universal-cookie';
import ChannelListContainer from './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';
import Auth from "./components/Auth"


export default function App() {
  const apiKey = 'p8szgw9spkzu';
  const client = StreamChat.getInstance(apiKey);
  const cookies = new Cookies();

  const authToken = cookies.get('token');

  if(authToken){
    client.connectUser({
      id:cookies.get('userId'),
      name:cookies.get('username'),
      fullName:cookies.get('fullName' ),
      phoneNumber:cookies.get('phoneNumber'),
      image:cookies.get('avatarURL'),
      hashedPassword:cookies.get('hashedPassword'),
    }, authToken)
  }
  
  if(!authToken) return <Auth/>
  return (

    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer/>
        < ChannelContainer/>
      </Chat>
    </div>
  )
}
