import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskRequest } from '../actions/taskActions';

export default function AddTaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTaskRequest(title.trim()));
    setTitle('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task…"
      />
      <button type="submit">Add</button>
    </form>
  );
}
