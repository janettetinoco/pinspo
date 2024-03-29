import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {closeModal} from '../../actions/modal_actions';
import EditBoard from './edit_board_form';
import {deleteBoard, getUserBoards, updateBoard} from '../../actions/board_actions';

const mapStateToProps = (state) => {
    return{
        errors: state.errors.board,
        board: state.entities.boards[state.ui.board]   
    }
}

const mapDispatchToProps = () => {
    return{
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        closeModal: () => dispatch(closeModal()),
        getUserBoards: (id) => dispatch(getUserBoards(id)),
        updateBoard: (board) => dispatch(updateBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard)