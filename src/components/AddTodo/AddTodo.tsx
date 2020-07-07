import React, { useState, useRef } from 'react';
import { IonItem, IonInput, IonButton, IonAlert } from '@ionic/react';
const AddTodo: React.FC<{ addTodoHandler: (text: any) => void }> = ({
  addTodoHandler,
}) => {
  const todoInputRef = useRef<HTMLIonInputElement>(null);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const submitTodoText = () => {
    if (todoInputRef.current?.value === '') {
      setIsAlertOpen(true);
      return; // exists the function is not input is entered
    }
    addTodoHandler(todoInputRef.current?.value);
    todoInputRef.current!.value = '';
  };
  return (
    <IonItem>
      <IonInput
        ref={todoInputRef}
        placeholder="Enter a todo"
        className="todo_input"
      ></IonInput>
      <IonButton onClick={submitTodoText} size="default">
        Add Todo
      </IonButton>
      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        cssClass="my-custom-class"
        header={'No Todo'}
        message={'Please enter a valid text'}
        buttons={['Okay']}
      />
    </IonItem>
  );
};

export default AddTodo;
