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
    IonItem,
    IonList
} from '@ionic/react';
import './Toys.css';

const Toys: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Toys</IonTitle>
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
                            <IonCardTitle>Toys</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Toys are simply objects that children use to entertain themselves
                            while simultaneously exploring the world around them, educating
                            themselves, role-playing, and learning to express their emotions.
                        </IonCardContent>
                    </IonCard>
                    <div className="container">
                        <IonCard>
                        <IonCardHeader>
                        <strong>Want to purchase a new toy?</strong>
                        <p>Feel free to use the following links below:</p>
                        </IonCardHeader>
                        <IonCardContent>
                        <IonList>
                            <IonItem>
                                <a href="https://www.thewarehouse.co.nz/c/toys-baby">The Warehouse</a>
                            </IonItem>
                            <IonItem>
                            <a href="https://www.toyworld.co.nz">Toyworld</a>
                            </IonItem>
                            <IonItem>
                            <a href="https://www.kmart.co.nz/category/toys/494006/">Kmart</a>
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

export default Toys;
