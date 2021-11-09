import styles from "../../../styles/Garden.module.scss";

function ChangeContentButton({ children, direction, onClick, ...rest }) {
  if (direction === "right") {
    return (
      <button
        className={`${styles.changeContentButton} ${styles.triangleRight}`}
        onClick={onClick}
        type="button"
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${styles.changeContentButton} ${styles.triangleLeft}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default ChangeContentButton;
