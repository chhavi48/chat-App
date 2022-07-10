import React,{useState} from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversation from './Conversation'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'
import Contacts from './Contacts'
const CONVERSATIONS_KEY = 'conversations'

const CONTACTS_KEY = 'contacts'
const Sidebar = ({id}) => {
   
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
  
    function closeModal() {
        setModalOpen(false)
      }
    
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>
                        Conversation
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>
                        Contacts
                    </Nav.Link>
                </Nav.Item>
                

            </Nav>
            <Tab.Content className="flex-grow-1" style={{borderRight:"2px solid gray" ,overflow:"auto"}}>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}

export default Sidebar