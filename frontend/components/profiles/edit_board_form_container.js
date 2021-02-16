import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import EditBoard from './edit_board_form';

const mapStateToProps = () => {
    return{
        errors: errors.board,
        board:
    }
}

const mapDispatchToProps = () => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard)