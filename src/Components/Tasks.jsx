import { FaEdit, FaPen, FaPencilAlt } from "react-icons/fa"; //Edit
import { FiTrash, FiTrash2 } from "react-icons/fi"; // Trash Bin
import { RiAlarmWarningLine } from "react-icons/ri"; // OverDue
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa' // Time - InProgress
import { FiCircle } from "react-icons/fi"; // Circle - To-Do
import { FiCheckCircle } from "react-icons/fi"; // Check - Completed
import { LuCalendar } from "react-icons/lu";  // Calender
import { BsListTask } from 'react-icons/bs'

import { updateItem, deleteItem } from "./taskSlice" // To Update Item
import { useDispatch } from "react-redux";
import UpdateTask from "./UpdateTask";
import { useState } from "react";

export default function Tasks({ filteredTasks }) {
    const dispatch = useDispatch();
    const [editTask, setEditTask] = useState(null);

    //Update Status of Task
    function updateStatus(task) {
        if (task.status === "to-do") {
            dispatch(updateItem({ ...task, status: "progress" }));
        } else if (task.status === "progress") {
            dispatch(updateItem({ ...task, status: "completed" }));
        } else {
            dispatch(updateItem({ ...task, status: "progress" }));
        }
    }

    //Delete Task
    function deleteTask(task) {
        dispatch(deleteItem(task));
    }

    // Required Data
    const status = {
        "to-do": { name: "To Do", icon: FiCircle, iconClass: "text-gray-400 hover:text-gray-600", text: "text-gray-600", bg: "bg-gray-100" },
        "progress": { name: "In Progress", icon: FaRegClock, iconClass: "text-yellow-400 hover:text-yellow-600", text: "text-yellow-600", bg: "bg-yellow-100" },
        "completed": { name: "Completed", icon: FiCheckCircle, iconClass: "text-green-400 hover:text-green-600", text: "text-green-600", bg: "bg-green-100", strike: "line-through text-gray-400" },

        "low": { name: "Low Priority", text: "text-green-600", bg: "bg-green-100" },
        "medium": { name: "Medium Priority", text: "text-yellow-600", bg: "bg-yellow-100" },
        "high": { name: "High Priority", text: " text-red-500", bg: "bg-red-100" },
    }

    //Date Calculator
    function dateCalculator(date, status) {
        const date1 = new Date(date);
        const date2 = new Date();

        const diffInMs = date1 - date2;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        const dateFormatted = date1.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });

        // if the diff is +ve then Due. If the diff is -ve then overDue
        if (diffInDays <= 0) {
            if (status === "completed") {
                return <>
                    <LuCalendar className='text-gray-500 text-base' />
                    <p className='text-sm text-gray-500'>Due: {dateFormatted}</p>
                </>
            } else {
                return <>
                    <RiAlarmWarningLine className='text-red-500 text-base' />
                    <p className='text-sm text-red-500'>Overdue: {dateFormatted}</p>
                </>
            }
        } else {
            return <>
                <LuCalendar className='text-gray-500 text-base' />
                <p className='text-sm text-gray-500'>Due: {dateFormatted}</p>
            </>
        }
    }

    // Return tasks
    return (
        <>
            <div className="px-4 py-2">
                {filteredTasks.length === 0 ? (
                    // When no tasks
                    <div className="bg-white rounded-xl p-12 min-h-[60vh] border border-gray-400 shadow-xl flex flex-col items-center justify-center gap-3">
                        <BsListTask className="text-5xl text-gray-500" />
                        <p className="font-bold text-gray-600 text-lg">No tasks found</p>
                        <p className="text-gray-600 text-sm">Get started by adding a new task above.</p>
                    </div>
                ) : (

                    filteredTasks.map((task) => {
                        //Assigning values and calculating Date
                        const stat = status[task.status];
                        const prio = status[task.priority];
                        const date = dateCalculator(task.date, task.status);

                        //Check per task — if this task is being edited, show edit form instead
                        if (editTask && editTask.id === task.id) {
                            // console.log("clicked id:", editTask.id);
                            return <UpdateTask key={task.id} setEditTask={setEditTask} editTask={editTask} />
                        }

                        // Return data inside the Tasks
                        return (
                            <div key={task.id} className="bg-white rounded-xl p-4 shadow-xl border border-gray-400 flex justify-between gap-3 mb-2">
                                <div className='flex flex-col gap-2'>

                                    {/* Status Icon & Title */}
                                    <div className='flex flex-row gap-2 items-center'>
                                        <stat.icon className={`text-xl ${stat.iconClass} cursor-pointer`} onClick={() => updateStatus(task)} />
                                        <p className={`font-semibold text-lg ${stat.strike}`}>{task.title}</p>
                                    </div>

                                    <div className='flex flex-row gap-2 ml-7'>
                                        <p className={`${stat.text} ${stat.bg}  px-3 py-1 rounded-full text-sm font-medium`}>{stat.name}</p>
                                        <p className={`${prio.text} ${prio.bg}  px-3 py-1 rounded-full text-sm font-medium`}>{prio.name}</p>
                                    </div>

                                    {/* Task Description & Due/OverDue */}
                                    <div className='ml-7 flex flex-col gap-1 mt-3'>
                                        <p className={`text-base ${stat.strike}`}>{task.description}</p>
                                        <div className='flex items-center gap-1'>
                                            {/* <RiAlarmWarningLine className='text-red-500 text-sm' />
                                        <p className='text-sm text-red-500'>Overdue: {task.date}</p> */}
                                            {date}
                                        </div>
                                    </div>

                                </div>

                                {/* Edit & Delete Icons */}
                                <div className='flex flex-row gap-3 items-start'>
                                    <FaPencilAlt className='text-gray-400 cursor-pointer hover:text-gray-600' onClick={() => setEditTask(task)} />
                                    <FiTrash2 className='text-red-400 cursor-pointer hover:text-red-600' onClick={() => { deleteTask(task) }} />
                                </div>

                            </div>
                        );
                    })
                )}
            </div>
        </>
    )
}