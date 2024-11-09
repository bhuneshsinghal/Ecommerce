import React from 'react'
import styles from './CSS/LoginSignup.module.css'
function LoginSignup() {
    return (

        <div className={styles.loginsignup}>
            <div className={styles.loginsignupContainer}>
                <h1>Sign Up</h1>
                <div className={styles.loginsignup_fields}>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Your Password' />
                </div>
                <button>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default LoginSignup
