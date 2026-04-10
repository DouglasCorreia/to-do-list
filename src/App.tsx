import './App.css'
import TaskCard from './components/Task/TaskCard';
import ModalEditTask from './components/Modal/ModalEditTask';
import { FaPlus } from "react-icons/fa";
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    input,
    modal,
    setInput,
    addTask,
    finishTask,
    removeTask,
    openModalTask,
    closeModalTask,
    saveEditTask,
  } = useTasks();

  return (
    <section id="center" className='flex flex-col items-center justify-center min-h-dvh container m-0 mx-auto gap-4'>
      <div className='p-4 bg-white shadow-2xs rounded-md w-full sm:max-w-2xl'>
        <h1 className='text-2xl text-gray-900 font-bold m-0 text-center mb-5'>Lista de tarefas</h1>

        <div className='flex flex-wrap items-center gap-4'>
          <input
            className='border border-solid border-blue-400 rounded-sm w-[calc(100%-54px)] h-8 placeholder:text-gray-700 px-4 text-sm'
            placeholder='Adicionar nova tarefa...'
            type="text"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            value={input}
          />

          <button
            className='flex items-center justify-center bg-blue-400 lg:hover:bg-blue-500 transition-colors duration-200 size-8 rounded-sm text-white gap-2 cursor-pointer'
            onClick={addTask}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {
        tasks.length > 0 && (
          <ul className='flex flex-col w-[90%] sm:max-w-2xl gap-y-4'>
            {
              tasks.map((task, index) => {
                return(
                  <TaskCard
                    key={task.id}
                    task={task}
                    finishTask={finishTask}
                    removeTask={removeTask}
                    editTask={openModalTask}
                    index={index}
                  />
                )
              })
            }
          </ul>
        )
      }

      {
        modal && (
          <ModalEditTask
            modal={modal}
            modalClose={closeModalTask}
            input={input}
            setInput={setInput}
            editTask={() => saveEditTask()}
            title={"Editar Tarefa"}
          />
        )
      }
    </section>
  )
}

export default App
