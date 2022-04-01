import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}= useParams();
    const [friend,setFriend]=useState({});

    useEffect(()=> {
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h3>Friend Details of a bondhu {friendId} </h3>
            <p>name: {friend.name}</p>
            <p>email: {friend.email}</p>
            <p>website: {friend.website}</p>
            <p>address: {friend.address?.city}</p>

        </div>
    );
};

export default FriendDetail;