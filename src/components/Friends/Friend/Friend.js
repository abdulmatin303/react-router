import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
   const {name,username,id} = props.friend;

   const navigate= useNavigate();

   const showFriendDetail= () => {
    // const path= `/friend/${id}`;
    navigate('/friend/'+id);
   }
    return (
        <div>
            <p>{name}</p>
            <Link to={'/friend/'+id}>Show Details</Link>
            <button onClick={showFriendDetail}>{username} id: {id}</button>

        </div>
    );
};

export default Friend;