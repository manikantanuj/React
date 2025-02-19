import Item from "./Item";

const FoodItems = (props) => {
  //let foodItems = ["Dal", "Salad", "chana"];
  let {items} = props
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
