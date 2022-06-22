import React from 'react'
import Card from './shared/Card'
import {useState } from 'react'
import Button from './shared/Button'
import Rating from "@mui/material/Rating";


function FeedbackForm({handleAdd}) {
    const [text , setText] = useState("");
    const [Disabled , setDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [value, setValue] = React.useState(6);
    // console.log(value);
    
    const handleChange = (e) => {
        setText(e.target.value);
        if(text === ""){
            setDisabled(true);
        }
        if(text.length <= 10) {
            setMessage("Review must be greater than 10 characters");
            setDisabled(true);
        }else if(text.length > 10) {
            setMessage("");
            setDisabled(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            text : text,
            rating: value
        }
        // console.log(newFeedback);
        handleAdd(newFeedback);
        setText("");
        setDisabled(true);
    }
    
  return (
    <Card>
    <form onSubmit={handleSubmit}>
        <h2>Would you like to rate your service?</h2>
        <div className="input-group">
            <input 
             type="text"
             onChange={handleChange}
             placeholder="Write a review"
             value = {text}
             />
            <Button type="submit" isDisabled = {Disabled}>Send</Button>
        </div>

        
      <h2>Rate Service</h2>
      <Rating

          name="simple-controlled"
          defaultValue={value}
          max={10}
          value={value}
          className = "changeRating"
          onChange={(event, newValue) => {
          setValue(newValue);
          }}
      />
        <div className="message">{message}</div>
    </form>
    </Card>
  )
}

export default FeedbackForm