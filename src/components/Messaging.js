import React, { useEffect, useState } from 'react'
// import '../App.css'
function Messaging() {
  // Use state to store the messages data
  const [messages, setMessages] = useState([])

  // Use state to store the current user id
  const [userId, setUserId] = useState(1)

  // Use state to store the message input value
  const [message, setMessage] = useState('')

  // Use useEffect hook to fetch data from json-server
  useEffect(() => {
    // Use fetch or axios to make the request
    fetch('http://localhost:3000/messages')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => setMessages(data)) // Set the messages data in state
      .catch(error => console.error(error)) // Handle any errors
  }, []) // Provide an empty dependencies array to run only once

  // Use a function to handle message input change
  const handleMessageChange = (e) => {
    // Get the message value from the event target
    const value = e.target.value

    // Set the message value in state
    setMessage(value)
  }

  // Use a function to handle message submit
  const handleMessageSubmit = async (e) => { // Make it an async function
    // Prevent the default form behavior
    e.preventDefault()

    // Create a new message object with the current user id and message value
    const newMessage = {
      sender_id: userId,
      receiver_id: 2,
      message: message
    }

    try {
      // Use fetch to post data to json-server
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json' // Specify the content type
        },
        body: JSON.stringify(newMessage) // Send the JSON data as a string
      })
      const result = await response.json() // Parse the response as JSON

      // Add the new message to the messages array in state
      setMessages([...messages, result]) // Use result instead of newMessage

      // Clear the message input value
      setMessage('')
    } catch (error) {
      // Handle any errors
      console.error(error)
    }
  }

  // Use map to render each message as a bubble
  return (
    <div className="container mx-auto px-4 h-96">
      {/* Use a flex layout to display the messages and input */}
      <div className="flex flex-col h-screen">
        {/* Use a scrollable div to show the messages */}
        <div className="overflow-y-auto p-4">
          {messages.map(message => (
            <div className={`message flex ${message.sender_id === userId ? 'justify-end' : ''}`} key={message.id}> {/* Add justify-end conditionally */}
              {/* Use a conditional class to align the message based on sender id */}
              <div className={`message-bubble mt-4 px-4 py-2 rounded-lg ${message.sender_id === userId ? 'bg-white text-gray-800' : 'bg-gray-100 text-gray-600'}`}>
                {message.message}
              </div>
            </div>
          ))}
        </div>
        {/* Use a fixed div to show the input and button */}
        <div className="fixed bottom-0 w-3/4  p-4 bg-white border-t border-gray-200">
          {/* Use a form element to handle message submit */}
          <form onSubmit={handleMessageSubmit} className="flex items-center">
            {/* Use an input element to enter the message */}
            <input type="text" value={message} onChange={handleMessageChange} placeholder="Type a message" className="w-full border border-gray-300 rounded-lg p-2 mr-2" />
            {/* Use a button element to send the message */}
            <button type="submit" className="bg-red-500 text-white rounded-lg p-2">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Messaging
