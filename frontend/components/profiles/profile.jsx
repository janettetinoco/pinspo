import React from 'react';
import Boards from './boards'

class Profile extends React.Component{
    componentDidMount(){
        // debugger
        this.props.getUserBoards(this.props.userId)
    }

    render(){
        // debugger
        if (this.props.boards === null){
            return null
        }
        const user = this.props.userInfo
        return(
            <div className="profile-component">
                <div className="profile-head">
                    <div className="user-icon">
                        <h1 className="user-letter">{user.username[0]}</h1>
                    </div>
                    <div id="username"><h1>{user.username}</h1></div>
                    <div id="user-handle"><h3>@{user.username}</h3></div>
                    <div>
                        <div>Following</div>
                        <span>.</span>
                        <div>Followers</div>
                    </div>
                    <div>Options</div>
                    <Boards boards={this.props.boards}/>
                </div>
            </div>
        )
    }
}

export default Profile