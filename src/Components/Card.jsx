import '../CSS/Card.css'
import { BsListTask } from 'react-icons/bs'
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export default function Card() {

    const cardsData = [
        { title: "Total Tasks", icon: <BsListTask /> },
        { title: "In Progress", icon: <FaRegClock /> },
        { title: "Completed", icon: <FaRegCheckCircle /> },
        { title: "To Do", icon: <MdOutlineCheckBoxOutlineBlank /> },
    ];

    return (
        <div className="card-container">

            {cardsData.map((item, index) => (
                <div className="card" key={index}>
                    <div>
                        <p><b>{item.title}</b></p>
                    </div>

                    <div className="todo-icons">
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}

// Task Left:
// 1. Need to convert MdOutlineCheckBoxOutlineBlank to circle
// 2. Improvise the styling