import { useSelector } from "react-redux";
import withModal from "../../contexts/ModalContext/withModal";
import styles from "./TicketsTable.module.scss";
import { RootState } from "../../data/store";
import TicketsTableRow from "./components/Row/TicketsTableRow";
import { useModal } from "../../hooks/useModal";
import TicketsTableModal from "./components/Modal/TicketsTableModal";
import TicketsTableFilter from "./components/Filter/TicketsTableFilter";
import { useEffect, useState } from "react";
import { TicketStatus } from "../../types/Ticket";

const TicketsTable = () => {
  const { handleOpenModal } = useModal();
  const { tickets } = useSelector((state: RootState) => state);

  const [filterValue, setFilterValue] = useState("Todos");
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  useEffect(() => {
    setFilteredTickets(tickets);
  }, [tickets]);

  return (
    <div className={styles.tickets}>
      <h1 className={styles.ticketsTitle}>Tickets Table</h1>
      <TicketsTableFilter
        selectedValue={filterValue}
        onFilterChange={value => {
          setFilterValue(value);
          setFilteredTickets(
            value === "Todos"
              ? tickets
              : tickets.filter(ticket => ticket.status === value)
          );
        }}
        filterValues={["Todos", ...Object.values(TicketStatus)]}
      />
      <table className={styles.ticketsTable}>
        <thead className={styles.ticketsHead}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={styles.ticketsBody}>
          {filteredTickets.map(ticket => (
            <TicketsTableRow
              key={ticket.id}
              ticket={ticket}
              onTicketClick={() => {
                handleOpenModal(<TicketsTableModal ticketId={ticket.id} />);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withModal(TicketsTable, "Ticket Details");
