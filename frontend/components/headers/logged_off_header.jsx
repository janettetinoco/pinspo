import React from 'react';

class LoggedOffHeader extends React.Component{
    render(){
        const {openModal} = this.props
        return(
            <div className='logged-off-header'>
                <h1>Pinspo</h1>
                <nav className="nav-buttons">
                    <button className='login-button' onClick={() => openModal('login')}>Login</button>
                    <button className='signup-button' onClick={() => openModal('signup')}>Signup</button>
                </nav>
            </div>
        )
            
    }
}

export default LoggedOffHeader;