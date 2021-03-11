import { connect } from 'react-redux';
import PinProfile from './pin_profile';

const mapStateToProps = (state={}, ownProps) => {
    const pinId = parseInt(ownProps.match.params.pinId)
    debugger
    return({
        pin: state.entities.pins[pinId],
        pins: state.entities.pins,
        boards: state.entities.boards
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(PinProfile);