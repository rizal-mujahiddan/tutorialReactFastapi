import Nav from 'react-bootstrap/Nav'


function Navbar(){
    return(
        <Nav>
            <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
    )
}
export default Navbar