import React from 'react';

class NewBoardForm extends React.Component{
    constructor(props){
        this.state = {
            title: ''
        }
        super(props);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render(){
        debugger
        return(
            <div>
                <div>
                    <h2>Create board</h2>
                </div>
                <div>
                    <div>
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