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
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { usePhotoQueries } from '../hooks/UsePhotoQueries';
import './AnalyzedPhoto.css';

const AnalyzedPhoto: React.FC = () => {
    const { photos } = usePhotoQueries();
  
    return (
  
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Result</IonTitle>
            <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="12" key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
  
  
          <div className="container">
            <strong>We have a result!</strong>
            <p>This object belongs in the <a href="http://localhost:8100/toys">Toys category</a>.</p>
          </div>
  
          
        </IonContent>
      </IonPage>
    );
  
  
  };
  
  export default AnalyzedPhoto;