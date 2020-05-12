import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super();

    this.state = {
      content: '',

    };
  }


  changeContent = (event) => {
    console.log(this.state.content)
    this.setState({
      content: event.target.value
    })

  }

  render() {
    console.log('state:', this.state)
    console.log('props:', this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.content} onChange={this.changeContent}type="text" name="message" id="message" />
        <p>Remaining: {this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
