<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Announcements</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="announcement in announcements" :key="announcement.id">
            <ion-label>{{ announcement.title }}</ion-label>
            <ion-note>{{ announcement.date }}</ion-note>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonItem, IonNote, IonList } from '@ionic/vue';
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
      IonLabel,
      IonItem,
      IonNote,
      IonList
    },
    data() {
      return {
        announcements: [
          { id: 1, title: "Welcome to College!", date: "June 23, 2024" },
          { id: 2, title: "Registration Open", date: "June 25, 2024" },
          { id: 3, title: "Orientation Schedule", date: "June 27, 2024" },
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  /* Global Styles */
  ion-page {
    background-color: #f7f7f7;
  }
  
  ion-header {
    background-color: #000000;
    color: #fff;
  }
  
  ion-toolbar {
  
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --color:black;
  }
  
  ion-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  ion-content {
    padding: 20px;
    --background: rgb(16, 69, 86);
  }
  
  /* List Styles */
  ion-list {
    margin-top: 20px;
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  }
  
  ion-item {
    
    
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --color:black;
  
  }
  
  ion-label {
    font-weight: bold;
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  }
  
  ion-note {
    font-size: 12px;
    color: #000000;
  }
  
  /* Custom Styles */
  .announcement-title {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  }
  
  .announcement-date {
    font-size: 10px;
    color: #999;
  }
  </style>