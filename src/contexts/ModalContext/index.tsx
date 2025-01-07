import { createContext, useState } from "react";
import Modal, { ModalProps } from "../../components/Modal";

export type ModalContextType = {
  handleOpenModal: (content: React.ReactNode) => void;
  handleCloseModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ title, children }: ModalProps) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setContent(content);
  };

  const handleCloseModal = () => {
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ handleOpenModal, handleCloseModal }}>
      {children}
      {content && <Modal title={title}>{content}</Modal>}
    </ModalContext.Provider>
  );
};
