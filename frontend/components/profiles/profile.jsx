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
        this.props.getUserBoards(this.props.userId);
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getUserBoards(this.props.match.params.userId);
        }
    }

    render(){
        if ( this.props.userInfo === undefined){
            return null
        }
        const user = this.props.userInfo;
        return(
            <div className="profile-component">
                <div className="profile-head">
                    <div className="user-icon">
                        <h1 className="user-letter">{this.props.userInfo.username[0]}</h1>
                    </div>
                    <div id="username"><h1>{this.props.userInfo.username}</h1></div>
                    <div id="user-handle"><h3>@{this.props.userInfo.username}</h3></div>
                    <div className="followers-info">
                        <div> 0 followers</div>
                        <span>&middot;</span>
                        <div>0 following</div>
                    </div>
                </div>
                {this.props.userId === this.props.currentUser ?
                <div id="options-bar">
                    <div className="plus-dropdown-icon" onClick={this.showMenu}>
                        <i className="fas fa-plus" ></i>
                        <div className='plus-dropdown'>
                            <h1 className="dropdown-subtitle">Create</h1>
                            <ul >
                                <li onClick={() => this.props.openModal('newBoard')} className="menu-option">Board</li>
                                <li className="menu-option">Pin</li>
                            </ul>
                        </div>
                    </div>
                </div> :""}
                <div >
                    <Boards boards={this.props.boards} openModal={this.props.openModal} getBoard={this.props.getBoard} userId={this.props.userId} currentUser={this.props.currentUser}/>
                </div>
            </div>
        )
    }
}

export default Profile