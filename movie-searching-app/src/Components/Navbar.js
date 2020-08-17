import React,{Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button,Container,Dropdown} from 'react-bootstrap';
import './Navbar.css';

class Navigationbar extends Component {

    constructor() {
    super();
    this.state = {dropdownVal: 'movies'};
    }

    componentDidMount() {

    }

    UpdateDropDown = (value) =>{
        this.setState({ dropdownVal: value});
    }

     render(){
     return(
    <Navbar bg="primary">
    <Navbar.Brand href="#home">MovieSearcher</Navbar.Brand>
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="searchbar" />
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-basic">
        { this.state.dropdownVal }
        </Dropdown.Toggle>

         <Dropdown.Menu>
            <Dropdown.Item onClick={(e)=>this.UpdateDropDown('Movies')}>Movies</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>this.UpdateDropDown('Series')}>Series</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="outline-light">Search</Button>
    </Form>
    </Nav>
  </Navbar>
     );
     }

}
 
export default Navigationbar;