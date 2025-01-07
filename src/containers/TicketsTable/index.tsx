import { useSelector } from "react-redux";
import withModal from "../../contexts/ModalContext/withModal";
import styles from "./TicketsTable.module.scss";
import { RootState } from "../../data/store";
import TicketsTableRow from "./components/Row/TicketsTableRow";
import { useModal } from "../../hooks/useModal";
import TicketsTableModal from "./components/Modal/TicketsTableModal";

const TicketsTable = () => {
  const { handleOpenModal } = useModal();
  const { tickets } = useSelector((state: RootState) => state);

  return (
    <div className={styles.tickets}>
      <h1 className={styles.ticketsTitle}>Tickets Table</h1>
      <table className={styles.ticketsTable}>
        <thead className={styles.ticketsHead}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={styles.ticketsBody}>
          {tickets.map(ticket => (
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
