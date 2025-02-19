function CurrentTimestamp() {
  debugger;
  let todaysDate = new Date();
  let currentTime = new Date().getTime;
  return (
    <div className="about-clock">
      <p>
        {" "}
        This is the current time:
        {todaysDate.toLocaleDateString()} - {todaysDate.toLocaleTimeString().toUpperCase()}
      </p>
    </div>
  );
}
export default CurrentTimestamp;
