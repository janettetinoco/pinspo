import React from 'react';

class PinProfile extends React.Component{
    render(){
        const {pin} = this.props
        return(
            <div>
                <div id="pin-profile-container">
                    <div id="left">
                        <img src={pin.photoURL} />
                    </div>
                    <div id="right">
                        <div id="header-right"></div>
                        <div id="body-right">
                            <div>{pin.link}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default PinProfile