import tasksImg from '../assets/tasksImg.svg'
import '../CSS/NavStyle.css'

export function NavBar() {
    return (
        <div id="NavBar">
            <div>
                <img src={tasksImg} alt="TasksImg" id="logo" />
            </div>
            <div>
                <h3>TASK MANAGEMENT DASHBOARD</h3>
                <p>Organize and track your tasks</p>
            </div>
        </div>
    )
}