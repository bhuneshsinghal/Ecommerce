import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_logo}>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className={styles.nav_menu}>
                <li onClick={() => { setMenu("shop") }}><Link to="/" className={styles.linkUnderline}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}><Link to={"/mens"} className={styles.linkUnderline}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link to={"/womens"} className={styles.linkUnderline}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to={"/kids"} className={styles.linkUnderline}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className={styles.nav_login_cart}>
                <Link to={"/login"}><button>Login</button></Link>
                <Link to={"/cart"}><img src={cart_icon} alt="" /></Link>
                <div className={styles.nav_login_cart_count}>0</div>
            </div>
        </div>
    )
}

export default Navbar
