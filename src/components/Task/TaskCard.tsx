import type { TaskCardProps } from "../../types/Task";
import { FaPencilAlt, FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

function TaskCard({ task, finishTask, removeTask, editTask, index }: TaskCardProps) {
    return (
        <>
            {
                <li
                    className={`flex items-center justify-between p-4 transition-colors duration-200 shadow-2xs rounded-md ${task.completed ? 'bg-green-200' : 'bg-white'}`}
                    key={ index }
                >
                    <h2 className='text-gray-800 text-sm font-medium'>
                        { task.title }
                    </h2>

                    <div className='flex items-center gap-4'>
                        <button
                            className='flex items-center justify-center bg-green-400 lg:hover:bg-green-500 transition-colors duration-200 size-8 rounded-sm text-white gap-2 cursor-pointer'
                            aria-label='Botão para marcar a tarefa como feita'
                            onClick={() => finishTask(index)}
                        >
                            <FaCheckCircle />
                        </button>

                        <button
                            className='flex items-center justify-center bg-blue-400 lg:hover:bg-blue-500 transition-colors duration-200 size-8 rounded-sm text-white gap-2 cursor-pointer'
                            aria-label='Botão para editar a tarefa'
                            onClick={() => editTask(index)}
                        >
                            <FaPencilAlt />
                        </button>

                        <button
                            className='flex items-center justify-center bg-red-400 lg:hover:bg-red-500 transition-colors duration-200 size-8 rounded-sm text-white gap-2 cursor-pointer'
                            aria-label='Botão para excluir a tarefa'
                            onClick={() => removeTask(index)}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </li>
            }
        </>
    )
}

export default TaskCard;