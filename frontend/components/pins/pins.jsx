import React from 'react';
import {Link} from 'react-router-dom';

class Pins extends React.Component{
    render(){
        if (!this.props.boardPins) return null;
        const {pins, boardId, boardPins} = this.props;
        // debugger
        // document.querySelector('.pins-info').innerHTML = `${Object.keys(boardPins).length}  Pins`
        return(
            <div>
                <div className="pins-info">
                    <h2>{Object.keys(boardPins).length} Pins</h2>
                </div>
                <div className="masonry">
                    {Object.keys(boardPins).map((id) => {
                        if(pins[id]){
                            return (
                                <div className="masonry-image"><svg className="unpin-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="26" height="26"
                                    viewBox="0 0 172 172"
                                    style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#cccccc"></path><g fill="#000000"><path d="M45.97326,41.52975c-1.80809,0.00047 -3.43563,1.09642 -4.116,2.77162c-0.68037,1.6752 -0.27791,3.59561 1.01781,4.85668l26.94639,26.94639l-5.24174,4.33919l-4.27844,-4.27844c-0.83865,-0.86209 -1.99093,-1.34743 -3.19365,-1.34515c-1.80652,0.004 -3.43082,1.10123 -4.10896,2.77563c-0.67814,1.67441 -0.27514,3.5927 1.01946,4.85267l14.66647,14.66647l-21.38354,21.37486c-1.71957,1.71957 -1.71957,4.50283 0,6.2224c1.71957,1.71957 4.50283,1.71957 6.2224,0l21.37486,-21.38354l14.66647,14.66647c1.11448,1.16071 2.76937,1.62826 4.32646,1.22232c1.55709,-0.40594 2.77308,-1.62193 3.17902,-3.17902c0.40594,-1.55709 -0.06161,-3.21198 -1.22232,-4.32646l-3.94867,-3.94867l4.23505,-5.34589l26.72075,26.72075c1.11446,1.16078 2.76938,1.62837 4.32651,1.22244c1.55713,-0.40593 2.77315,-1.62195 3.17908,-3.17908c0.40593,-1.55713 -0.06166,-3.21205 -1.22244,-4.32651l-79.98,-79.98c-0.83655,-0.85993 -1.98526,-1.34508 -3.18497,-1.34515zM97.07159,43.75141c-1.80809,0.00048 -3.43562,1.09642 -4.116,2.77162c-0.68037,1.6752 -0.27791,3.59561 1.01781,4.85668l2.71633,2.71633l-12.93947,10.63102l23.73538,23.73538l10.50085,-13.06965l2.64691,2.64691c1.11446,1.16077 2.76938,1.62836 4.32651,1.22243c1.55713,-0.40593 2.77314,-1.62195 3.17907,-3.17907c0.40593,-1.55713 -0.06166,-3.21205 -1.22243,-4.32651l-26.66,-26.66c-0.83655,-0.85993 -1.98526,-1.34508 -3.18497,-1.34515z"></path></g></g></svg><Link to={`/pins/${id}`}><img src={pins[id].photoURL} /></Link>
                                    <div className="subtitle">{pins[id].title}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Pins