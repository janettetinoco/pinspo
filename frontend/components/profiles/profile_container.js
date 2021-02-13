import {connect} from 'react-redux';
import { getUserBoards } from '../../actions/board_actions';
import Profile from './profile'

const mapStateToProps = (state = {}, ownProps) =>{
    const userId = parseInt(ownProps.match.params.userId)
    return({
        userId,
        boards: state.entities.boards,
        userInfo: state.entities.users[userId]
    })
}

const mapDispatchToProps = () => {
    return ({
        getUserBoards: (id) => dispatch(getUserBoards(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)