import classNames from "classnames";
import styles from "./Select.module.scss";

type SelectProps = {
  value: string;
  options: string[];
  className?: string;
  onChange: (value: string) => void;
};

const Option = ({ value }: { value: string }) => (
  <option value={value}>{value}</option>
);

function Select({ value, options, className, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      className={classNames(className, styles.select)}
    >
      {options.map(option => (
        <Option key={option} value={option} />
      ))}
    </select>
  );
}

export default Select;
