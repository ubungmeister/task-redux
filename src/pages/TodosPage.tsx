import { TodoForm } from '../features/todos/components/TodoForm';
import { TodoFilter } from '../features/todos/components/TodoFilter';
import { TodoSort } from '../features/todos/components/TodoSort';
import { TodoList } from '../features/todos/components/TodoList';

export const TodosPage = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-3xl">
            {/* Card Container */}
            <div id="list1" className="rounded-[0.75rem] bg-[#eff1f2] shadow">
              <div className="py-4 px-4 md:px-5">
                {/* Header */}
                <p className="text-4xl font-bold text-center mt-3 mb-4 pb-3 text-blue-500">
                  <i className="fas fa-check-square mr-1"></i>
                  <u>My Todo-s</u>
                </p>
                {/* Add New Todo */}
                <TodoForm />
                <hr className="my-4 " />
                {/* Filter and Sort Controls */}
                <div className="flex flex-wrap justify-end items-center mb-4 pt-2 pb-3 gap-2">
                  <TodoFilter />
                  <TodoSort />
                </div>

                {/* Todo List */}
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
