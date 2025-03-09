import { useDispatch } from 'react-redux';
import { setFilter } from '../todoSlice';
import { Filter } from '../types';

export const TodoFilter = () => {
  const dispatch = useDispatch();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value as Filter));
  };
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Filter</span>
      <select
        onChange={handleSelect}
        className="border border-gray-300 rounded p-2"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>
  );
};
