import React from 'react';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            age: ''
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSignIn = this.demoSignIn.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const username = this.state.email.split('@')[0];
        const user = Object.assign({}, this.state, {username});
        this.props.processForm(user)
            .then(() => this.props.history.push('/home'))
            .then(this.props.closeModal);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value })
    }

    demoSignIn(e){
        e.preventDefault();
        debugger
        const demoUser = {
            email: 'janette@email.com',
            password: '1234567'
        }
        this.props.demoLogin(demoUser)
            .then(() => this.props.history.push('/home'))
            .then(this.props.closeModal)
    }



    render(){
        const {formType} = this.props
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                <h1>Welcome to Pinspo</h1>
                    <input type='text' 
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="Email"></input>
                    <br/>
                    <input type='password' 
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="Password"></input>
                        {/* {formType === 'login' ? 'Create a Password' : 'Password'}</input> */}
                    <br/>
                    {formType === 'signup' ? <input type='text' className="login-input" value={this.state.age} onChange={this.update('age')} placeholder="age"></input> : ''}

                    <br/>
                    <input className="session-submit" type="submit" value={formType} />
                    <br/>

                </form>
                    {formType === 'signup' ? <button type="submit" onClick={this.demoSignIn}>Continue with Demo Version</button> : ""}
            </div>
        )
    }
}

export default SessionForm;

