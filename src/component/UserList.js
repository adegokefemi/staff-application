import React, {Fragment, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
}   from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
  return (
    <ListGroup className='mt-4'>
      {users.length > 0 ? (
        <Fragment>
           {users.map(user => (
          <ListGroupItem className='d-flex' key={user.id}>
              <strong>{user.name}</strong>
              <div className='ml-auto'>
                  <Link className='btn btn-warning mr-1'   to={`/edit/${user.id}`}>Edit</Link>
                  <Button onClick={()=> removeUser(user.id)} 
                  className='btn btn-danger'>Delete</Button>
              </div>
          </ListGroupItem>
          ))}
        </Fragment>
      )  : (
        <h4 className='text-center btn btn-warning'>  No User </h4>
      ) }


    </ListGroup>
  )
}

export default UserList;
