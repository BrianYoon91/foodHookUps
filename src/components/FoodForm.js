import React from "react"
import { data } from "./foodArray"
import { useGlobalContext } from "../context"
import { Link } from "react-router-dom";

import styles from "./FoodForm.module.scss";

const FoodForm = () => {

    const {handleChange, handleSubmit, notSelected} = useGlobalContext();

    return (
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label htmlFor="foodOptions">Who's your hot date for tonight?</label>

                        <select name="" id="foodOptions" className={styles.select}
                        onChange={(e) => handleChange(e)}>
                            <option className={styles.option} value="" default selected disabled>RIGHT HERE</option>
                        {
                            data.map((food, i)=> 
                            <option className={styles.option} value={food} key={i}>{food}</option>
                            )
                        }
                        </select>

                        <Link to={'/displayMatch'}>

                        { notSelected ?
                            ( <button disabled={notSelected} className={styles.button}>Pick your date first</button>)
                            : 
                            ( <button onClick={handleSubmit} className={styles.button}> Take Me Out Baby </button>)
                        }
                        </Link>
                </form>
            </div>
    )

}

export default FoodForm; 