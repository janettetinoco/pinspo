import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
import {createBoard} from '../../actions/board_actions';
import NewBoardForm from './new_board_form'

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoardForm))