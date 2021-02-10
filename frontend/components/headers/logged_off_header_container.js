import { connect } from 'react-redux';
import {login, signup} from '../../actions/session_actions'
import LoggedOffHeader from './logged_off_header'
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = ({session}) => {
    return({   
        currentUser: session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOffHeader)