import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/nodes_api";

interface NavBarLoggedinViewProps {
    user: User,
    onLogoutSuccessful: () => void,
}

const NavBarLoggedinView = ({user, onLogoutSuccessful}: NavBarLoggedinViewProps) => {
    async function logout() {
        try {
            await NotesApi.logout();
            onLogoutSuccessful();
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }
    return ( 
        <>
        <Navbar.Text className="me-2">
            Signed in as: {user.username}
            <Button onClick={logout}>Logout</Button>
        </Navbar.Text>
        </>
     );
}
 
export default NavBarLoggedinView;