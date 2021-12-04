import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
} from '@ionic/react';
import './Animals.css';

const Animals: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Animals</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <div>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Category</IonCardSubtitle>
                            <IonCardTitle>Animals</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                        Animals are a major group of organisms, classified as 
                        the kingdom Animalia or Metazoa. In general they are multicellular, 
                        capable of locomotion and responsive to their environment, 
                        and feed by consuming other organisms.
                        </IonCardContent>
                    </IonCard>



                </div>

            </IonContent>
        </IonPage>
    );


};

export default Animals;
