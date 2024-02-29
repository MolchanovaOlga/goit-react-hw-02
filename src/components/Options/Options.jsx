//import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={() => updateFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default Options;
