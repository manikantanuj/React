import styles from "./Buttons.module.css";

const Buttons = () => {
  const buttonList = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "X",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  return (
    //here in style we can also do {styles['buttonsContainer']}
    <div className={styles.buttonsContainer}>
      {buttonList.map((item) => (
        <button className={styles.button} type="button">
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
