import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
import Card from "./UI/Card"
import styles from "./MatchFound.module.scss"

const MatchFound = ({foodTitle, matchCancel}) => {

    const {foodChoice } = useGlobalContext()

    return (
        <Card>
            <div className={styles.textContainer}>
                <h3>Match Found!</h3>
                <h4>Time for some {foodTitle}</h4>
                <Link to={"/displayMatch"}>
                    <button className={styles.cancelButton} onClick={matchCancel}>I want a different {foodChoice}</button>
                </Link>
            </div>

        </Card>
        
    )
}

export default MatchFound 