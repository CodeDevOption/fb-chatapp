import React, { useState } from 'react';
import './Home.css';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import {useNavigate} from 'react-router-dom';
import axios  from  'axios'
import { useStateValue } from '../StateProvider';
const Home = () => {
    const [user,dispatch] = useStateValue();
    const navigate = useNavigate();
    if(user == null){
        navigate('/');
    }
    console.log(user.user.displayName);
    axios.get('https://api.chatengine.io/users/me',{
        headers:{
            headers:{
                "project-id":"02e050a3-a9c1-4f37-b8dd-bd1d74cdd494",
                "user-name":user.user.displayName,
                "user-secret":user.user.uid,
                "private-key":"54ef7ebd-0e6f-4667-91d7-caa1d6cea25b"
            },
        }
    }).then((res)=> console.log( "This is the", res));

    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

  return (
    <div>
		<ChatEngine
			height='100vh'
			userName={user.displayName}
			userSecret={user.uid}
			projectID='02e050a3-a9c1-4f37-b8dd-bd1d74cdd494'
            renderChatFeed = {(chat)=> {}}
            renderNewChatForm={(creds) => {}}
		/>                                  
    </div>
  )
}

export default Home