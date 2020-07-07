import React from 'react';
import { IonRow, IonCol, IonTitle, IonGrid } from '@ionic/react';
import profile from '../../Resources/profile.jpg';

const TodoCard: React.FC = () => {
  return (
    <IonGrid className="dashboard">
      <IonRow className="card-row">
        <IonCol className="card-col">
          <IonTitle className="dashboard_title">Let's Plan</IonTitle>
        </IonCol>
        <IonCol className="card-col">
          <img src={profile} className="profile" alt="profile" />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TodoCard;
