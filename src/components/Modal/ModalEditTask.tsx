import type { TaskModalEditProps } from '../../types/Task';
import { FaPencilAlt, FaTimes } from "react-icons/fa";

function ModalEditTask({ modal, input, title, modalClose, setInput, editTask }: TaskModalEditProps) {
    return (
        <div className={`modal bg-black/40 fixed top-0 left-0 w-full h-full flex items-center justify-center ${modal ? 'block' : 'hidden'}`}>
            <div className='p-4 bg-white shadow-2xs rounded-tl-md rounded-bl-md rounded-br-md w-[90%] sm:max-w-2xl z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
              <div className='relative'>
                <h2 className='text-2xl text-gray-900 font-bold m-0 text-center mb-5'>{title}</h2>

                <button
                  className='bg-white p-2 cursor-pointer rounded-tl-md rounded-tr-md absolute -top-12 -right-4'
                  onClick={modalClose}
                >
                  <FaTimes />
                </button>

                <div className='flex flex-wrap items-center gap-4 relative'>
                  <input
                    className='border border-solid border-blue-400 rounded-sm w-[calc(100%-54px)] h-8 placeholder:text-gray-700 px-4 text-sm'
                    placeholder='Adicionar nova tarefa...'
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {editTask()};
                    }}
                    value={input}
                  />

                  <button
                    className='flex items-center justify-center bg-green-400 lg:hover:bg-green-500 transition-colors duration-200 size-8 rounded-sm text-white gap-2 cursor-pointer'
                    onClick={editTask}
                  >
                    <FaPencilAlt />
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ModalEditTask;