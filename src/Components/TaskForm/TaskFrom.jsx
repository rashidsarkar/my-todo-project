import React from "react";

const TaskFrom = ({ handleClick, handleInputClick, text }) => {
  return (
    <div>
      <div className="relative w-[500px] mb-6 ">
        <textarea
          className="border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea13"
          rows="3"
          placeholder="Message"
          onChange={handleInputClick}
          value={text}
        ></textarea>
        <label
          htmlFor="exampleFormControlTextarea13"
          className=" pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Message
        </label>
      </div>
      <button onClick={handleClick} className="btn btn-accent" type="submit">
        Add Task
      </button>
    </div>
  );
};

export default TaskFrom;
