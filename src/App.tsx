import React, { useState } from 'react';
import { IonApp, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from './components/Header/Header';
import TodoCard from './components/TodoCard/TodoCard';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

import './app.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

interface todo {
  id: number;
  text: string;
  isChecked: boolean;
}

const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<todo[]>([]);

  if (
    localStorage.getItem('todo') !== null &&
    localStorage.getItem('todo') !== 'null' &&
    todoItems.length <= 0
  ) {
    const getStoredData: todo[] = JSON.parse(localStorage.getItem('todo')!);
    setTodoItems(getStoredData);
  }

  const localStorageHandler = (data: any) => {
    if (data.length === 0) {
      data = null;
    }
    const storeData: string = JSON.stringify(data);
    localStorage.setItem('todo', storeData);
  };

  const addTodoHandler = (text: string) => {
    const id = todoItems[todoItems.length - 1]?.id + 1 || 0; // generating id for each todo
    localStorageHandler([...todoItems, { id, text: text, isChecked: false }]);
    setTodoItems([...todoItems, { id, text: text, isChecked: false }]);
  };

  const toggleCompletedTodoHandler = (id: number) => {
    const toggleCompletedItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    localStorageHandler(toggleCompletedItems);
    setTodoItems(toggleCompletedItems);
  };

  const deleteTodoHandler = (id: number) => {
    const filteredTodoItems = todoItems.filter((item) => item.id !== id);
    localStorageHandler(filteredTodoItems);
    setTodoItems(filteredTodoItems);
  };

  return (
    <IonApp>
      <Header />
      <IonContent className="container">
        <TodoCard />
        <IonGrid className="list-container">
          <IonRow>
            <IonCol>
              <TodoList
                todoItems={todoItems}
                deleteTodoHandler={deleteTodoHandler}
                toggleCompletedTodoHandler={toggleCompletedTodoHandler}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <AddTodo addTodoHandler={addTodoHandler} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
