import React, {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}  from 'reactstrap';


const EditUser = (props) => {

  const [selectedUser, setSelectedUser] = useState({
    id:'',
    name: ''
  });

  // The 'users' is loop(map) to access the selectedUser user.id.
  const { users, editUser} = useContext(GlobalContext);
  
  // useHistory on the form is a router package to redirect back to the home page after submit is made.
  const history = useHistory();

  // params is used to target the value of the userId(eg 1) on the browser.
  const currentUserId = props.match.params.id;
  

  // useEffect is use to input the selectedUser in the input field
  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId)
    setSelectedUser(selectedUser)
  }, [currentUserId, users])


  // All the logic for the form must be passed inside the onSubmit function to be executed.
  const onSubmit = (e) => {
    e.preventDefault();
      editUser(selectedUser)

    history.push ('/')
  }

  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
  }

  return ( 
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='Edit User'></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
          </Form>
    );
  }
 
export default EditUser;
