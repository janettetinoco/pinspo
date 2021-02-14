import React from 'react';

class NewBoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render(){
        return(
            <div className="login-form-container">
                <div>
                    <h2 className="modal-title">Create board</h2>
                </div>
                <div>
                    <div className="form-container">
                        <form>
                            <label>Name</label>
                            <input type="text" placeholder='Like "Places to Travel" or "Recipes to Try" ' value={this.state.title} onChange={this.update('title')}></input>
                            <label>Description</label>
                            <input type="text" placeholder='Like "places in the US" or "Crock Pot recipes" ' value={this.state.description} onChange={this.update('description')}></input>
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default NewBoardForm;