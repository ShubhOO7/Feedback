import React from 'react';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'

function App() {
    const [Feedback , setFeedback ] = useState(FeedbackData);

    const addFeedback = (feedback) =>{
        // console.log(feedback);
        feedback.id =  uuidv4();
        const NewFeedback = [...Feedback];
        NewFeedback.push(feedback);
        setFeedback(NewFeedback);
    }


    const FeedbackDelete = (id) =>{
        // console.log("App" , id);
        if(window.confirm("Are you sure you want to delete this feedback?")){
            setFeedback( Feedback.filter(item => item.id !== id) );
        }
    }


  return (
      <>
         <Header />
         <div className="App">
            <FeedbackForm handleAdd = {addFeedback} />
            <FeedbackStats feedback={Feedback}/>
            <FeedbackList feedback={Feedback} handleDelete={FeedbackDelete}/>  
         </div>
      </>
  );
}

export default App;
