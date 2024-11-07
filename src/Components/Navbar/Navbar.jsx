import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_logo}>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className={styles.nav_menu}>
                <li onClick={() => { setMenu("shop") }}>Shop {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}>Men {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}>Women {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}>Kids {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className={styles.nav_login_cart}>
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className={styles.nav_login_cart_count}>0</div>
            </div>
        </div>
    )
}

export default Navbar
