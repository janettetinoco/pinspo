import {connect} from 'react-redux';
import NewPinForm from './new_pin_form';
import {getUserBoards} from '../../actions/board_actions';
import {createPin} from '../../actions/pin_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        boards: state.entities.boards,
        errors: state.errors.pin
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getUserBoards: (userId) => dispatch(getUserBoards(userId)),
        createPin: (pin) => dispatch(createPin(pin))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPinForm);