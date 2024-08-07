import { useState } from 'react';

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    setEnteredTask('');
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-900"
        >
          Add task
        </button>
      </div>
    </>
  );
};
export default NewTask;
