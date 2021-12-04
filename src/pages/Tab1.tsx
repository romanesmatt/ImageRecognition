import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import './Tab1.css';
import { camera } from 'ionicons/icons';
import { usePhotoQueries } from '../hooks/UsePhotoQueries';

const Tab1: React.FC = () => {

  const [image, setImage] = React.useState('');
  const { takePhoto } = usePhotoQueries();

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="container">
          <strong>Want to find out what something is?</strong>
          <p>Press the camera icon to get started.</p>
        </div>

        <div className="analysis">
          <IonButton
            id="analysis"
            size="small"
            color="success"
            routerLink="/analyzedphoto"
          >
            Analyze the photo
          </IonButton>

        </div>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );


};

export default Tab1;
