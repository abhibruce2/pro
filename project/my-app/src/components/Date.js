import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormFeedback } from "reactstrap";
import moment from "moment";
import Label from "./Label";
import DatePicker from "react-datepicker";
import FormGroup from "./FormGroup";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Date component
 *
 * @param {*} id
 * @param {*} name
 * @param {*} label
 * @param {*} placeholder
 * @param {*} required
 * @param {*} error
 */
const DateSelector = (props) => {
  const {
    id,
    name,
    showMonthYearPicker,
    label,
    placeholder,
    required,
    error,
    disabled,
    onChange,
    selected,
    format,
    maxDate,
    isClearable,
    showTimeSelect,
    position,
    minDate,
    showTimeSelectOnly,
  } = props;

  const validate = (value) => {
    let errorMessage;
    const inputLabel = label || placeholder;
    const errorMessageLabel = error;

    if (!value && required) {
      errorMessage = errorMessageLabel
        ? `${errorMessageLabel}`
        : `${inputLabel} is required`;
    }

    return errorMessage;
  };

  const renderInput = ({ field, form: { touched, errors, setFieldValue } }) => {
    const errorMessage = touched[name] && errors[name] ? errors[name] : null;

    return (
      <FormGroup
        style={{
          marginBottom: "22px",
          position: position ? position : "relative",
        }}
      >
        {label && (
          <Label id={id || name} name={name || id} required={required}>
            {label}
          </Label>
        )}
        <DatePicker
          // {...field}
          showTimeSelect={showTimeSelect && showTimeSelect}
          showTimeSelectOnly={showTimeSelectOnly}
          id={id || name}
          showMonthYearPicker={showMonthYearPicker}
          className={`form-control ${errorMessage ? "is-invalid" : ""}`}
          format
          timeIntervals={5}
          disabled={disabled}
          maxDate={maxDate}
          minDate={minDate}
          onChange={
            onChange
              ? onChange
              : (value) => {
                  setFieldValue(name, moment(value).toISOString());
                }
          }
          dateFormat={format || "dd-MMM-yyyy"}
          selected={
            field.value ? new Date(field.value) : selected ? selected : null
          }
          placeholderText={placeholder || label}
          autoComplete="off"
          isClearable={isClearable}
        />
        {/* errorMessage */}
        {errorMessage && (
          <span className="small text-danger">{errorMessage}</span>
        )}
      </FormGroup>
    );
  };

  return <Field validate={validate} name={name} component={renderInput} />;
};

DateSelector.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default DateSelector;
