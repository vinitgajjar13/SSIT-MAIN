<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Sign Up</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Create an Account</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
        <ion-input label="Name" label-placement="floating" placeholder="Enter text"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Email" label-placement="floating" placeholder="abc@gmail.com"></ion-input>
      </ion-item>
                    <ion-item>
                      <ion-input label="Password" label-placement="floating" placeholder="Enter Password"></ion-input>
                     
                    </ion-item>
                    <ion-item>
        <ion-input label="Confirm Password" label-placement="floating" placeholder="Enter Confirm Password"></ion-input>
      </ion-item>
                  </ion-list>
                  <ion-button expand="block" @click="signUp">Sign Up</ion-button>
                  <ion-button expand="block" fill="clear" router-link="/login">Already have an account? Log In</ion-button>
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
    IonInput,
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
      IonInput,
      IonButton,
    },
    data() {
      return {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      signUp() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        // Handle the sign-up logic here
        console.log('Signing up with', this.fullName, this.email, this.password);
      },
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
  
  ion-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  ion-card {
    margin: 20px;
    padding: 20px;
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --border-radius: 10px;
    box-shadow: 0 4px 8px rgba(255, 240, 240, 0.1);
  }
  
  ion-button {
    margin-top: 10px;
    --background: rgb(16, 69, 86);
    --color:white;
  }
   
  ion-item{
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
    --color:black;
  }
  
  ion-card-title {
    --color:black;
  }
  
  </style>