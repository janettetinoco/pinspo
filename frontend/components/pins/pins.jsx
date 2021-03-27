import React from 'react';
import {Link} from 'react-router-dom';

class Pins extends React.Component{
    render(){
        if (!this.props.boardPins) return null;
        const {pins, boardId, boardPins} = this.props;
        document.querySelector('.pins-info').innerHTML = `${Object.keys(boardPins).length}  Pins`
        return(
            <div className="masonry">
                {Object.keys(boardPins).map((id) => {
                    if(pins[id]){
                        return (
                            <div className="masonry-image"><Link to={`/pins/${id}`}><img src={pins[id].photoURL} /></Link>
                                <div className="subtitle">{pins[id].title}</div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Pins