import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskData",
    initialState: {
        tasks: [],
        nextId: 1,
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

            console.log(newTask);  // Same data is being added if clicked addItem
        }
    }
});

// Export the action creators
export const { addItem } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;