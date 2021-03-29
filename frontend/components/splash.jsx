import React from 'react';

class SplashPage extends React.Component{
    render(){
        return(
            <div className="splash-container">
                <div className="splash-header">
                    Get inspired for <br/> your next idea
                </div>
                <div className="splash-columns">
                    <div className="splash-img" id="col-1"><img src={window.splash1URL} /> <img src={window.splash8URL} /></div>
                    <div className="splash-img" id="col-2"><img src={window.splash2URL} /> <img src={window.splash9URL} /></div>
                    <div className="splash-img" id="col-3"><img src={window.splash5URL} /> <img src={window.splash10URL} /></div>
                    <div className="splash-img" id="col-4"><img src={window.splash3URL} /> <img src={window.splash7URL} /></div>
                    <div className="splash-img" id="col-5"><img src={window.splash4URL} /> <img src={window.splash6URL} /></div>
                    {/* <div className="splash-img" id="col-6"><img src={window.splash11URL} /> <img src={window.splash12URL} /></div>
                    <div className="splash-img" id="col-7"><img src={window.splash13URL} /> <img src={window.splash14URL} /></div> */}
                </div>
            </div>
        )
    }
}

export default SplashPage;