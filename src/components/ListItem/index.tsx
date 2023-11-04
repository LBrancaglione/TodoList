import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { Modal } from "react-responsive-modal";

type Props = {
  item: Item;
  onDelete: (taskId: number) => void;
  onEdit: (taskId: number, newText: string) => void;
};

export const ListItem = ({ item, onDelete, onEdit }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const [modalStatus, setModalStatus] = useState(Boolean);
  const [newText, setNewText] = useState("");

  const deleteItem = (id: number) => {
    onDelete(id - 1);
  };

  function modalOpen() {
    setModalStatus(true);
  }

  const editItem = (id: number, newText: string) => {
    setModalStatus(false);
    onEdit(id, newText);
  };

  return (
    <C.Container done={isChecked}>
      <div className="input">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>{item.name}</label>
      </div>
      <C.Btns>
        <button onClick={modalOpen}>🖊️</button>
        <button onClick={() => deleteItem(item.id)}>🗑️</button>
      </C.Btns>
      <Modal open={modalStatus} center={true} closeIcon=" ">
        <C.EditText>
          <input
            type="text"
            onChange={(e) => setNewText(e.target.value)}
            placeholder={item.name}
          />
          <button onClick={() => editItem(item.id, newText)}>Confirmar</button>
        </C.EditText>
      </Modal>
    </C.Container>
  );
};
