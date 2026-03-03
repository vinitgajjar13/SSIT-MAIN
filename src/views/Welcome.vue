<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title> College App</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="8" size-lg="6">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Welcome!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>
                    Welcome to the College App. This is your one-stop solution for managing all your college activities. Log in or sign up to get started.
                  </p>
                  <ion-button expand="block" router-link="/signin">Log In</ion-button>
                  <ion-button expand="block" fill="clear" router-link="/signup">Sign Up</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      IonCard,
      IonCardHeader,
      IonCardTitle,
      IonCardContent,
      IonButton,
    },
  };
  </script>
  
  <style scoped>
  ion-content {
    --background: rgb(16, 69, 86);
  }
  
  ion-toolbar {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    color: rgb(0, 0, 0);
  }
  
  ion-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    --color:black;
  }
  
  ion-card {
    margin: 20px;
    padding: 20px;
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    --color:black;
  }
  
  ion-button {
    margin-top: 10px;
    --background: rgb(16, 69, 86);
    --color:white;
  }
  
  
  </style>