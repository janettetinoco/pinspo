import React from 'react';


class Boards extends React.Component{

    constructor(props){
        super(props);

        this.toggleBoard = this.toggleBoard.bind(this);
    }

    toggleBoard(key){
        document.getElementById(`pen-icon-${key}`).classList.toggle("-open")
    }

    render(){
        const boards =this.props.boards
       return(
           <div  className="boards-grid">
               {Object.keys(boards).map((key) => {
                    return(
                        <div key={`board-${key}`} className="board">
                            <div >
                                <div className="board-images">
                                    Board Images
                                    <div id={`pen-icon-${key}`} className={`pen-icon`}><i className="fas fa-pen-square" id="pen"></i></div>
                                </div>
                                <div>
                                    <div>
                                        <h1 className="board-title">{boards[key].title}</h1>
                                        <h2 className="board-info"># Pins</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
               })}
           </div>
        )
    }
}
export default Boards