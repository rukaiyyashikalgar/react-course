import './App.css';
import React,{useState} from 'react';

import About from './About';
import Contact from './Contact';
import Users from './Users';
import CreateUser from './CreateUser';

import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Home from './Home';

function App() {
	
//const [name,setName]= useState('megha');
	
  return (
    <div className="App">
	  <Router>
	  <>
		  <Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="me-auto">
			  <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
			  <Nav.Link href="#features"><Link to="/About">About Us</Link></Nav.Link>
			  <Nav.Link href="#pricing"><Link to="/Contact">Contact Us</Link></Nav.Link>
	  			<Nav.Link href="#features"><Link to="/Users">User List</Link>
</Nav.Link>
	  			<Nav.Link href="#features"><Link to="/CreateUser">Create User</Link></Nav.Link>
			</Nav>
			</Container>
		  </Navbar>
	  </>
	  
	  	
	  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
	  	  <Route path="/Users">
            <Users />
          </Route>
	  	  <Route path="/CreateUser">
            <CreateUser />
          </Route>
	  
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
	  
	  {/*<About name={name} age="30"/>
	  <button onClick={()=>{setName("megha mapari")}}>Update Props</button>
	  
	  <Contact/>
      
	  <Users />
	  
	  <CreateUser/>*/}
	  </Router>
    </div>
  );
}

export default App;
