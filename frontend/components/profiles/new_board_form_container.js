import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
import {createBoard,getUserBoards} from '../../actions/board_actions';
import NewBoardForm from './new_board_form'

const mapStateToProps = ({errors, session}) => {
    return{
        errors: errors.board,
        author_id: session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal()),
        getUserBoards: (id) => dispatch(getUserBoards(id))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoardForm))