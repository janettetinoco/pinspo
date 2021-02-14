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
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitNewBoard(this.state).then(()=> this.props.closeModal())
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
                            <input type="text" placeholder='Like "Places to Travel" or "Recipes to Try" ' value={this.state.title} onChange={this.update('title')}></input>
                            <label className="board-info">Description</label>
                            <input type="text" placeholder='Like "places in the US" or "Crock Pot recipes" ' value={this.state.description} onChange={this.update('description')}></input>
                        </form>   
                    </div>
                </div>
                <div>
                    <div>
                        <button onClick={this.handleSubmit}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewBoardForm;