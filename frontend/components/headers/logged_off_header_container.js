import { connect } from 'react-redux';
import {login, signup} from '../../actions/session_actions'
import LoggedOffHeader from './logged_off_header'

const mapStateToProps = (state) => {
    return({   
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (user) => login(user),
        signup: (user) => signup(user)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOffHeader)