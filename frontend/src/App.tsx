import { useEffect, useState } from 'react';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from "./network/nodes_api";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotesPage from './pages/NotesPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import styles from "./styles/App.module.css";

function App() {
  
  const [loggedinUser, setLoggedinUser] = useState<User|null>(null);

  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedinUser() {
      try {
        const user = await NotesApi.getLoggedinuser();
        setLoggedinUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedinUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar 
        loggedinUser={loggedinUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignupModal(true)}
        onLogoutSuccessful={() => setLoggedinUser(null)}
        />
        <Container className={styles.pageContainer}>
          <Routes>
            <Route 
            path='/'
            element={<NotesPage loggedinUser={loggedinUser} />}
            />
            <Route 
            path='/privacy'
            element={<PrivacyPage />}
            />
            <Route 
            path='/*'
            element={<NotFoundPage />}
            />
          </Routes>
        </Container>
        { showSignupModal && 
        <SignUpModal 
        onDismiss={() => setShowSignupModal(false)}
        onSignUpSuccessful={(user) => { 
          setLoggedinUser(user);
          setShowSignupModal(false);
        }}
        />
        }
        { showLoginModal && 
        <LoginModal 
        onDismiss={() => setShowLoginModal(false)}
        onLoginSuccessful={(user) => { 
          setLoggedinUser(user);
          setShowLoginModal(false);
        }}
        />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
