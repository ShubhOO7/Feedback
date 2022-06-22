import React from 'react'

function FeedbackStats({feedback}) {

    let avg= 0 ;
    feedback.map((item) => {
        return avg += item.rating;
    });

    let average = (avg/feedback.length).toFixed(1);


  return (
    <div className="feedback-stats">
        <h4> Reviews : {feedback.length}</h4>
        <h4> 
        Average Rating :{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats