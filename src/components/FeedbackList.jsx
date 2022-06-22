import React from 'react';
import FeedbackItem from './FeedbackItem';
function FeedbackList({feedback , handleDelete}) {
    // console.log(feedback);

    if(!feedback || feedback.length === 0){
        return(
            <p>Not Feedback</p>
        )
    }


  return (
    <div className="feedback-list">
        {feedback.map((item) =>(
            <FeedbackItem 
            item = {item} 
            key={item.id}  
            handleClick={handleDelete}
            />
  
        ))}
    </div>
  )
}

export default FeedbackList