<template>
    <ion-page>
        <ion-content :fullscreen="true">
           <ion-card>
                <ion-card-header>
                  <ion-card-title>Welcome!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>
                    Welcome to the College App. This is your one-stop solution for managing all your college activities. Log in or sign up to get started.
                  </p>
                </ion-card-content>
              </ion-card>
            <ion-button expand="block" router-link="/login">Login</ion-button>
            <ion-button expand="block" router-link="/Signup">Sign UP</ion-button>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
//import logo from '../../../public/logo-removebg-preview-wkMcopvrN-transformed.png';

import { IonPage, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent
    },
  

});
</script>
