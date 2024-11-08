import React from 'react'
import styles from "./Hero.module.css"
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.hero_left}>
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className={styles.hand_hand_icon}>
                            <p>new</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>Collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className={styles.hero_latest_btn}>
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className={styles.hero_right}>
                    <img src={hero_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
