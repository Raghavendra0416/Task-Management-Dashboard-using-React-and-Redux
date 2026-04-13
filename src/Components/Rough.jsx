export default function fun() {
    function handleClick(){
        
    }
    return (
        <>
            <div className="h-32 w-full bg-gray-500">
                <h3>Add New Task</h3>
                <form onSubmit={handleClick}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Enter Task Title" />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" placeholder="Enter Task Description" />

                    <label htmlFor="status">Status</label>
                    <select name="status" id="status">
                        <option value="to-do">To Do</option>
                        <option value="progress">Progress</option>
                        <option value="completed">Completed</option>
                    </select>

                    <label htmlFor="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" />
                </form>
            </div>
        </>
    )
}