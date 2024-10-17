import { Button } from "react-bootstrap";

interface NavBarLoggedoutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedoutView = ({onSignUpClicked, onLoginClicked}: NavBarLoggedoutViewProps) => {

    return ( 
        <>
        <Button onClick={onSignUpClicked}>Sign Up</Button>
        <Button onClick={onLoginClicked}>Login</Button>
        </>
     );
}
 
export default NavBarLoggedoutView;