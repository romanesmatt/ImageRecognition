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
    IonCardTitle,
    IonList,
    IonItem
} from '@ionic/react';
import './Vehicles.css';

const Vehicles: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Scale Model Vehicles</IonTitle>
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
                            <IonCardTitle>Scale Model Vehicles</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Scale model vehicles are, to put it another way, a fraction
                            of the real vehicle the model is based on. For example. a 1:18th scale
                            model is 1/18th the size of the real vehicle. The smaller the number in
                            the scale size, the larger the model.
                        </IonCardContent>
                    </IonCard>
                    <div className="container">
                        <IonCard>
                            <IonCardHeader>
                                <strong>Want to purchase a scale model vehicle? </strong>
                                <p>Feel free to use the following links below:</p>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <a href="https://www.diecastmodels.co.nz">Diecast Models</a>
                                    </IonItem>

                                    <IonItem>
                                        <a href="https://www.aircraftmodels.co.nz">Aircraft Models</a>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );


};

export default Vehicles;
