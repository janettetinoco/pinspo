import React from 'react';

class BoardProfile extends React.Component{

    componentDidMount(){
        this.props.getBoard(this.props.match.params.boardId);
    }

    render(){
        if(!this.props.board){
            return null;
        }else{
            this.userInfo = this.props.users[this.props.board.author_id];
        }
        const {board} = this.props
        return(
            <div className="board-profile">
                <div>
                    <div className="board-profile-1">
                        <div >
                            <h1 className="board-profile-title">{board.title}</h1>
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