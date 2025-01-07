import { useDispatch } from "react-redux";
import { updateTicketStatus } from "../../../../data/slices/ticketSlice";
import { Ticket, TicketStatus } from "../../../../types/Ticket";
import styles from "./TicketsTableRow.module.scss";
import Select from "../../../../components/Select";

type TicketsTableRowProps = {
  ticket: Ticket;
  onTicketClick: (ticket: Ticket) => void;
};

const TicketsTableRow = ({ ticket, onTicketClick }: TicketsTableRowProps) => {
  const dispatch = useDispatch();

  const handlerStatusChange = (newStatus: TicketStatus) => {
    dispatch(updateTicketStatus({ id: ticket.id, status: newStatus }));
  };

  return (
    <tr className={styles.row}>
      <td className={styles.rowCell} onClick={() => onTicketClick(ticket)}>
        {ticket.id}
      </td>
      <td className={styles.rowCell} onClick={() => onTicketClick(ticket)}>
        {ticket.title}
      </td>
      <td className={styles.rowCell}>
        <Select
          value={ticket.status}
          options={Object.values(TicketStatus)}
          onChange={value => handlerStatusChange(value as TicketStatus)}
        />
      </td>
    </tr>
  );
};

export default TicketsTableRow;
