export function Button ({
  text = "Close",
  classes = "#",
  event = () => {
    console.log("click");
  },
}) {
  return (
    <button onClick={event} className={classes}>
      {text}
    </button>
  );
};