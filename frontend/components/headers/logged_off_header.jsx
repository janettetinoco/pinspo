import React from 'react';

class LoggedOffHeader extends React.Component{
    render(){
        const {openModal} = this.props
        return(
            <nav className="nav-buttons">
                <button className='login-button' onClick={() => openModal('login')}>Login</button>
                <button className='signup-button' onClick={() => openModal('signup')}>Signup</button>
            </nav>
        )
            
    }
}

export default LoggedOffHeader;