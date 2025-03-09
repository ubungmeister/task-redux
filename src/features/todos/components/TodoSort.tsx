import { useDispatch } from 'react-redux';
import { setSort } from '../todoSlice';
import { Sort } from '../types';

export const TodoSort = () => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value as Sort));
  };
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort</span>
      <select
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="asc">Asc ▲</option>
        <option value="desc">Desc ▼</option>
      </select>
    </div>
  );
};
