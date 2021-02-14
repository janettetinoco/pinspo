import React from 'react';


class Boards extends React.Component{
    render(){
        const boards =this.props.boards
       return(
           <div className="boards-grid">
               {Object.keys(boards).map((key) => {
                    return(
                        <div key={`board-${key}`}>
                            <div>
                                <div className="board-images">
                                    Board Images
                                    <div className="pen-icon"><i className="fas fa-pen-square" id="pen"></i></div>
                                </div>
                                <div>
                                    <div>
                                        <h1 className="board-title">{boards[key].title}</h1>
                                        <h2># Pins</h2>
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