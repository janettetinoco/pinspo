import React from 'react';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username:'',
            email: '',
            password: '',
            age: ''
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSignIn = this.demoSignIn.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/home'));
    } 

    update(field){
        return (e) => this.setState({[field]: e.target.value })
    }

    demoSignIn(e){
        e.preventDefault();
        const demoUser = {
            email: 'demo@email.com',
            password: '1234567'
        }
        this.props.demoLogin(demoUser)
            .then(() => this.props.history.push('/home'))
            .then(this.props.closeModal)
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
        const {formType, otherForm} = this.props
        return(
            <div className="login-form-container">
                <img src={window.logoURL} className="modal-logo"/>
                {formType === 'signup' ? <h3 className='modal-title'>Welcome to Pinspo</h3> : <h3 className='modal-title'>Welcome Back to Pinspo</h3> }
                <h3>{formType === 'signup' ? "Find new ideas to try" : ""}</h3>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className='login-form'>
                        {formType === 'signup' ? <input type='text' className="login-input" value={this.state.username} onChange={this.update('username')} placeholder="Username"></input> : ''}
                        <input type='text' 
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email" required></input>
                        <input type='password' 
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password"></input>
                            {/* {formType === 'login' ? 'Create a Password' : 'Password'}</input> */}
                        {formType === 'signup' ? <input type='text' className="login-input" value={this.state.age} onChange={this.update('age')} placeholder="age"></input> : ''}
                        {this.renderErrors()}
                        <input className="session-submit" type="submit" value={formType} />
                        
                    </form>
                </div>
                {formType === 'signup' ? <button type="submit" onClick={this.demoSignIn} className="demo-button">Continue with Demo Version</button> : ""}

                <div>
                    {formType   === 'signup' ? <div className="other-form">Already have an account? {otherForm} here</div> : <div className="other-form ">Need an Account? {otherForm} here</div>}
                </div>
            </div>
        )
    }
}

export default SessionForm;

