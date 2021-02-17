import React from 'react';

class BoardProfile extends React.Component{


    showMenu() {
        return (
            document.getElementsByClassName("ellipsis-dropdown")[0].classList.toggle("dropdown-open")
        )
    }

    componentDidMount(){
        this.props.getBoard(this.props.match.params.boardId);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.boardId !== prevProps.match.params.boardId) {
            this.props.getBoard(this.props.match.params.boardId);
        }
    }

    render(){
        if(!this.props.board){
            return null;
        }else{
            this.userInfo = this.props.users[this.props.board.author_id];
        }
        const {board, currentUser} = this.props
        return(
            <div className="board-profile">
                <div>
                    <div className="board-profile-1">
                        <div className="board-profile-options">
                            <h1 className="board-profile-title">{board.title}</h1>
                            {board.author_id === currentUser ? 
                                <div className="board-options-button" onClick={this.showMenu}>
                                    <svg className="board-options-icon"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="48" height="48"
                                    viewBox="0 0 172 172"
                                    style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,171.14c-47.02152,0 -85.14,-38.11848 -85.14,-85.14v0c0,-47.02152 38.11848,-85.14 85.14,-85.14h0c47.02152,0 85.14,38.11848 85.14,85.14v0c0,47.02152 -38.11848,85.14 -85.14,85.14z" fill="#cccccc"></path><g fill="#000000"><path d="M124.7,101.48c-8.53722,0 -15.48,-6.94278 -15.48,-15.48c0,-8.53722 6.94278,-15.48 15.48,-15.48c8.53722,0 15.48,6.94278 15.48,15.48c0,8.53722 -6.94278,15.48 -15.48,15.48zM47.3,101.48c-8.53722,0 -15.48,-6.94278 -15.48,-15.48c0,-8.53722 6.94278,-15.48 15.48,-15.48c8.53722,0 15.48,6.94278 15.48,15.48c0,8.53722 -6.94278,15.48 -15.48,15.48zM86,101.48c-8.53722,0 -15.48,-6.94278 -15.48,-15.48c0,-8.53722 6.94278,-15.48 15.48,-15.48c8.53722,0 15.48,6.94278 15.48,15.48c0,8.53722 -6.94278,15.48 -15.48,15.48z"></path></g></g></svg>
                                <div className="ellipsis-dropdown">
                                    <h1 className="dropdown-subtitle">Board Options</h1>
                                    <ul>
                                        <li className="menu-option" onClick={() => this.props.openModal('editBoard',board.id)}>Edit Board</li>
                                    </ul>
                                </div>

                            </div>
                            : ""}
                        </div>
                        <div className="user-icon">
                            <h1 className="user-letter">{this.userInfo.username[0]}</h1>
                        </div>
                        <div >
                            <h2 className="board-profile-description">{board.description}</h2>
                        </div>
                    </div>
                </div>
                <div className="pins-info">
                    <h2># Pins</h2>
                </div>
                <div>
                    Pins Component Here
                </div>



            </div>
        )
        return null;
    }
}

export default BoardProfile;