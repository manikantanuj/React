const ErrorMessage = (propsi) => {
//  let {foodItems} = ["Dal", "Salad", "chana"];
let { items } = propsi;
return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
}

export default ErrorMessage;