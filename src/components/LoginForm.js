import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  changeUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // event.persist()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    } else {
      alert('fill the form!')
    }
  }

  render() {
    console.log('state:', this.state)
    return (
      <form onSubmit={(event) => {this.handleSubmit(event)}} >
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.changeUserName} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.changePassword} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
