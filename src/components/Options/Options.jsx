import css from './Options.module.css';

const Options = ({ updateFeedback, total, handleReset }) => {
  return (
    <div className={css.optionsBtnsContainer}>
      <ul className={css.optionsButtonList}>
        <li>
          <button
            className={css.optionsButton}
            type="button"
            onClick={() => updateFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.optionsButton}
            type="button"
            onClick={() => updateFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.optionsButton}
            type="button"
            onClick={() => updateFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
      {total > 0 && (
        <button
          className={css.optionsButton}
          type="button"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
