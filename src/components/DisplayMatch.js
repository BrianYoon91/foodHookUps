import { useGlobalContext } from "../context"
import { useEffect, useState} from "react"
import Card from "./UI/Card"
import { Link } from "react-router-dom"
import FoodPicture from "./FoodPicture"

import styles from "./DisplayMatch.module.scss"


const DisplayMatch = () => {

    const {loading, refresh, apiArray,finalFood, setFinalFood } = useGlobalContext()
    const [isMatched, setIsMatched] = useState(false);

    const randomIndex = () => {
        return Math.floor(Math.random() * apiArray.length)
    } 
    
    const handleClickX = () => {
        setFinalFood(apiArray[randomIndex()])
    }

    const handleClickO = () => {
        setFinalFood(apiArray[randomIndex()])
        matcher();
    }

    const matchCancel = () => {
        setIsMatched(false)
    }

    const matcher = () => {
        const matchMe = 1 
        let matchNumber = Math.floor(Math.random() * 6)

        if (matchNumber === matchMe) {
            setIsMatched(true)
        }
    }


    return (
        <Card>
                    <div className={styles.pictureContainer}>

                        { !finalFood? (
                            <h3>WAIT GODDAMN IT</h3>
                        ) : (
                            <>

                            <FoodPicture 
                            finalFood={finalFood} 
                            setFinalFood={setFinalFood}
                            handleClickX={handleClickX}
                            handleClickO={handleClickO}
                            isMatched={isMatched} 
                            matchCancel={matchCancel}/>

                            <Link to={"/"}>
                                <button onClick={refresh} className={styles.backHome}>Different Food Please</button>
                            </Link>
                            </>
                        )}

                    </div>
        </Card>

    )
}

export default DisplayMatch