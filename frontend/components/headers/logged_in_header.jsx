import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
                    <Link to='/home'><img src={window.logoURL} className="header-logo" /></Link>
                    <Link to='/home' className='home-button'>Home</Link>
                </div>
                <div className='right-nav'>
                    <div className="user-icon">
                        <p onClick={() => this.props.history.push(`/users/${this.props.currentUser}`)}>{this.props.username[0]}</p>
                        {/* <Link to={`/users/${this.props.currentUser}`} className='user-letter'>{this.props.username[0]}</Link> */}
                    </div>
                    <div className='arrow-dropdown-icon' onClick={this.showMenu}>
                        <i className="fas fa-chevron-down" ></i>
                        <div className='arrow-dropdown'>
                            <h1 className="dropdown-subtitle">Options</h1>
                            <ul >
                                <li onClick={this.handleLogout} className="menu-option">Log out</li>
                            </ul>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default withRouter(LoggedInHeader)