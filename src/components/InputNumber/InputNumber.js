import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./InputNumber.module.scss";

export default function InputNumber({
  className,
  label,
  value,
  onChange,
  min,
  max,
  step,
  type
}) {
  return (
    <label className={styles["input-number__label"]} data-label={label}>
      <input
        className={classNames(styles["input-number__input"], className)}
        type={type}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

InputNumber.defaultProps = {
  className: "",
  label: "",
  value: "0",
  onChange: () => {},
  min: "0",
  max: "100",
  step: "1",
  type: "number"
};

InputNumber.defaultProps = {
  className: "",
  value: null,
  onChange: () => {},
  min: "",
  max: "",
  step: "",
  type: "number"
};

InputNumber.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  type: PropTypes.string
};
