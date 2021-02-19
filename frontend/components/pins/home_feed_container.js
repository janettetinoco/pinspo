import { connect } from 'react-redux';
import HomeFeed from './home_feed';
import {requestAllPins} from '../../actions/pin_actions';

const mapStateToProps = (state) => {
    return ({
        pins: state.entities.pins
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestAllPins: () => dispatch(requestAllPins())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed)