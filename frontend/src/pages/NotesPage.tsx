import { Container } from "react-bootstrap";
import NotesPageLoggedinView from "../components/NotesPageLoggedinView";
import NotesPageLoggedoutView from "../components/NotesPageLoggedoutView";
import styles from "../styles/NotesPage.module.css";
import { User } from "../models/user";

interface NotesPageProps {
    loggedinUser: User | null,
}

const NotesPage = ({ loggedinUser }: NotesPageProps) => {
    return ( 
        <Container className={styles.notesPage}>
      <>
        { loggedinUser
            ? <NotesPageLoggedinView />
            : <NotesPageLoggedoutView /> 
        }
      </>
    </Container>
     );
}
 
export default NotesPage;