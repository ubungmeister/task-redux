import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import { useState } from 'react';
export const TodoForm = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };
  
  return (
    <div className="pb-2">
      <div className=" rounded shadow">
        <div className="py-3 px-4 ">
          <form className="flex items-center gap-2" onSubmit={handleAddTodo}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add new..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn btn-outline-primary" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
