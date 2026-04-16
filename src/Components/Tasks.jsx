import { FaEdit, FaPen, FaPencilAlt } from "react-icons/fa"; //Edit
import { FiTrash, FiTrash2 } from "react-icons/fi"; // Trash Bin
import { RiAlarmWarningLine } from "react-icons/ri"; // OverDue
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa' // Time - InProgress
import { FiCircle } from "react-icons/fi"; // Circle - To-Do
import { FiCheckCircle } from "react-icons/fi"; // Check - Completed

export default function Tasks({ filteredTasks }) {
    const status = {
        "to-do": "To Do",
        "progress": "In Progress",
        "completed": "Completed",

        "low": "Low Priority",
        "medium": "Medium Priority",
        "high": "High Priority",
    }


    return (
        <>
            <div className="px-4 py-2">
                {filteredTasks.map((task) => {
                    return (
                        <div key={task.id} className="bg-white rounded-xl p-4 shadow-xl border border-gray-400 flex justify-between gap-3 mb-2">
                            <div className='flex flex-col gap-2'>

                                <div className='flex flex-row gap-2 items-center'>
                                    {<FiCircle className='text-xl text-green-500' />}
                                    <p className='font-semibold text-gray-400 text-lg line-through'>{task.title}</p>
                                </div>

                                <div className='flex flex-row gap-2 ml-7'>
                                    <p className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium'>{status[task.status]}</p>
                                    <p className='bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium'>{status[task.priority]}</p>
                                </div>

                                <div className='ml-7 flex flex-col gap-1 mt-3'>
                                    <p className='text-gray-600 text-sm'>{status[task.description]}</p>
                                    <div className='flex items-center gap-1'>
                                        <RiAlarmWarningLine className='text-red-500 text-sm' />
                                        <p className='text-sm text-red-500'>Overdue: Apr 10, 2026</p>
                                    </div>
                                </div>


                            </div>

                            <div className='flex flex-row gap-3 items-start'>
                                <FaPencilAlt className='text-gray-400 cursor-pointer hover:text-gray-600' />
                                <FiTrash2 className='text-red-400 cursor-pointer hover:text-red-600' />
                            </div>

                        </div>
                    );
                })}

            </div>
        </>
    )
}