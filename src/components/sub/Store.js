import {configureStore} from '@reduxjs/toolkit'
import skillReducer from './reducers/Skill'

export default configureStore({
    reducer: {
        skill: skillReducer
    }
})