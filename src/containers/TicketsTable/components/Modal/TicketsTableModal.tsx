import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../../../components/Select";
import {
  updateTicket,
  updateTicketStatus
} from "../../../../data/slices/ticketSlice";
import { RootState } from "../../../../data/store";
import { useModal } from "../../../../hooks/useModal";
import { Ticket, TicketStatus } from "../../../../types/Ticket";
import styles from "./TicketsTableModal.module.scss";

interface TicketsTableModalProps {
  ticketId: Ticket["id"];
}

const TicketsTableModal = ({ ticketId }: TicketsTableModalProps) => {
  const dispatch = useDispatch();
  const { handleCloseModal } = useModal();

  const ticket = useSelector((state: RootState) =>
    state.tickets.find((t: Ticket) => t.id === ticketId)
  );

  if (!ticket) return null;

  const handlerStatusChange = (newStatus: TicketStatus) => {
    dispatch(updateTicketStatus({ id: ticketId, status: newStatus }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(updateTicket({ ...ticket, [name]: value }));
  };

  const handleSave = () => {
    dispatch(updateTicket(ticket));
    handleCloseModal();
  };

  return (
    <div className={styles.modal}>
      <p>
        <strong className={styles.modalLabel}>ID: </strong> {ticket.id}
      </p>
      <label className={styles.modalLabel}>
        <strong>Título:</strong>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={ticket.title}
          className={styles.modalInput}
        />
      </label>
      <label className={styles.modalLabel}>
        <strong>Status:</strong>
        <Select
          value={ticket.status}
          options={Object.values(TicketStatus)}
          className={styles.modalSelect}
          onChange={value => handlerStatusChange(value as TicketStatus)}
        />
      </label>
      <label className={styles.modalLabel}>
        <strong>Descrição:</strong>
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
          className={styles.modalTextarea}
        />
      </label>
      <button className={styles.modalSaveButton} onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
};

export default TicketsTableModal;
