const Item = ({foodItem}) => {
    //let {foodItem} = props; //This is array de-structuring
  return (
    <>
      <li key={foodItem} className="list-group-item">
        {foodItem}
      </li>
    </>
  );
};

export default Item;
