import React from 'react'
import styles from './NewCollections.module.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
    return (
        <div className={styles.new_collections}>
            <h1>New Collections </h1>
            <hr />
            <div className={styles.collections}>
                {new_collections.map((item, i) => {
                    return <Item key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections
