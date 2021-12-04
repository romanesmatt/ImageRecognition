import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonActionSheet
} from '@ionic/react';
import './Tab1.css';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoQueries, UserPhoto } from '../hooks/UsePhotoQueries';
import './Tab2.css';

const Tab2: React.FC = () => {

  const { deletePhoto, photos, takePhoto } = usePhotoQueries();
  const [photoToDelete, setPhotoToDelete] = React.useState<UserPhoto>();


  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Photo Gallery</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      <IonActionSheet
        isOpen={!!photoToDelete}
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            if (photoToDelete) {
              deletePhoto(photoToDelete);
              setPhotoToDelete(undefined);
            }
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel'
        }]}
        onDidDismiss={() => setPhotoToDelete(undefined)}
      />


    </IonContent>
  </IonPage>
  );
};

export default Tab2;
