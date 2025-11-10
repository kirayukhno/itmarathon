import Modal from "../modal/Modal";
import Button from "@components/common/button/Button";
import type { DeleteConfirmModalProps } from "./types";
import "./DeleteConfirmModal.scss";

const DeleteConfirmModal = ({
  title,
  description,
  iconName,
  isOpen = false,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  variant = "danger",
}: DeleteConfirmModalProps) => {
  return (
    <Modal
      title={title}
      description={description}
      iconName={iconName}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <div className="delete-confirm-modal__buttons">
        <Button
          size="medium"
          variant="secondary"
          onClick={onClose}
          disabled={isLoading}
        >
          {cancelText}
        </Button>

        <Button
          size="medium"
          variant="primary"
          onClick={onConfirm}
          disabled={isLoading}
          className={variant === "danger" ? "button--danger" : ""}
        >
          {isLoading ? "Processing..." : confirmText}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;