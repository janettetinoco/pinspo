import React from 'react'
import { Link } from 'react-router-dom'

class LoggedInHeader extends React.Component{
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(){
        return(
            document.getElementsByClassName("arrow-dropdown")[0].classList.toggle("dropdown-open")      
        )
                    
    }
    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div className="header">
                <div className='left-nav'>
                    <Link to='/home' className='home-button'>Home</Link>
                </div>
                <div className='right-nav'>
                    <div className="user-icon">
                        <Link to={`/users/${this.props.currentUser.id}`} className='user-letter'>{this.props.username[0]}</Link>
                    </div>
                    <div className='arrow-dropdown-icon'>
                        <i className="fas fa-chevron-down" onClick={this.showMenu}></i>
                        <div className='arrow-dropdown'>
                            <h1 className="dropdown-subtitle">Options</h1>
                            <ul >
                                <li onClick={this.handleLogout} className="logout-button">Log out</li>
                            </ul>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default LoggedInHeader