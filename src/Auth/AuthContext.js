import {createContext,useState} from "react";

const AuthContext = createContext();

const AuthState = (props) => {
    const [user, setUser] = useState("");
    const update = () => {
        setUser("");
    }
    return(
        <AuthContext.Provider value={{user, update}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState