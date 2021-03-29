import React from 'react';
import {Link} from 'react-router-dom'

class LoggedOffHeader extends React.Component{
    render(){
        const {openModal} = this.props
        return(
            <div>
                <div className='header'>
                    <div className="left-nav">
                        <Link to='/'><img src={window.logoURL} className="header-logo" /></Link>
                        <h3>Pinspo</h3>
                    </div>
                    <nav className="nav-buttons">
                        <a href='https://github.com/janettetinoco'><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                        <a href='https://www.linkedin.com/in/janette-tinoco-b15665192/'><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png" /></a>
                        <button className='red-button' onClick={() => openModal('login')}>Login</button>
                        <button className='grey-button' onClick={() => openModal('signup')}>Signup</button>
                    </nav>
                </div>
                {/* <div >
                    <img id="home-image" src={window.homePageURL} />
                </div> */}

            </div>
        )
            
    }
}

export default LoggedOffHeader;