import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";
  if (props.status === "error") {
    specialClasses = classes.error;
  } else if (props.classes === "success") {
    specialClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
