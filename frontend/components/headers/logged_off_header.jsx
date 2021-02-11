import React from 'react';

class LoggedOffHeader extends React.Component{
    render(){
        const {openModal} = this.props
        return(
            <div className='header'>
                <div className="left-nav">
                    <img src={window.logoURL} className="header-logo" />
                    <h3>Pinspo</h3>
                </div>
                <nav className="nav-buttons">
                    <button className='red-button' onClick={() => openModal('login')}>Login</button>
                    <button className='grey-button' onClick={() => openModal('signup')}>Signup</button>
                </nav>
            </div>
        )
            
    }
}

export default LoggedOffHeader;