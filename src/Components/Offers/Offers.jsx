import React from 'react'
import styles from './Offers.module.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className={styles.offers}>
            <div className={styles.offers_left}>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className={styles.offers_right}>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
