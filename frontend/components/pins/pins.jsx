import React from 'react';

class Pins extends React.Component{
    render(){
        const {pins, boardId} = this.props;
        return(
            <div className="masonry">
                {Object.keys(pins).map((id) => {
                    if(pins[id].board_id === boardId){
                        return (
                            <div className="masonry-image"><img src={pins[id].photoURL} />
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