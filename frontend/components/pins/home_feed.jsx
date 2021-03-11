import React from 'react';
import { Link } from 'react-router-dom'


class HomeFeed extends React.Component{
    componentDidMount(){
        this.props.requestAllPins();
        this.props.getUserBoards(this.props.currentUser);
    }

    render(){
        const{pins} = this.props;
        if (Object.keys(pins).length === 0){
            return null;
        }
        return(
            <div>
                <div className="masonry">
                    {Object.keys(pins).map((key) => <Link to={`/pins/${key}`}><div className="masonry-image"><img src={pins[key].photoURL} /></div></Link>)}
                </div>
            </div>
        )
    }
}

export default HomeFeed