import { useState } from 'react';
import { BsFunnelFill } from 'react-icons/bs';
import { useSelector } from "react-redux";
import Tasks from "./Tasks";

export default function Filter() {
    const filters = ["All Tasks", "Active", "Completed"]
    const data = useSelector((state) => state.taskData.tasks);
    const [activeFilter, setActiveFilter] = useState("All Tasks");

    // console.log("data.taskData: ", data);
    // console.log(activeFilter);

    const statusMap = {
        "Active": ["progress", "to-do"],
        "Completed": ["completed"]
    };

    const filteredTasks = data.filter((task) => {
        if (activeFilter === "All Tasks") return true;
        return statusMap[activeFilter].includes(task.status);
    });

    // const filteredTasks = data.filter((task) => {
    //     if (activeFilter === "Active") {
    //         return task.status === "progress";
    //     } else if (activeFilter === "Completed") {
    //         return task.status === "completed";
    //     }
    //     return true;
    // })


    // console.log("filteredTasks: ", filteredTasks);


    return (
        <>
            <div className="px-4 py-2">
                <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-400 flex items-center gap-3 overflow-x-auto">
                    <BsFunnelFill className='text-xl text-gray-600' />
                    <p className="font-semibold text-gray-600">Filter:</p>

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-xl px-4 py-2 font-semibold text-sm border whitespace-nowrap
                            ${activeFilter === filter
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-gray-300"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}

                </div>
            </div>

            <Tasks filteredTasks={filteredTasks} />
        </>
    )
}
