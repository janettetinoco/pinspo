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
                <ul className="masonry">
                    {Object.keys(pins).map((key) => <Link key={key} to={`/pins/${key}`}><li className="masonry-image"><img src={pins[key].photoURL} /></li></Link>)}
                </ul>
            </div>
        )
    }
}

export default HomeFeed