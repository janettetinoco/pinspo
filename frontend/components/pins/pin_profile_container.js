import { connect } from 'react-redux';
import PinProfile from './pin_profile';
import {requestPin} from '../../actions/pin_actions';
import { getUserBoards } from '../../actions/board_actions';

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
        getUserBoards:(userId) => dispatch(getUserBoards(userId))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(PinProfile);