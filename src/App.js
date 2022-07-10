
import './App.css';
import React from 'react';
import Login from './Components/Login';

// import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/Localstorge';
import Dashborard from './Components/Dashborard';
import { ContactsProvider } from './Contacts/ContactProvider';
import { ConversationsProvider } from './Contacts/ConversationProvider';
import { SocketProvider } from './Contacts/SocketProvider';
function App() {
  const [id,setid]=useLocalStorage('id')
  const dashboard=(
    <SocketProvider id={id}>
         <ContactsProvider>
      <ConversationsProvider id={id}>
      <Dashborard id={id}/>
      </ConversationsProvider>
    
    </ContactsProvider>
    </SocketProvider>
 
  )
	return (
    
       id ? dashboard : <Login onIdSubmit={setid} />
            
     
    
	)
  }
  export default App



