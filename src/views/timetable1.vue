<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-title>Time-Table</ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Exam Time-Table</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
      <ion-card>
        <ion-list :inset="true">
      <ion-item class="main">
        <ion-label>Sr No. :</ion-label>
          <ion-label>Subject Code :</ion-label>
          <ion-label>Name :</ion-label>
          <ion-label>Date :</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>1 </ion-label>
        <ion-label>3160704</ion-label>
        <ion-label>TOC</ion-label>
        <ion-label>15-05-'24</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>2 </ion-label>
        <ion-label>3160712</ion-label>
        <ion-label>MPI</ion-label>
        <ion-label>17-05-'24</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>3</ion-label>
        <ion-label>3160716</ion-label>
        <ion-label>IOT</ion-label>
        <ion-label>20-05-'24</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>4</ion-label>
        <ion-label>3160714</ion-label>
        <ion-label>DM</ion-label>
        <ion-label>22-05-'24</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>5</ion-label>
        <ion-label>3160707</ion-label>
        <ion-label>AJP</ion-label>
        <ion-label>24-05-'24</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>6</ion-label>
        <ion-label>3160003</ion-label>
        <ion-label>IPDC</ion-label>
        <ion-label>01-06-'24</ion-label>
      </ion-item>
      
    </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue';
  import { IonTitle, IonLabel, IonItem, IonPage, IonList, IonCard, IonContent, IonToolbar, IonHeader, } from '@ionic/vue';
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

  ion-card {
    --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  }



</style>