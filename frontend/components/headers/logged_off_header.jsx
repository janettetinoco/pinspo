import React from 'react';
import Modal from 'react-modal';

class LoggedOffHeader extends React.Component{

    render(){
        return(
            <>
                <h1>Pinspo</h1>
                <button>Log In</button>
                <Modal isOpen={false}></Modal>
                <button>Sign Up</button>
            </>
        )
    }
}

export default LoggedOffHeader;