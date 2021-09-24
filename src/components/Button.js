import React, { useState, useEffect } from "react";
import t from "prop-types";
import "./button.css";

export const Button = ({ label, onClick, type, disabled }) => {
  const [buttonType, setButtonType] = useState();

  useEffect(() => {
    if (type === "primary") {
      setButtonType("primary");
    } else if (type === "secondary") {
      setButtonType("secondary");
    } else if (type === "warning") {
      setButtonType("warning");
    } else if (type === "danger") {
      setButtonType("danger");
    } else if (type === "negative") {
      setButtonType("negative");
    } else {
      setButtonType("primary");
    }
  }, [type]);

  return (
    <button className={buttonType} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * A type value determines the usage of the button.
   */
    type: t.oneOf(["primary", "secondary", "warning", "danger", "negative"]),
  /**
   * Use this property to disable a button.
   */  
    disabled: t.oneOf([true, false]),
  /**
   * The label of the button.
   */
    label: t.string.isRequired,
  /**
   * The function that is called when the button is clicked.
   */
    onClick: t.func, 
};
Button.defaultProps = {
    type: "primary",
    disabled: false,
};