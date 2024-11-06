import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FC } from "react";
Modal.setAppElement("#root");
import { Image } from "../App/App.types";

interface ImageModalProps {
  onModalImg: Image;
  isOpen: boolean;
  onCloseModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2120209a",
    width: "90%",
    height: "90%",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const ImageModal: FC<ImageModalProps> = ({
  onModalImg,
  isOpen,
  onCloseModal,
}) => {
  return (
    <Modal
      onRequestClose={onCloseModal}
      // onModalImg={onModalImg}
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={onModalImg.urls.regular}
        alt={onModalImg.alt_description}
        className={css["modal-img"]}
      />
    </Modal>
  );
};

export default ImageModal;
