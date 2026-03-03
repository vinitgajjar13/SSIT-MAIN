<template>
    <ion-page>
      
        <ion-toolbar>
          <ion-title>My Profile</ion-title>
        </ion-toolbar>
       <ion-content :fullscreen="true">
       
        <ion-item>
         <ion-avatar slot="start">
           <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
         </ion-avatar>
         <ion-label>SPHVS</ion-label>
         <ion-label>123456789012</ion-label>
       </ion-item>
       
       <ion-content>
        
        <ion-list :inset="true">
        <ion-item>
          <ion-label>DEPARTMENT :</ion-label>
            <ion-label>B.Tech Computer Engineering</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>SEMESTER :</ion-label>
          <ion-label>7</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>CURRENT CGPA :</ion-label>
          <ion-label>8.00</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>ACCEDMIC YEAR :</ion-label>
          <ion-label>2020-2024</ion-label>
        </ion-item>
        
      </ion-list>
    
     <h1>About</h1>
     
     <ion-list :inset="true">
      <ion-item>
          <ion-label>Name :</ion-label>
          <ion-item>
            <ion-input label="SPHVS" label-placement="floating" placeholder="Enter New Name"></ion-input>
          </ion-item>
         
        </ion-item>
        <ion-item>
          <ion-label>Date Of Birth :</ion-label>
          <ion-item>
            <ion-input label="1st June 2004" label-placement="floating" placeholder="Enter New DOB"></ion-input>
          </ion-item>
        </ion-item>
     </ion-list>
      
        
        
      <h1>Contact Details </h1>
      
      <ion-list :inset="true">
        <ion-item>
          <ion-label>Contact No. :</ion-label>
          <ion-label>1234567890</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Email id :</ion-label>
          <ion-label>abc@gmail.com</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Address :</ion-label>
          <ion-label>101, abc App. State,Country-123456</ion-label>
        </ion-item>
      </ion-list>
      
      
        
          <h1>Activities</h1>
          <ion-list :inset="true">
            <ion-toolbar>
            <ion-buttons slot="end" id="present-alert1">
             <ion-button fill="outline">
                Add
             </ion-button> 
           </ion-buttons>
            <ion-alert
               trigger="present-alert1"
               header="Data Sucessfully Submitted!"
               :buttons="alertButtons"
               @didDismiss="logResult($event)">
            </ion-alert>
           <ion-item>
              <ion-input label="Projects" label-placement="floating" placeholder="Add a New Project"></ion-input>
           </ion-item>
          </ion-toolbar>
          <ion-toolbar>
           <ion-buttons slot="primary" id="present-alert2">
            <ion-button fill="outline">
              Add
            </ion-button> 
           </ion-buttons>
           <ion-alert
             trigger="present-alert2"
             header="Data Sucessfully Submitted!"
             :buttons="alertButtons"
              @didDismiss="logResult($event)">
           </ion-alert>
           <ion-item>
             <ion-input label="Certifications" label-placement="floating" placeholder="Add Certificate"></ion-input>
           </ion-item>
          </ion-toolbar>
          <ion-toolbar>
            <ion-buttons slot="primary" id="present-alert3">
             <ion-button fill="outline">
               Add
             </ion-button> 
           </ion-buttons>
           <ion-alert
             trigger="present-alert3"
             header="Data Sucessfully Submitted!"
             :buttons="alertButtons"
             @didDismiss="logResult($event)">
           </ion-alert>
           <ion-item>
             <ion-input label="Extra Curricular Activities" label-placement="floating" placeholder="Add Activities"></ion-input>
           </ion-item>
         </ion-toolbar>
          </ion-list>
          
          
     </ion-content>
      
      </ion-content>
      
    </ion-page>
  </template>
  
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBadge, IonItem, IonLabel, IonList,  IonAlert, IonInput, IonButton, IonButtons,  } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import { Icon } from 'ionicons/dist/types/components/icon/icon';
  import { expandOutline, pencilOutline } from 'ionicons/icons';
  import { writeTask } from 'ionicons/dist/types/stencil-public-runtime';
  const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      },
    ];
  const logResult = (ev: CustomEvent) => {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    };
  </script>
  
  
  
  <style scoped>
  
    ion-toolbar {
      --background: rgb(3, 34, 45);
    }
    ion-title {
      --color: black;
    }
    ion-list, ion-item {
      --background: lightblue;
    }
    ion-item {
      --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
      --color: black;
    }
    ion-button {
      --color: black;
      --background: lightblue;
    }
    h1 {
      --background: lightblue;
      --color: black;
    }
    ion-toolbar {
      --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
      --color: black;
    }
    
    ion-content {
      --background: rgb(16, 69, 86);
    }
  
  
  
  </style>