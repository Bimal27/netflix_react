import { Component } from "react";
import { Container, Row,Button, Form, Spinner} from 'react-bootstrap'


class Registration extends Component{
    state= {
        registration:{
            name:'',
            surname: '',
            email: '',
            password:'',
            conformPassword:'',
            dob:'',
            address:'',
            city:'',
            code:''

        },
     isLoading: false
    }
   handleInput= (key,value) =>{
       this.setState({
           registration:{
               ...this.state.registration,
               [key] : value,
           }
       })
   }
   isButtonClickable = () =>{
    let isClickable = false 
    if(
    this.state.registration.name.length >= 2 &&
    this.state.registration.surname.length >= 3 &&
    this.state.registration.password.length >= 8 &&
    this.state.registration.code.length === 5 &&
    this.state.registration.password.match(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    ) &&
    this.state.registration.password ===
      this.state.registration.conformPassword
        
        ){
        isClickable = true
    }
    return isClickable
}
   handleRegistration = (e) => {
    e.preventDefault()
   
    this.setState({
        isLoading: true
    })
    setTimeout(() => {

        alert('Registration Complete')
        
    }, 500)
   

    setTimeout(() => {

        this.props.history.push('/')
        
    }, 2000)
}


    render(){
        return(
            <>
            <h2 className='text-light text-center'>Registration Form</h2>
            <Container>
            <Row className="justify-content-center">
            <Form className="w-50 text-light" onSubmit={this.handleRegistration}>
             <Form.Group className="my-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required  placeholder="Enter your name" onChange={(e) => this.handleInput('name' , e.target.value)} value={this.state.registration.name}/>
                    <Form.Text className="text-muted">
                      Name should be at least 2 chars long.
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="my-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" required  placeholder="Enter your surname" onChange={(e) => this.handleInput('surname' , e.target.value)} value={this.state.registration.surname} />
                    <Form.Text className="text-muted">
                      Surname should be at least 3 chars long.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required  placeholder="name@example.com"  onChange={(e) => this.handleInput('email' , e.target.value)} value={this.state.registration.email} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required  placeholder="Password"  onChange={(e) => this.handleInput('password' , e.target.value)} value={this.state.registration.password}/>
                    <Form.Text className="text-muted">
                     Should contain at least 8 chars, 1 digit, 1 letter
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label> Conform Password</Form.Label>
                    <Form.Control type="password" required  placeholder="Conform Password" onChange={(e) => this.handleInput('conformPassword' , e.target.value)} value={this.state.registration.conformPassword} />
                    <Form.Text className="text-muted">
                     Repeat password
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="my-3">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" required  placeholder="Enter your date of birth" onChange={(e) => this.handleInput('dob' , e.target.value)} value={this.state.registration.dob} />
                    <Form.Text className="text-muted">
                     Required*
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="my-3">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="text" required  placeholder="Enter your address" onChange={(e) => this.handleInput('address' , e.target.value)} value={this.state.registration.address} />
                    <Form.Text className="text-muted">
                     Required*
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="my-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" required  placeholder="Enter your surname" onChange={(e) => this.handleInput('city' , e.target.value)} value={this.state.registration.city} />
                    <Form.Text className="text-muted">
                     Required*
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="my-3">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control type="number" required  placeholder="Enter your postal code" onChange={(e) => this.handleInput('code' , e.target.value)} value={this.state.registration.code} />
                    <Form.Text className="text-muted">
                    Should be numeric 5 digits
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit"  disabled={!this.isButtonClickable()}>
                    {this.state.isLoading && <Spinner animation="border" variant="light" style={{ width: '20px', height: '20px',marginRight:'5px'}} />}
                    Submit
                </Button>
            </Form>
            </Row>
            </Container>
            </>
        )
    }
}
export default Registration