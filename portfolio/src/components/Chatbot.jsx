import React, { Component } from 'react';
import axios from 'axios';

class Chatbot extends Component {
  state = {
    userMessage: '',
    chatHistory: [],
  };

  handleInputChange = (e) => {
    this.setState({ userMessage: e.target.value });
  };

  handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      const userMessage = this.state.userMessage;
      this.addMessage(userMessage, true);

      // Request AI response from the API
      const botResponse = await this.getBotResponseWithRetry(userMessage);
      this.addMessage(botResponse, false);

      // Clear the user input field
      this.setState({ userMessage: '' });
    }
  };

  getBotResponseWithRetry = async (userMessage, retryCount = 0) => {
    // Replace 'YOUR_API_KEY' with your actual GPT-3 API key
    const GPT3_API_KEY = '';

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: userMessage,
        max_tokens: 50,
      }, {
        headers: {
          'Authorization': `Bearer ${GPT3_API_KEY}`,
        },
      });

      return response.data.choices[0].text;
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 3) {
        const retryAfter = error.response.headers['Retry-After'] || 1;
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        return this.getBotResponseWithRetry(userMessage, retryCount + 1);
      } else {
        console.error(error);
        return "An error occurred while fetching the response.";
      }
    }
  }

  addMessage = (message, isUser) => {
    const chatHistory = this.state.chatHistory.slice();
    chatHistory.push({ text: message, isUser });
    this.setState({ chatHistory });
  };

  render() {
    return (
      <div className="fixed bottom-10 right-10 bg-gradient-to-br from-[#1d1836] to-[#232631] text-tertiary-gradient rounded-lg p-4 shadow-md max-w-xs">
        <div className="chatlogs">
          {this.state.chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${message.isUser ? 'bg-secondary-gradient' : 'bg-tertiary-gradient'}`}
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
          style={{
            background: "var(--secondary-gradient)",
            color: "var(--tertiary-gradient)",
            padding: "2px",
            width: "100%",
            outline: "none",
            borderRadius: "8px",
          }}
        />
      </div>
    );
  }
}

export default Chatbot;
