import React from 'react';
import {withRouter} from 'react-router-dom';


class Boards extends React.Component{

    render(){
        debugger
        const {boards, history, openModal, currentUser, userId, pins} = this.props
        let boardPics ={};
        Object.keys(pins).map((id) => {
            if(boards[pins[id].board_id]){
                if (!boardPics[pins[id].board_id]){
                    boardPics[pins[id].board_id] = [pins[id].photoURL]
                }else{
                    boardPics[pins[id].board_id].push(pins[id].photoURL)
                }
            }
        })
       return(
           <div  className="boards-grid">
               {Object.values(boards).map((board) => {
                    return(
                        <div key={`board-${board.id}`} className="board" >
                            <div >
                                <div className="board-images" onClick={(e) => {history.push(`/boards/${board.id}`)}}>
                                    {boardPics[board.id] ? <div id="boardPics-container">
                                        {boardPics[board.id][0] ? <img id="img1" src={boardPics[board.id][0]}/> : <div></div>}
                                        {boardPics[board.id][1] ? <img id="img2" src={boardPics[board.id][1]} /> : <div></div>}
                                        {boardPics[board.id][2] ? <img id="img3" src={boardPics[board.id][2]} /> : <div id="img3"></div>}
                                    </div> : ""}
                                    
                                    {userId === currentUser ?
                                        <div id={`pen-icon-${board.id}`} className={`pen-icon`} onClick={(e) => {openModal('editBoard', board.id)
                                        e.stopPropagation()}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        style={{fill:"#000000"}} ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#cccccc"></path><g fill="#000000"><path d="M100.73709,39.09499c0,0 -2.79087,0.13954 -6.36317,1.67452c-3.57231,1.53498 -8.42841,4.40957 -14.06596,10.04712c-11.2751,11.2751 -15.07067,22.8851 -15.07067,22.8851c-0.6419,1.25589 -0.4884,2.76296 0.39072,3.86535c0.87912,1.10239 2.31642,1.57684 3.68394,1.22798c1.35357,-0.34886 2.38619,-1.4652 2.62341,-2.86064c0,0 3.34904,-9.82385 13.50779,-19.9826c5.07938,-5.07937 9.15404,-7.56324 11.83327,-8.7075c1.73034,-0.73958 1.7722,-0.60004 2.23269,-0.66981l4.13048,4.13048c-5.58173,4.31189 -13.0752,10.50761 -20.6524,18.08481c-15.1544,15.1544 -29.24827,34.27183 -29.24827,34.27183l15.18231,15.18231c0,0 19.11743,-14.09387 34.27183,-29.24827c15.1544,-15.1544 24.89452,-29.91808 24.89452,-29.91808l-15.18231,-15.18231c0,0 -1.33962,1.01866 -3.34904,2.45596l-6.25154,-6.25154c-0.68376,-0.66981 -1.6187,-1.03262 -2.5676,-1.00471zM124.51526,39.09499c-2.27456,0.25118 -4.95379,1.38148 -8.3726,3.01413l13.73106,13.73106c3.26531,-6.83762 4.45143,-10.61924 0.66981,-14.40087c-1.88384,-1.88384 -3.75371,-2.5955 -6.02827,-2.34433zM51.28295,105.51758c-4.73052,7.89815 -6.12595,14.44273 -6.47481,18.19644l-3.01413,2.9025c-0.99076,0.99076 -0.99076,2.58155 0,3.57231c0.99076,0.99076 2.58155,0.99076 3.57231,0l3.01413,-3.01413c3.76767,-0.36281 10.25643,-1.78615 18.08481,-6.47481z"></path></g></g></svg></div>
                                        : ""}
                                </div>
                                <div>
                                    <div>
                                        <h1 className="board-title">{board.title}</h1>
                                        <h2 className="board-info">{boardPics[board.id] ? boardPics[board.id].length: '0'} Pins</h2>
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
export default withRouter(Boards)