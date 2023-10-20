import React, { Component } from 'react';

class Chatbot extends Component {
  state = {
    userMessage: '',
    chatHistory: [],
  };

  handleInputChange = (e) => {
    this.setState({ userMessage: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const userMessage = this.state.userMessage;
      this.addMessage(userMessage, true);

      const botResponse = this.getBotResponse(userMessage);
      this.addMessage(botResponse, false);

      this.setState({ userMessage: '' });
    }
  }

  getBotResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes('how are you')) {
      return "I'm just a chatbot, but thanks for asking! How can I help you?";
    } else {
      return "I'm just a simple greeting bot. Try asking something else!";
    }
  }

  addMessage = (message, isUser) => {
    const chatHistory = this.state.chatHistory.slice();
    chatHistory.push({ text: message, isUser });
    this.setState({ chatHistory });
  };

  render() {
    return (
      <div className="fixed bottom-10 right-10 bg-black text-white rounded-lg p-4 shadow-md max-w-xs">
        <div className="chatlogs">
          {this.state.chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${message.isUser ? 'bg-blue-500' : 'bg-blue-700'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={this.state.userMessage}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          className="bg-blue-500 text-white p-2 w-full outline-none rounded-md"
        />
      </div>
    );
  }
}

export default Chatbot;
