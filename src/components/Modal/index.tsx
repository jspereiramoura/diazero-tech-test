import { useModal } from "../../hooks/useModal";
import styles from "./Modal.module.scss";
import CloseIcon from "@assets/icons/closeIcon.svg?react";

export type ModalProps = {
  title: string;
  children: React.ReactNode;
};

const Modal = ({ title, children }: ModalProps) => {
  const { handleCloseModal } = useModal();

  return (
    <div className={styles.modalOverlay}>
      <section className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            className={styles.modalCloseButton}
            onClick={handleCloseModal}
          >
            <CloseIcon width={24} height={24} />
          </button>
        </header>
        <main>{children}</main>
      </section>
    </div>
  );
};

export default Modal;
