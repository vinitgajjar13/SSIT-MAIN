<template>
    <ion-page>
        
  
      <ion-header>
            <ion-toolbar>
                <ion-title>Result</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
         <ion-card>
          <ion-item>
            <ion-label>Exam</ion-label>
            <ion-select v-model="selectedSemester" slot="end" placeholder="BE Regular Result">
              <ion-select-option value="Sem 1">BE Sem 1</ion-select-option>
              <ion-select-option value="Sem 2">BE Sem 2</ion-select-option>
              <ion-select-option value="Sem 3">BE Sem 3</ion-select-option>
              <ion-select-option value="Sem 4">BE Sem 4</ion-select-option>
              <ion-select-option value="Sem 5">BE Sem 5</ion-select-option>
              <ion-select-option value="Sem 6">BE Sem 6</ion-select-option>
              <ion-select-option value="Sem 7">BE Sem 7</ion-select-option>
              <ion-select-option value="Sem 8">BE Sem 8</ion-select-option>
              </ion-select>
              </ion-item>
              </ion-card>
              
              
              <ion-list :inset="true">
        <ion-item>
          <ion-label>Name :</ion-label>
            <ion-label>----</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Enrollment No. :</ion-label>
          <ion-label>-----</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Declared On :</ion-label>
          <ion-label>----</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Exam :</ion-label>
          <ion-label>----</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Branch :</ion-label>
          <ion-label>----</ion-label>
        </ion-item>
        
      </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBadge, IonItem, IonLabel, IonList,  IonAlert, IonCard, IonSelect, IonSelectOption } from '@ionic/vue';
    export default {
      name: 'result',
      components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBadge, IonItem, IonLabel, IonList,  IonAlert, IonCard, IonSelect, IonSelectOption
      },
      data() {
        return {
          selectedSemester: ''
        }
      }
    }
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
  
    ion-button {
      position: center;
      margin: 0;
      position: absolute;
      top: 10%;
      left: 40%;
    }
  
  
  
  </style>