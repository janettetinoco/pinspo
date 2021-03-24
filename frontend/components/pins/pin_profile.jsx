import React from 'react';
import {Link} from 'react-router-dom';

class PinProfile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            board_id:"",
        }
       

        this.showMenu = this.showMenu.bind(this);
    }
   

    showMenu() {
        return (
            document.getElementsByClassName("boards-dropdown")[0].classList.toggle("dropdown-open")
        )

    }

    componentDidMount(){
        if (!this.props.pin){
            this.props.requestPin(this.props.pinId)
            this.props.getUserBoards(this.props.currentUser)
        }
    }


    render(){
        if(!this.props.pin) return null;
        const {pin, boards} = this.props;
        const author = pin.author;
        let pinLink = "";
        if(pin.link){
            const pinLinkStart = pin.link.indexOf('.')+1;
            const pinLinkEnd = pin.link.slice(pinLinkStart).indexOf('/');
            pinLink = pin.link.slice(pinLinkStart, pinLinkStart + pinLinkEnd)
        }
        return(
            <div id="pin-profile-page">
                <Link to='/home'><img className="back-arrow" src="https://img.icons8.com/ios-filled/50/000000/left.png" /></Link>
                <div id="pin-profile-container">
                    <div id="left">
                        <img src={pin.photoURL} />
                    </div>
                    <div id="right">
                        <div>
                            <div className="pin-head-right">
                                <div className="board-options">

                                    <div className="board-text" onClick={this.showMenu}><span>{this.state.board_id === "" ? "Select Board" : `${boards[this.state.board_id].title}`}</span><i className="fas fa-chevron-down" ></i>
                                            <ul className="boards-dropdown">
                                                <h1 className="dropdown-subtitle">All boards</h1>
                                                {Object.values(boards).map((board,key) => <li key={key} className=" menu-option" value={`${board.id}`}>{board.title}</li>)}
                                            </ul>
                                        </div>
                                        <div className="save-button"><div>Save</div>
                                    </div>
                                </div>
                            </div>
                            <div id="body-right">
                                <div id="pin-profile-link"><a href={pin.link}>{pinLink}</a></div>
                                <div id="pin-profile-title">{pin.title}</div>
                                <div id="pin-profile-description">{pin.description}</div>
                            </div>
                        </div>
                        <div className="pin-author-details">
                            <div id="author-info" onClick={() => this.props.history.push(`/users/${author.id}`)}>
                                <div className="pin-author-icon">
                                    <h1>{author.username[0]}</h1>
                                </div>
                                <div>
                                    <h1>{author.username}</h1>
                                    <h2># followers</h2>
                                </div>
                            </div>
                            
                            <div className="pin-follow-user"><span>Follow</span></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default PinProfile