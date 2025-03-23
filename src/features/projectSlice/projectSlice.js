import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: []
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        deleteProjects: (state, action) => {
            state.projects = [];
        }
    }
});

export const {setProjects, deleteProjects} = projectSlice.actions;

export default projectSlice.reducer;