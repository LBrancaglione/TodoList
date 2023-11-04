import { useState } from "react";
import * as C from "./App.Styles";
import { Item } from "./types/Item";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import "react-responsive-modal/styles.css";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Example", done: true },
    { id: 2, name: "Roll the dice", done: false },
  ]);
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };
  const handleDelete = (taskId: number) => {
    if (taskId !== 0) {
      let newList = [...list];
      newList.splice(taskId, 1);
      setList(newList);
    }
    else{
      alert('Não é possível excluir o exemplo!');
    }
  };

  const handleEdit = (taskId: number, newText: string) => {
    if (taskId - 1 !== 0) {
      list[taskId - 1].name = newText;
    }
    else{
      alert('Não é possível editar o exemplo!')
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Todo List</C.Header>
        <AddArea onEnter={handleAddTask} />
        {
          /*Task List Area */
          list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        }
      </C.Area>
    </C.Container>
  );
};

export default App;
