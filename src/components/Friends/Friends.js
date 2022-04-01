import React, { useEffect, useState } from 'react';
import Friend from './Friend/Friend';

const Friends = () => {
    const [frineds,setFriends]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setFriends(data));
    },[])
    return (
        <div>
            <h2>Hello Friends, How are you</h2>
            <p><small>Parle kichu taka dhar dish... {frineds.length} </small></p>
            {
                frineds.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;