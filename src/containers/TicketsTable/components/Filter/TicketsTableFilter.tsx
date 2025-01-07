import Select from "../../../../components/Select";
import styles from "./TicketsTableFilter.module.scss";

type TicketsTableFilterProps = {
  selectedValue: string;
  filterValues: string[];
  onFilterChange: (value: string) => void;
};

const TicketsTableFilter = ({
  selectedValue,
  filterValues,
  onFilterChange
}: TicketsTableFilterProps) => {
  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel} htmlFor="statusFilter">
        Status:{" "}
      </label>

      <Select
        value={selectedValue}
        options={filterValues}
        className={styles.modalSelect}
        onChange={value => onFilterChange(value)}
      />
    </div>
  );
};

export default TicketsTableFilter;
