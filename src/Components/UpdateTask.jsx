import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "./taskSlice";

export default function UpdateTask({ setEditTask, editTask }) {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        const taskData = {
            id: editTask.id,
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
            priority: e.target.priority.value,
            date: e.target.date.value
        };

        dispatch(updateItem(taskData));
        setEditTask(null)
    }

    return (
        <>
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-400 flex-col gap-4">

                <h3 className="font-bold text-lg">Update Task</h3>

                {/* Form */}
                <form ref={formRef} onSubmit={handleClick} className="flex flex-col gap-4">

                    {/* Title || Description */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="font-semibold text-sm">Title:</label>
                        <input type="text" id="title" placeholder="Enter Task Title" name="title" defaultValue={editTask.title}
                            className="p-3 rounded-lg bg-gray-100 border border-gray-200 outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="font-semibold text-sm">Description:</label>
                        <input type="text" id="description" placeholder="Enter Task Description" name="description" defaultValue={editTask.description}
                            className="p-3 rounded-lg bg-gray-100 border border-gray-200 outline-none resize-none" />
                    </div>

                    {/* Status || Priority || Date */}
                    <div className="flex flex-row gap-4">

                        <div className="flex flex-col gap-1 flex-1">
                            <label htmlFor="status" className="font-semibold text-sm">Status:</label>
                            <select name="status" id="status" defaultValue={editTask.status}
                                className="p-3 w-full bg-gray-100 rounded-lg border border-gray-200 outline-none">
                                <option value="to-do">To Do</option>
                                <option value="progress">Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>


                        <div className="flex flex-col gap-1 flex-1">
                            <label htmlFor="priority" className="font-semibold text-sm">Priority:</label>
                            <select name="priority" id="priority" defaultValue={editTask.priority}
                                className="p-3 w-full bg-gray-100 rounded-lg border border-gray-200 outline-none">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1 flex-1">
                            <label htmlFor="date" className="font-semibold text-sm">Date:</label>
                            <input type="date" id="date" name="date" defaultValue={editTask.date}
                                className="p-3 w-full bg-gray-100 rounded-lg border border-gray-200" />
                        </div>

                    </div>

                    <div className="flex gap-2">
                        <button type="submit" className="bg-black text-white rounded-xl p-3 w-4/5 font-semibold text-base" >
                            Update Task
                        </button>
                        <button type="button" onClick={() => setEditTask(null)}
                            className="bg-white text-black rounded-xl p-3 w-1/5 font-semibold text-base border border-gray-300">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}