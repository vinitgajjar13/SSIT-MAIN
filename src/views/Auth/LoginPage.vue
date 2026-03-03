<template>
  <ion-page>
      <ion-content :fullscreen="true">
          <h1>Login Page</h1>
          <ion-card>
               
               <ion-card-title>Login to your account</ion-card-title>
             
             
               <ion-list :inset="true">
                 <ion-item>
                  <ion-input label="Email input" type="email" placeholder="email@domain.com"></ion-input>
                 </ion-item>
                 <ion-item>
                   <ion-input label="Password input" type="password" value="password"></ion-input>
                 </ion-item>
                </ion-list>
             
           </ion-card>
          <ion-button router-link="/tabs">Get Start</ion-button>
      </ion-content>
  </ion-page>
</template>
<script lang="ts">

import { IonPage, IonContent, IonButton, IonList, IonItem, IonInput, IonCard, IonCardTitle, } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
      IonPage,
      IonContent,
      IonButton,IonList,
      IonItem,
      IonInput,
      IonCard,
      IonCardTitle
  },
  setup() {
      return {
      }
  },
});
</script>