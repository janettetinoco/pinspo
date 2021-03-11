import React from 'react';
import {withRouter} from 'react-router-dom'

class NewPinForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title: "",
            description:"",
            link: "",
            author_id:"",
            board_id:"",
            imageFile: null,
            imageUrl: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showMenu = this.showMenu.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    updateBoard() {
        return (e) => {
            this.setState({ board_id: e.target.value });
            this.showMenu()
        }
    }

    showMenu() {
        return (
            document.getElementsByClassName("boards-dropdown")[0].classList.toggle("dropdown-open")
        )

    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result})
        }
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    resetForm(){
        return(()=>this.setState({
            title: "",
            description: "",
            link: "",
            author_id: "",
            board_id: "",
            imageFile: null,
            imageUrl: null
        }).then(this.props.clearPinErrors()))
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[link]', this.state.link);
        formData.append('pin[board_id]', this.state.board_id);
        formData.append('pin[author_id]', this.props.currentUser.id);
        formData.append('pin[image]', this.state.imageFile);
        this.props.createPin(formData).then(() => this.props.history.push(`/boards/${this.state.board_id}`))
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


    componentDidMount(){
        this.props.getUserBoards(this.props.currentUser.id)
        this.props.clearPinErrors();
    }

    render(){
        const boardKeys = Object.keys(this.props.boards)
        const {boards, currentUser} = this.props;
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl}/> : null;
        return(
            <div className="new-pin-page">
                <div className="new-pin-form">
                    <div>
                        <div className="pin-form-head">
                                <div >
                                <svg onClick={this.resetForm} className="options-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="24" height="24"
                                    viewBox="0 0 172 172"
                                    style={{fill:"#000000"}}><g transform="translate(26.66,26.66) scale(0.69,0.69)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none" stroke="none"></path><g fill="#000000" stroke="none"><path d="M71.66667,14.33333l-7.16667,7.16667h-28.66667c-4.3,0 -7.16667,2.86667 -7.16667,7.16667c0,4.3 2.86667,7.16667 7.16667,7.16667h14.33333h71.66667h14.33333c4.3,0 7.16667,-2.86667 7.16667,-7.16667c0,-4.3 -2.86667,-7.16667 -7.16667,-7.16667h-28.66667l-7.16667,-7.16667zM35.83333,50.16667v93.16667c0,7.88333 6.45,14.33333 14.33333,14.33333h71.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-93.16667zM64.5,64.5c4.3,0 7.16667,2.86667 7.16667,7.16667v64.5c0,4.3 -2.86667,7.16667 -7.16667,7.16667c-4.3,0 -7.16667,-2.86667 -7.16667,-7.16667v-64.5c0,-4.3 2.86667,-7.16667 7.16667,-7.16667zM107.5,64.5c4.3,0 7.16667,2.86667 7.16667,7.16667v64.5c0,4.3 -2.86667,7.16667 -7.16667,7.16667c-4.3,0 -7.16667,-2.86667 -7.16667,-7.16667v-64.5c0,-4.3 2.86667,-7.16667 7.16667,-7.16667z"></path></g></g></g></svg>
                                {/* <svg onClick={this.resetForm} className="options-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="100" height="100"
                                        viewBox="0 0 172 172"
                                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#a5a2a2"><path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path></g></g></svg> */}
                                </div>
                                <div className="pin-head-right">
                                <div className="board-text" onClick={this.showMenu}><span>{this.state.board_id === "" ? "Select Board" : `${boards[this.state.board_id].title}`}</span><i className="fas fa-chevron-down" ></i></div>
                                        <ul className="boards-dropdown">
                                            <h1 className="dropdown-subtitle">All boards</h1>
                                            {boardKeys.map((key) => <li key={key} className=" menu-option" value={`${boards[key].id}`} onClick={this.updateBoard()}>{boards[key].title}</li>)}
                                        </ul>
                                    <div className="save-button" onClick={this.handleSubmit}><div>Save</div></div>
                                </div>
                        </div>
                        <div className="pin-info-section">
                            <div className="form-left">
                                {this.state.imageUrl ? <span className="image-preview">{preview}</span> :
                                <div className="image-placeholder">
                                    <div>
                                        <input id="upload" type="file" onChange={this.handleFile}/>
                                        
                                    </div>
                                </div>}
                            </div>
                            <div className="form-right">
                                <div>
                                    <div className="pin-details">
                                        <div className="pin-details-title">
                                            <input type="text" placeholder="Add your title" onChange={this.update('title')}></input>
                                        </div>
                                        <div className="user-details">
                                            <div className="user-icon">
                                                <h1 className="user-letter">{currentUser.username[0]}</h1>
                                            </div>
                                            <div className="user-info">
                                                <h1>{currentUser.username}</h1>
                                                <h2># followers</h2>
                                            </div>
                                        </div>
                                        <div className="pin-details-description">
                                            <input type="text" placeholder="Tell everyone what your Pin is about" onChange={this.update('description')}></input>
                                        </div>
                                        {this.renderErrors()} 
                                    </div>
                                </div>
                                <div className="pin-details-link">
                                    <input type="text" placeholder="Add a destination link" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPinForm)