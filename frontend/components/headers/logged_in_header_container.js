import { connect } from 'react-redux';
import LoggedInHeader from './logged_in_header';

const mapStateToProps = ({ entities, session }) => {
    return ({
        currentUser: session.currentUser,
        username: entities.users[session.currentUser].username
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)