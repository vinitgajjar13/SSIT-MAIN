<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Academic Calendar</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-datetime
                :events="events"
                :month="month"
                :year="year"
                @select="selectDate"
              ></ion-datetime>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-list :inset="true">
          <ion-item :button="true" v-for="holiday in holidays" :key="holiday.date">
            <ion-icon :color="holiday.color" slot="start" :icon="listCircle" size="large"></ion-icon>
            <ion-label>{{ holiday.date }}</ion-label>
            <ion-note slot="end">{{ holiday.name }}</ion-note>
          </ion-item>
        </ion-list>
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
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonIcon,
    IonNote,
  } from '@ionic/vue';
  import { calendar, listCircle } from 'ionicons/icons';
  
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
      IonList,
      IonItem,
      IonLabel,
      IonDatetime,
      IonIcon,
      IonNote,
    },
    data() {
      return {
        events: [],
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        date: new Date(),
        holidays: [
          { date: '17th June', name: 'Bakri Eid', color: 'danger' },
          { date: '7th July', name: 'Rathyatra', color: 'tertiary' },
          { date: '17th July', name: 'Muharram', color: 'success' },
          { date: '21st July', name: 'Guru Purnima', color: 'warning' },
          { date: '9th August', name: 'Nag Panchami', color: 'warning' },
          { date: '15th August', name: 'Independence Day', color: 'warning' },
          { date: '19th August', name: 'Rakshabandhan', color: 'warning' },
          { date: '26th August', name: 'Janmashthami', color: 'warning' },
          { date: '7th September', name: 'Ganesh Chaturthi', color: 'warning' },
          { date: '15th September', name: 'Onam', color: 'warning' },
          { date: '16th September', name: 'Eid-E-Milad', color: 'warning' },
          { date: '2nd October', name: 'Mahatma Gandhi Jayanti', color: 'warning' },
          { date: '12th October', name: 'Dussera', color: 'warning' },
          { date: '29th October', name: 'Dhanteras', color: 'warning' },
          { date: '30th October', name: 'Kali Chaudash', color: 'warning' },
          { date: '31st October', name: 'Diwali', color: 'warning' },
          { date: '1st November', name: 'Diwali', color: 'warning' },
          { date: '2nd November', name: 'Govardhan Puja', color: 'warning' },
          { date: '3rd November', name: 'Bhai Duj', color: 'warning' },
          { date: '15th November', name: 'Guru Nanak Jayanti', color: 'warning' },
          { date: '27th November', name: 'Kartik Purnima', color: 'warning' },
          { date: '25th December', name: 'Christmas Day', color: 'warning' },
        ],
        listCircle,
        calendar
      };
    },
    methods: {
      selectDate(date) {
        console.log(date);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  ion-page {
   
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  }
  
  ion-toolbar {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    color: rgb(0, 0, 0);
  }
  
  ion-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  ion-grid {
    --ion-grid-padding: 0;
    --background: rgb(16, 69, 86);
    
  }
  
  ion-row {
    --ion-grid-column-padding: 0.5rem;
    --background: rgb(16, 69, 86);
  }
  
  ion-col {
    padding: 0.5rem;
    --background: rgb(16, 69, 86);
  }
  
  ion-list {
    margin: 20px 0;
    --background: rgb(16, 69, 86);
  }
  
  ion-item {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --border-radius: 10px;
   
    
    --color:black;
  }
  
  ion-item:hover {
    transform: translateY(-5px);
   
  }
  
  ion-icon {
    margin-right: 10px;
    
  }
  
  ion-note {
    font-size: 1rem;
    font-weight: bold;
    --background: rgb(16, 69, 86);
    
  }
  ion-content {
    --background: rgb(16, 69, 86);
  }
  
  ion-calendar {
    --background: rgb(16, 69, 86);
    --color:black;
  }
  
  ion-datetime {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --color:black;
  }
  </style>