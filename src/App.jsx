import { useState } from 'react';
import { useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

import './App.css';

function App() {
  const key = 'feedback';

  const [clicks, setClicks] = useState(() => {
    const dataFromLS = localStorage.getItem(key);
    if (!dataFromLS) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
    return JSON.parse(dataFromLS);
  });

  const updateFeedback = feedbackType => {
    setClicks(prevState => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(clicks));
  }, [clicks]);

  const { good, neutral, bad } = clicks;
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  const handleReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback counter={clicks} total={totalFeedback} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
