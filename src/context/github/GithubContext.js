import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    

    const clearConsole = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    

    return (<GithubContext.Provider value={{
        ...state,
        dispatch,
        clearConsole
        }}>
        {children}
    </GithubContext.Provider>);
};

export default GithubContext;