import "./NotificationModal.scss";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 101,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
    zIndex: 101,
  },
};

interface INotificationModalProps {
  title: string;
  description: string;
  closeModalFunc: (isOpen: boolean) => void;
  isOpen: boolean;
}

Modal.setAppElement("#root");

const NotificationModal = ({
  isOpen,
  title,
  description,
  closeModalFunc,
}: INotificationModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeModalFunc(false);
    }, 400);
  };

  return (
    <Modal
      closeTimeoutMS={400}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Confirmation"
    >
      <section className="notification-modal">
        <div className="notification-modal__content">
          <h2 className="notification-modal__title">{title}</h2>
          <p className="notification-modal__description">{description}</p>
        </div>
        <div>
          <button className="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default NotificationModal;
