import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PinProfile from './pin_profile';
import {requestPin} from '../../actions/pin_actions';
import { getUserBoards } from '../../actions/board_actions';
import {createPinToBoard} from '../../actions/board_pin_actions';
import {followUser} from '../../actions/user_follow_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state={}, ownProps) => {
    const pinId = parseInt(ownProps.match.params.pinId);
    return({
        pinId:pinId,
        pin: state.entities.pins[pinId],
        pins: state.entities.pins,
        boards: state.entities.boards,
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestPin: (pinId) => dispatch(requestPin(pinId)),
        getUserBoards:(userId) => dispatch(getUserBoards(userId)),
        createPinToBoard:(boardPin) => dispatch(createPinToBoard(boardPin)),
        followUser:(userFollow) => dispatch(followUser(userFollow)),
        openModal: (modal, boardId) => dispatch(openModal(modal, boardId))
    })
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PinProfile));