import React from 'react';


class EditBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.board.id,
            title: this.props.board.title,
            description: this.props.board.description,
            author_id: this.props.board.author_id
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(){
        const board = Object.assign({}, { id: this.props.board.id, author_id: this.props.board.author_id, title: this.state.title, description: this.state.description })
        this.props.updateBoard(board).then(() => this.props.closeModal());
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="session-errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className="edit-board-form-container">
                <div>
                    <h2 className="modal-title">Edit your board</h2>
                </div>
                <div className="new-board-form">
                    <div >
                        <form className="form-container">
                            <label className="board-info">Name</label>
                            <div className="board-input">
                                <input type="text" value={this.state.title} onChange={this.update('title')}/>
                            </div>
                            <label className="board-info">Description</label>
                            <div className="board-input">
                                <input type="text" value={this.state.description } onChange={this.update('description')}/>
                            </div>
                        </form>
                    </div>
                    {this.renderErrors()}
                </div>
                <div className="edit-buttons-div">
                    <button className="delete-button" onClick={() => {this.props.deleteBoard(this.props.board.id)
                    this.props.closeModal()
                    this.props.getUserBoards(this.props.board.author_id)}}>Delete</button>
                    <button className="update-button" onClick={this.handleSubmit}>Done</button>
                </div>
            </div>
        )
    }
}

export default EditBoard