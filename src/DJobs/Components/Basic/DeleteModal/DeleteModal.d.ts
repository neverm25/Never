declare namespace DeleteModalProps {
  type IProps = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    onDelete: () => void;
    title?: string;
    deletedItemName?: string;
  };
}

export { DeleteModalProps };
