import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import EditBoard from './edit_board_form';
import {deleteBoard, getUserBoards, updateBoard} from '../../actions/board_actions';

const mapStateToProps = (state) => {
    // debugger
    return{
        errors: state.errors.board,
        board: state.entities.boards[state.ui.board]   
    }
}

const mapDispatchToProps = () => {
    // debugger
    return{
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        closeModal: () => dispatch(closeModal()),
        getUserBoards: (id) => dispatch(getUserBoards(id)),
        updateBoard: (board) => dispatch(updateBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard)