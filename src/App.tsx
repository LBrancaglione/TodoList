import { useState } from "react";
import * as C from "./App.Styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/Listitem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Work on the docs", done: true },
    { id: 2, name: "Travel the world", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Todo List</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {
          /*Task List Area */
          list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))
        }
      </C.Area>
    </C.Container>
  );
};

export default App;
