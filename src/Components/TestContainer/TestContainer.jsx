import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer=({selectedParagraph,timerStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange,startAgain})=>{
     return(
             <div className="test-container">
            {
                timeRemaining>0?(
                    <div data-aos="fade-up" className="typing-challenge-con">
                    <TypingChallengeContainer  selectedParagraph={selectedParagraph} timerStarted={timerStarted} timeRemaining={timeRemaining}  words={words} characters={characters}  wpm={wpm} testInfo={testInfo} onInputChange={onInputChange}/>
                     </div>
                ):(
                    <div className='try-again-container'>
                    <TryAgain words={words} characters={characters} wpm={wpm}  startAgain={startAgain}/>
                     </div>
                )
            }
           </div>
       )
}

export default TestContainer;