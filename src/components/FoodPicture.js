
import { useGlobalContext } from "../context"
import {FaRegWindowClose, FaRegCheckSquare} from 'react-icons/fa'
import styles from "./DisplayMatch.module.scss"
import MatchFound from "./MatchFound"


const FoodPicture = ({finalFood, handleClickX, handleClickO, isMatched, matchCancel}) => {

    const {foodChoice} = useGlobalContext()

    return (   
        <>
            { isMatched ? 
                (
                <MatchFound foodTitle={finalFood.title} matchCancel={matchCancel}/>
                ) : (
                <> 
                    <h3>{finalFood.title}</h3>
                    <img src={finalFood.image} alt={`picture of delicious ${foodChoice}`} />
                    <div className={styles.buttonContainer}>
                        <FaRegWindowClose className={styles.buttonX} onClick={handleClickX}/>
                        <FaRegCheckSquare className={styles.buttonV} onClick={handleClickO}/>
                    </div>
                </> 
                )
            }
        </>
    )
}

export default FoodPicture