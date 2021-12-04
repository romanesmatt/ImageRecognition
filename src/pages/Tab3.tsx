import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonButton
            size="large"
            expand="block"
            color="success"
            routerLink="/plants"
          >
            Plants
          </IonButton>
          <IonButton
            size="large"
            expand="block"
            color="danger"
            routerLink="/animals"
          >
            Animals
          </IonButton>
          <IonButton
            size="large"
            expand="block"
            color="warning"
            routerLink="/toys"
          >
            Toys
          </IonButton>
          <IonButton
            size="large"
            expand="block"
            color="tertiary"
            routerLink="/vehicles"
          >
            Scale Model Vehicles
          </IonButton>
          <IonButton
            size="large"
            expand="block"
            color="dark"
            routerLink="/electronics"
          >
            Electronics
          </IonButton>
        </IonList>
      </IonContent>

    </IonPage>


  );
};

export default Tab3;
