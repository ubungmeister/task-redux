import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  let todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const sort = useSelector((state: RootState) => state.todos.sort);

  console.log(sort);

  if (filter === 'completed') {
    todos = todos.filter((todo) => todo.completed);
  } else if (filter === 'active') {
    todos = todos.filter((todo) => !todo.completed);
  }
  if (sort === 'asc') {
    todos = [...todos].sort((a, b) => a.date.localeCompare(b.date));
  } else if (sort === 'desc') {
    todos = [...todos].sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
