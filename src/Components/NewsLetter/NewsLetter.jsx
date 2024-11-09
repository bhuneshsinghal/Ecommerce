import React from 'react'
import styles from './NewsLetter.module.css'
const NewsLetter = () => {
    return (
        <div><div className={styles.newsLetter}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribed to our newsletter and stay updated</p>
            <div className="input_btn_box">
                <input type='email' placeholder='your email id' className={styles.text} />
                <button class={styles.btn}>Subscribe</button>
            </div>

        </div>
        </div>
    )
}

export default NewsLetter
