import React from 'react'
import Item from '../Components/Item/Item'
import styles from './CSS/ShopCategory.module.css';
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
    const context = useContext(ShopContext);
    const all_product = context.all_product;
    return (
        <div className={styles.shop_category}>
            <img src={props.banner} alt="" />
            <div className={styles.collections}>
                {all_product.map((item, i) => {
                    return item.category === props.category && <Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} ></Item>
                }
                )}
            </div>
        </div>
    )
}

export default ShopCategory
