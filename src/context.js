import axios from "axios";
import React, { useContext, useEffect, useState} from "react";


const AppContext = React.createContext();
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const apikey = `6c54a913a8574110ae60aecc91ee3660`;

export const AppProvider = ({children}) => {


    const [foodChoice, setFoodChoice] = useState('');
    const [apiArray, setApiArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notSelected, setNotSelected] = useState(true);
    const [finalFood, setFinalFood] = useState('')

    const handleChange = (e) => {
        setFoodChoice(e.target.value)
        setNotSelected(false); 
    }

    const handleSubmit = (e) => {
            axios({
                method: 'GET',
                baseURL: `${URL}`,
                params: {
                    type: `${foodChoice}`,
                    number: 50,
                    apiKey: `${apikey}`
                }
                
            }).then((res) => {
                setApiArray(res.data.results);
            })
            setLoading(false)
    }

    useEffect(() => {
        setFinalFood(apiArray[0])   
    }, [apiArray])
    
    const refresh = () => { 
        setFoodChoice('');
        setFinalFood('')
        setNotSelected(true);
    }

    return (
        <AppContext.Provider
        value={{
            foodChoice,
            apiArray,
            handleChange,
            handleSubmit,
            loading,
            setLoading,
            refresh,
            notSelected,
            finalFood,
            setFinalFood
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext}