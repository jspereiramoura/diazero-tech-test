import { ComponentType } from "react";
import { ModalProvider } from ".";

const withModal = <P extends object>(
  Component: ComponentType<P>,
  title: string
) => {
  return (props: P) => (
    <ModalProvider title={title}>
      <Component {...props} />
    </ModalProvider>
  );
};

export default withModal;
