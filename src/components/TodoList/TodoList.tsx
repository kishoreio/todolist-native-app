import React from 'react';
import {
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { trashOutline, addCircleOutline } from 'ionicons/icons';

interface todo {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList: React.FC<{
  todoItems: todo[];
  deleteTodoHandler: (id: any) => void;
  toggleCompletedTodoHandler: (id: number) => void;
}> = ({ todoItems, deleteTodoHandler, toggleCompletedTodoHandler }) => {
  const deleteTodo = (todoId: number) => {
    deleteTodoHandler(todoId);
  };
  const toggleTodo = (todoId: number) => {
    toggleCompletedTodoHandler(todoId);
  };
  return (
    <IonList class="list">
      {todoItems.length === 0 ? (
        <div className="no_todo">
          <IonIcon icon={addCircleOutline} className="plus" />
          <h1>Starting adding your todo</h1>
        </div>
      ) : null}
      {todoItems.map((item: todo) => {
        return (
          <IonItem key={item.id} className="todo_list">
            <IonCheckbox
              slot="start"
              checked={item.isChecked}
              className="checkbox"
              onClick={() => {
                toggleTodo(item.id);
              }}
            />
            <IonLabel className={`${item.isChecked ? 'line-strike' : ''}`}>
              {item.text}
            </IonLabel>
            <IonButton
              color="danger"
              size="default"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              <IonIcon icon={trashOutline} className="ion-padding" />
            </IonButton>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default TodoList;
