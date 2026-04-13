import { BsListTask } from 'react-icons/bs'
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export default function Card() {

    const cardsData = [
        { title: "Total Tasks", icon: BsListTask, iconClass: "text-blue-500" },
        { title: "In Progress", icon: FaRegClock, iconClass: "text-yellow-500" },
        { title: "Completed", icon: FaRegCheckCircle, iconClass: "text-green-500" },
        { title: "To Do", icon: MdOutlineCheckBoxOutlineBlank, iconClass: "text-gray-400" },
    ];

    return (
        <div className='flex flex-wrap justify-around gap-x-8 gap-y-4 p-4'>
            {cardsData.map((item, index) => {  // flex-1 (fills available space) | min-w-[200px] (stops shrinking at 200px) | max-w-[300px] (stops growing at 300px)
                const Icon = item.icon
                return (
                    < div key={index} className='flex flex-col justify-between bg-white shadow-xl rounded-xl h-32 flex-1 min-w-[200px] max-w-[300px] p-4 border border-gray-400' >
                        <div className="flex justify-between items-center">
                            <p className='text-base text-gray-500 font-semibold'>{item.title}</p>
                            <Icon className={`text-xl ${item.iconClass}`} />
                        </div>

                        <p className="text-2xl font-bold text-gray-800">3</p>
                    </div>
                )
            })
            }
        </div >
    )
}


// Still need to add background color for icons.