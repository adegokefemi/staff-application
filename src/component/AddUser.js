
import React,{useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}  from 'reactstrap';

const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser} = useContext(GlobalContext);
  
  // useHistory on the form is a router package to redirect back to the home page after submit is made.
  const history = useHistory();


  // All the logic for the form must be passed inside the onSubmit function to be executed.
  const onSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      // uuid is use to set a random id for new user imput.
      id: uuid(),
      name: name
    }
     //  call the addUser function to add new user.
    addUser(newUser);

    // if (newUser.value.trim() === ''){
    //   return;
    //  }

    history.push ('/');

 }

  const onChange = (event) => {
    setName(event.target.value);

  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} 
        placeholder='Enter Name' ></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}

export default AddUser;
