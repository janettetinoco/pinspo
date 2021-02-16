import {connect} from 'react-redux';
import { getUserBoards, createBoard, getBoard} from '../../actions/board_actions';
import Profile from './profile';
import {openModal} from '../../actions/modal_actions';
import{withRouter} from 'react-router-dom';

const mapStateToProps = (state = {}, ownProps) =>{
    const userId = parseInt(ownProps.match.params.userId)
    return({
        userId,
        boards: Object.values(state.entities.boards),
        userInfo: state.entities.users[userId],
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = () => {
    return ({
        getUserBoards: (id) => dispatch(getUserBoards(id)),
        newBoard: (board) => dispatch(createBoard(board)),
        openModal: modal => dispatch(openModal(modal)),
        getBoard: (boardId) => dispatch(getBoard(boardId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))