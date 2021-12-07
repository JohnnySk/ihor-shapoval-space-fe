import {createSlice} from '@reduxjs/toolkit'

export const skillSlice = createSlice({
    name: 'skill',
    initialState: {
        value: null
    },
    reducers: {
        setActiveSkill: (state, action) => {
            console.log(action.payload);
            state.value = action.payload
        }
    }
});

export const {setActiveSkill} = skillSlice.actions;
//use to get state's value in external components
export const selectedSkill = state => state.skill.value;

export default skillSlice.reducer;