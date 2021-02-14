import React from 'react';
import Boards from './boards'

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.showMenu = this.showMenu.bind(this)
    }


    showMenu() {
        return (
            document.getElementsByClassName("plus-dropdown")[0].classList.toggle("dropdown-open")
        )
    }

    componentDidMount(){
        this.props.getUserBoards(this.props.userId)
    }

    render(){
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
                    <div className="followers-info">
                        <div> 0 followers</div>
                        <span>&middot;</span>
                        <div>0 following</div>
                    </div>
                </div>
                <div id="options-bar">
                    <div id="add-icon">
                        <i className="fas fa-plus" onClick={this.showMenu}></i>
                        <div className='plus-dropdown'>
                            <h1 className="dropdown-subtitle">Create</h1>
                            <ul >
                                <li onClick={() => openModal('newBoard')} className="logout-button">Pin</li>
                                <li className="logout-button">Board</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div >
                    <Boards boards={this.props.boards}/>
                </div>
            </div>
        )
    }
}

export default Profile