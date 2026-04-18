import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskData",
    initialState: {
        tasks: [],
        nextId: 1,
        //Each object in tasks conatin
        //nextId: 1
        // taskTitle: '',
        // description: '',
        // status: '',
        // priority: '',
        // date: '',
    },
    reducers: {
        addItem: (state, action) => {
            const newTask = {
                id: state.nextId,
                ...action.payload
            };

            state.tasks.push(newTask);
            state.nextId += 1;
            // console.log("New Task Added: ", newTask);  // Same data is being added if clicked addItem
        },
        updateItem: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            // findIndex → finds position of the task that matches the id

            if (index !== -1) {
                state.tasks[index] = action.payload  // mutates the actual task in the array
            }
        },
        deleteItem: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);

            state.tasks.splice(index, 1);
        }
    }
});

// Export the action creators
export const { addItem, updateItem, deleteItem } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;