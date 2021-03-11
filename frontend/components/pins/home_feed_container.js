import { connect } from 'react-redux';
import HomeFeed from './home_feed';
import {requestAllPins} from '../../actions/pin_actions';
import { getUserBoards } from '../../actions/board_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser,
        pins: state.entities.pins,
        boards: state.entities.boards
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestAllPins: () => dispatch(requestAllPins()),
        getUserBoards: (id) => dispatch(getUserBoards(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed)