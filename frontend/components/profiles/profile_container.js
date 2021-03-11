import {connect} from 'react-redux';
import { getUserBoards, createBoard, getBoard} from '../../actions/board_actions';
import Profile from './profile';
import {openModal} from '../../actions/modal_actions';
import{withRouter} from 'react-router-dom';
import {requestAllPins} from '../../actions/pin_actions';

const mapStateToProps = (state = {}, ownProps) =>{
    const userId = parseInt(ownProps.match.params.userId)
    return({
        userId,
        boards: state.entities.boards,
        userInfo: state.entities.users[userId],
        currentUser: state.session.currentUser,
        pins:state.entities.pins
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getUserBoards: (id) => dispatch(getUserBoards(id)),
        newBoard: (board) => dispatch(createBoard(board)),
        openModal: (modal,boardId) => dispatch(openModal(modal, boardId)),
        getBoard: (boardId) => dispatch(getBoard(boardId)),
        requestAllPins: () => dispatch(requestAllPins())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))