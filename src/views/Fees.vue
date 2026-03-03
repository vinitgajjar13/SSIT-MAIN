<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Fees Section</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
          <!-- Tuition Fees -->
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Tuition Fees</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list lines="full">
                    <ion-item>
                      <ion-label>Current Semester Tuition Fee:</ion-label>
                      <ion-label slot="end">$1,200.00</ion-label>
                    </ion-item>
                   
                    <ion-item>
                      <ion-label>Payment Due Date:</ion-label>
                      <ion-label slot="end">31st July 2024</ion-label>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
  
          
  
          <!-- Payment Options -->
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Payment Options</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list lines="full">
                    <ion-item>
                      <ion-label>Pay Fees Online:</ion-label>
                      <ion-button slot="end" color="primary" @click="payOnline">Pay Now</ion-button>
                    </ion-item>
                    <ion-item>
                      <ion-label>Bank Transfer Details:</ion-label>
                      <ion-label slot="end">Account Number: XXXX-XXXX-XXXX<br>IFSC Code: XXXX1234</ion-label>
                    </ion-item>
                  </ion-list>
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
    IonList,
    IonItem,
    IonLabel,
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
      IonList,
      IonItem,
      IonLabel,
      IonButton,
    },
    methods: {
      payOnline() {
        // Implement pay online functionality
        console.log('Redirecting to payment gateway...');
      },
    },
  };
  </script>
  
  <style scoped>
  .unread-indicator {
    background: var(--ion-color-primary);
  
    width: 10px;
    height: 10px;
  
    border-radius: 100%;
  
    position: absolute;
  
    inset-inline-start: 12px;
    top: 12px;
  }
  
  .metadata-end-wrapper {
    position: absolute;
  
    top: 10px;
    inset-inline-end: 10px;
  
    font-size: 0.8rem;
  
    display: flex;
    align-items: center;
  }
  
  ion-label strong {
    display: block;
  
    max-width: calc(100% - 60px);
  
    overflow: hidden;
  
    text-overflow: ellipsis;
  }
  
  ion-label ion-note {
    font-size: 0.9rem;
  }
  
  
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
  
    ion-card {
      --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
      --color:black;
    }
    ion-card-title {
      --color:black;
    }
  
  </style>