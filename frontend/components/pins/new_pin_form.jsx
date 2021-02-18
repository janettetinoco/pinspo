import React from 'react';

class NewPinForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title: "",
            description:"",
            link: "",
            author_id:"",
            board_id:"",
            imageFile: null
        }
    }

    handleSubmit(){
        let board = Object.assign({}, this.state);
        board['author_id'] = this.props.currentUser.id;
        this.props.createPin(board)
    }

    componentDidMount(){
        this.props.getUserBoards(this.props.currentUser.id)
    }

    render(){
        const boardKeys = Object.keys(this.props.boards)
        const {boards} = this.props
        return(
            <div className="new-pin-page">
                <div className="new-pin-form">
                    <div>
                        <div className="pin-form-head">
                                <div >
                                <svg className="options-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="100" height="100"
                                        viewBox="0 0 172 172"
                                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#a5a2a2"><path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path></g></g></svg>
                                </div>
                                <div className="pin-head-right">
                                    <select name="this.state.board_id">
                                        {boardKeys.map((key) => <option value={`${boards[key].id}`}>{boards[key].title}</option>)}
                                    </select>
                                <div className="save-button" onClick={this.handleSubmit()}><div>Save</div></div>
                                </div>
                        </div>
                        <div className="pin-info-section">
                            <div className="form-left">
                                <div className="image-placeholder">
                                    <div>
                                        Upload Images here
                                    </div>
                                </div>
                            </div>
                            <div className="form-right">
                                <div>
                                    <div className="pin-details">
                                        <div className="pin-details-title">
                                            <input type="text" placeholder="Add your title"></input>
                                        </div>
                                        <div className="user-details">
                                            <div className="user-icon">
                                                <h1 className="user-letter">{this.props.currentUser.username[0]}</h1>
                                            </div>
                                            <div className="user-info">
                                                <h1>Username</h1>
                                                <h2># followers</h2>
                                            </div>
                                        </div>
                                        <div className="pin-details-description">
                                            <input type="text" placeholder="Tell everyone what your Pin is about"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="pin-details-link">
                                    <input type="text" placeholder="Add a destination link"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPinForm