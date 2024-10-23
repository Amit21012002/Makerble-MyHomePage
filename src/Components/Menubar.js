import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import "./../Style/Menubar.css"


function Menubar() {
  return (
    <Navbar expand="lg" className=" navbar-section">
      <Container fluid className='navbar-section'>
        <Navbar.Brand className='Navbar-logo' href="#"><img src='data:image/webp;base64,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' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-button' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="tab-section"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown className='tab' title="MyApps" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="tab" href="#action1">Home</Nav.Link>
            <Nav.Link className="tab" href="#action2">Explore</Nav.Link>


          </Nav>
          <input type='text' className='searchbar' placeholder='Search for contact'></input>
          <div className='menubar-icons-sections'>          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          <FontAwesomeIcon icon={faBoltLightning} className='flash-icon' />
         


          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
          </svg> </div>
          <div className='menubar-profile-section'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-blsvoWQeqmoTzZB3tISQMu2dw8R6TY4IA&s' className='menubar-profile logo' height={50} width={50} />
          <p>Yael Adamson-Brown</p>
          </div>
          <div className='menubar-buttons'>
          <Button style={{ backgroundColor: "#ed364a" ,Color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>Create</Button>
          <Button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>Upgrade</Button>
          <Button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>More</Button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default Menubar;
