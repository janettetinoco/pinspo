import React from 'react';

class HomeFeed extends React.Component{
    componentDidMount(){
        this.props.requestAllPins()
    }

    render(){
        const{pins} = this.props;
        if (Object.keys(pins).lenght === 0){
            return null;
        }
        return(
            <div>
                <div className="masonry">
                    {Object.keys(pins).map((key) => <div className="masonry-image"><img src={pins[key].photoURL} /></div>)}
                </div>
            </div>
        )
    }
}

export default HomeFeed