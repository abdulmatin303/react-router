import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}= useParams();
    return (
        <div>
            <h3>Friend Details of a bondhu {friendId} </h3>
        </div>
    );
};

export default FriendDetail;