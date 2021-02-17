import {connect} from 'react-redux';
import BoardProfile from './board_profile';
import {openModal} from '../../actions/modal_actions';
import {getBoard} from '../../actions/board_actions'
import {withRouter} from 'react-router-dom';



const mapStateToProps = (state = {}, ownProps) => {
    const boardId = parseInt(ownProps.match.params.boardId);
    return ({
        boards: state.entities.boards,
        board: state.entities.boards[boardId],
        users: state.entities.users,
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = () => {
    return ({
        newBoard: (board) => dispatch(createBoard(board)),
        openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
        getBoard: (boardId) => dispatch(getBoard(boardId)),
        getUserBoards: (id) => dispatch(getUserBoards(id)),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardProfile))