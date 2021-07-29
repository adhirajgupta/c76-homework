import {lightTheme} from '../Themes/Theme'
import { SWITCH_THEME } from './themeAction'

const initalState = {
    theme:lightTheme
}

const themeReducer = (state = initalState,action) => {
    switch(action.type){
        case SWITCH_THEME:
            return {theme:action.theme}

            default: return state;
    }
}

export default themeReducer