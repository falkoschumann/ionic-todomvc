import { IonButton, IonCheckbox, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>todos</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="active">
            <IonLabel>Active</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completed">
            <IonLabel>Completed</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonItem lines="none">
        <IonCheckbox slot="start"></IonCheckbox>
        <IonInput placeholder="What needs to be done?"></IonInput>
      </IonItem>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonCheckbox slot="start" checked></IonCheckbox>
          <IonLabel style={{'text-decoration': 'line-through'}}> Taste JavaScript</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Buy a unicorn</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
    <IonFooter class="ion-no-border">
      <IonToolbar>
        <IonLabel slot="start">1 item left</IonLabel>
        <IonButton slot="end" fill="clear">Clear completed</IonButton>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Home;
