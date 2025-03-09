import { useDispatch } from 'react-redux';
import { toggleComplete, editTodo, deleteTodo } from '../todoSlice';
import { Todo } from '../types';
import { formattedDate } from '../../../utils/dateFormat';
import { useState } from 'react';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const date = formattedDate(todo.date);

  const [text, setText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(
        editTodo({
          id: todo.id,
          text,
        })
      );
      setIsEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleCompleted = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div className="flex items-center py-1 border-b border-gray-200">
      <div className="pr-3">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={toggleCompleted}
          className="form-checkbox h-5 w-5"
        />
      </div>
      <div className="flex-grow">
        {isEditing ? (
          <input
            type="text"
            value={text}
            onKeyDown={handleEditKeyDown}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-lg" onClick={toggleEditing}>
            {todo.text}
          </p>
        )}
      </div>
      <div className="text-right">
        <div className="flex justify-end mb-1">
          <div
            onClick={toggleEditing}
            className="mr-3 text-blue-500  hover:cursor-pointer"
          ></div>
          <div
            onClick={handleDelete}
            className="mr-3 text-blue-500  hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </div>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
};
