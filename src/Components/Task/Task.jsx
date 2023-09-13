import React, { useEffect, useState } from "react";
import TaskFrom from "../TaskForm/TaskFrom";

const Task = () => {
  // State variables
  const [text, setText] = useState(""); // Input text
  const [task, setTask] = useState(""); // Current task
  const [arryTask, setArryTask] = useState([]); // Array of tasks

  // Use effect to update arryTask when task changes
  useEffect(() => {
    if (task) {
      // Add the current task to arryTask
      setArryTask([...arryTask, task]);
    }
  }, [task]);

  // Event handler for input text change
  const handleInputClick = (e) => {
    setText(e.target.value);
  };

  // Event handler for adding a new task
  const handleClick = () => {
    setTask(text); // Set task to the input text
    setText(""); // Clear the input text
  };

  // Event handler for removing a task
  const handleRemoveClick = (index) => {
    // Create a copy of arryTask and remove the task at the specified index
    const updatedTasks = [...arryTask];
    updatedTasks.splice(index, 1);
    setArryTask(updatedTasks); // Update arryTask with the modified array
  };

  return (
    <div className="mx-auto w-96 my-11">
      <h3>My Task</h3>
      <ul className="my-8 ml-10 list-decimal">
        {arryTask.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                handleRemoveClick(index); // Call the function to remove the task
              }}
              className="ml-4 btn-error btn"
            >
              Remove
            </button>{" "}
          </li>
        ))}
      </ul>

      <hr />

      {/* TaskForm component for adding new tasks */}
      <TaskFrom
        handleInputClick={handleInputClick}
        handleClick={handleClick}
        text={text}
      ></TaskFrom>
    </div>
  );
};

export default Task;
