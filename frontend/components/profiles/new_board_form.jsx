import React from 'react';

class NewBoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            author_id: this.props.author_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitNewBoard(this.state).then(this.props.closeModal)
            .then(() => this.props.getUserBoards(this.props.author_id))
    }
    renderErrors() {
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
            <div className="login-form-container">
                <div>
                    <h2 className="modal-title">Create board</h2>
                </div>
                <div className="new-board-form">
                    <div >
                        <form className="form-container"> 
                            <label className="board-info">Name</label>
                            <div className="board-input">
                                <input type="text" placeholder='Like "Places to Travel" or "Recipes to Try" ' value={this.state.title} onChange={this.update('title')}></input>
                            </div>
                            <label className="board-info">Description</label>
                            <div className="board-input">
                                <input type="text" placeholder='Like "places in the US" or "Crock Pot recipes" ' value={this.state.description} onChange={this.update('description')}></input>
                            </div>
                        </form>  
                        {this.renderErrors()} 
                    </div>
                </div>
                <div className="create-button-div">
                    <button onClick={this.handleSubmit} className="create-button">Create</button>
                </div>
            </div>
        )
    }
}

export default NewBoardForm;