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
import './Plants.css';

const Plants: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Plants</IonTitle>
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
                            <IonCardTitle>Plants</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Plants are living things that grow from the soil and
                            turn light from the Sun into food. Plants can be big
                            or small, from giant trees to tiny patches of moss. Plants
                            use a process called photosynthesis to turn sunlight
                            into food in their leaves. They can then use this food to grow.
                        </IonCardContent>
                    </IonCard>

                    <div className="container">
                        

                        <IonCard>
                        <IonCardHeader>
                        <strong>Want to purchase a plant? </strong>
                        <p>Feel free to use the following links below:</p>
                        </IonCardHeader>
                        <IonCardContent>
                        <IonList>
                            <IonItem>
                                <a href="https://www.mitre10.co.nz/shop/garden-centre/garden-plants/c/RS2176">Mitre 10 Mega</a>
                            </IonItem>

                            <IonItem>
                            <a href="https://www.bunnings.co.nz/products/garden/plants">Bunnings Warehouse</a>
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

export default Plants;
