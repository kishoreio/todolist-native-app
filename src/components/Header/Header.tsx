import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonToggle,
} from '@ionic/react';
import { listOutline } from 'ionicons/icons';

const Header = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(true);
  const changeAppTheme = () => {
    // handler to add and remove dark class from body
    document.body.classList.toggle('dark', toggleDarkMode);
    setToggleDarkMode(!toggleDarkMode);
  };
  return (
    <IonHeader>
      <IonToolbar className="header">
        <IonIcon
          icon={listOutline}
          size="large"
          slot="start"
          className="logo"
        />
        <IonTitle className="title">Todo</IonTitle>
        <IonToggle
          slot="end"
          mode="ios"
          checked={!toggleDarkMode}
          onClick={changeAppTheme}
          className="toggle-btn"
        ></IonToggle>
        <h3 slot="end" className="dark-btn">
          Dark Mode
        </h3>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
