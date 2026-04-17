import { FaEdit, FaPen, FaPencilAlt } from "react-icons/fa"; //Edit
import { FiTrash, FiTrash2 } from "react-icons/fi"; // Trash Bin
import { RiAlarmWarningLine } from "react-icons/ri"; // OverDue
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa' // Time - InProgress
import { FiCircle } from "react-icons/fi"; // Circle - To-Do
import { FiCheckCircle } from "react-icons/fi"; // Check - Completed

export default function Tasks({ filteredTasks }) {

    const status = {
        "to-do": { name: "To Do", icon: FiCircle, iconClass: "text-gray-400", text: "text-gray-600", bg: "bg-gray-100" },
        "progress": { name: "In Progress", icon: FaRegClock, iconClass: "text-yellow-400", text: "text-yellow-600", bg: "bg-yellow-100" },
        "completed": { name: "Completed", icon: FiCheckCircle, iconClass: "text-green-400", text: "text-green-600", bg: "bg-green-100", strike: "line-through text-gray-400" },

        "low": { name: "Low Priority", text: "text-green-600", bg: "bg-green-100" },
        "medium": { name: "Medium Priority", text: "text-yellow-600", bg: "bg-yellow-100" },
        "high": { name: "High Priority", text: " text-red-500", bg: "bg-red-100" },
    }


    return (
        <>
            <div className="px-4 py-2">
                {filteredTasks.map((task) => {
                    const stat = status[task.status];
                    const prio = status[task.priority];
                    return (
                        <div key={task.id} className="bg-white rounded-xl p-4 shadow-xl border border-gray-400 flex justify-between gap-3 mb-2">
                            <div className='flex flex-col gap-2'>

                                <div className='flex flex-row gap-2 items-center'>
                                    <stat.icon className={`text-xl ${stat.iconClass}`} />
                                    <p className={`font-semibold text-lg ${stat.strike}`}>{task.title}</p>
                                </div>

                                <div className='flex flex-row gap-2 ml-7'>
                                    <p className={`${stat.text} ${stat.bg}  px-3 py-1 rounded-full text-sm font-medium`}>{stat.name}</p>
                                    <p className={`${prio.text} ${prio.bg}  px-3 py-1 rounded-full text-sm font-medium`}>{prio.name}</p>
                                </div>

                                <div className='ml-7 flex flex-col gap-1 mt-3'>
                                    <p className={`text-base ${stat.strike}`}>{task.description}</p>
                                    <div className='flex items-center gap-1'>
                                        <RiAlarmWarningLine className='text-red-500 text-sm' />
                                        <p className='text-sm text-red-500'>Overdue: {task.date}</p>
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