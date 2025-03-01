import styles from './Item.module.css'
const Item = ({ foodItem }) => {
  //let {foodItem} = props; //This is array de-structuring
  return (
    <>
      <li key={foodItem} className={`${styles['item']} list-group-item `}>
        <span className={styles['item-span']}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
