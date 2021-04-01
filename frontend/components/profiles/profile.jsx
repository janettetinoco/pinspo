import React from 'react';
import Boards from './boards';
import {Redirect} from 'react-router-dom'

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.showMenu = this.showMenu.bind(this)
    }


    //function to close when clicking outisde

    // window.addEventListener('click', (e) => {
    //     const select = document.querySelector('.custom-select')
    //     if (!select.contains(e.target)) {
    //         select.classList.remove('open');
    //     }
    // });


    showMenu() {
        return (
            document.getElementsByClassName("plus-dropdown")[0].classList.toggle("dropdown-open")
        )
    }

    componentDidMount(){
        this.props.getUserBoards(this.props.userId);
        this.props.requestAllPins();
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getUserBoards(this.props.match.params.userId);
        }
    }

    render(){
        if ( this.props.userInfo === undefined || Object.keys(this.props.pins).length === 0){
            return null
        }
        const user = this.props.userInfo;
        debugger
        
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
                {this.props.userId === this.props.currentUser ?
                <div id="options-bar">
                    <div className="plus-dropdown-icon" onClick={this.showMenu}>
                        <i className="fas fa-plus" id="plus-icon"></i>
                        <div className='plus-dropdown'>
                            <h1 className="dropdown-subtitle">Create</h1>
                            <ul >
                                <li onClick={() => this.props.openModal('newBoard')} className="menu-option">Board</li>
                                <li onClick={() => this.props.history.push('/pins/new')}className="menu-option">Pin</li>
                            </ul>
                        </div>
                    </div>
                </div> :""}
                <div className="board-grid-container">
                    <Boards boards={this.props.boards} 
                            openModal={this.props.openModal} 
                            userId={this.props.userId} 
                            currentUser={this.props.currentUser}
                            pins={this.props.pins}/>
                </div>

            </div>
        )
    }
}

export default Profile