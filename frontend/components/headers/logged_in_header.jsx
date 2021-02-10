import React from 'react'
import { Link } from 'react-router-dom'

class LoggedInHeader extends React.Component{
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div className="logged-in-header">
                <Link to='/home'>Home</Link>
                <Link to={`/users/${this.props.currentUser.id}`} className="user-icon">{this.props.username[0]}</Link>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default LoggedInHeader