import React from 'react';


class EditBoard extends React.Component{
    render(){
        return(
            <div className="login-form-container">
                <div>
                    <h2 className="modal-title">Edit your board</h2>
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
                    </div>
                </div>
                <div className="create-button-div">
                    <button onClick={}></button>
                    <button onClick={this.handleSubmit} className="create-button">Create</button>
                </div>
            </div>
        )
    }
}

export default EditBoard