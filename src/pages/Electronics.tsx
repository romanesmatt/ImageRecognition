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
import './Electronics.css';

const Electronics: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Electronics</IonTitle>
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
                            <IonCardTitle>Electronics</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Electronics is defined as devices run by electric power or 
                            the field of studying such items. An example of electronics are radios, 
                            computers, and televisions. The invention of electronics has propelled 
                            society into one more advanced than the last.
                        </IonCardContent>
                    </IonCard>
                    <div className="container">
                        <IonCard>
                        <IonCardHeader>
                        <strong>Want to purchase a new device? </strong>
                        <p>Feel free to use the following links below:</p>
                        </IonCardHeader>
                        <IonCardContent>
                        <IonList>
                            <IonItem>
                                <a href="https://www.pbtech.co.nz">PB Tech</a>
                            </IonItem>

                            <IonItem>
                            <a href="https://www.noelleeming.co.nz">Noel Leeming</a>
                            </IonItem>
                            <IonItem>
                            <a href="https://www.harveynorman.co.nz">Harvey Norman</a>
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

export default Electronics;
