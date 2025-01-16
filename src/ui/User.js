import React from 'react'
import Userpic from '../res/user.jpg'
import Arrowdown from './icons/Arrowdown'

export default function User() {
    return (
        <div className="User">
            <div className="user-data">
                <div className="user-name">Kenneth Carson Jr.</div>
                <div className="user-role">Mentor</div>
            </div>
            <img alt="user profile pic" title="user profile pic" src={Userpic} />
            <Arrowdown />
        </div>
    )
}
