<template>
  <ion-page>
      

    <ion-header>
          <ion-toolbar>
              <ion-title>Hall Ticket</ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-content>
      
      <ion-card>
        <ion-list :inset="true">
      <ion-item class="main">
        <ion-label>Sr No. :</ion-label>
          <ion-label>Detail :</ion-label>
          <ion-label>Sem :</ion-label>
          <ion-label>Action :</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>1 </ion-label>
        <ion-label>BE - SEM 6 REGULAR SUMMER EXAMINATION-2024</ion-label>
        <ion-label>6</ion-label>
        <ion-label> Exam Form
          <link rel="Exam Form" href="https://student.gtu.ac.in/Examform.aspx">
        </ion-label>
      </ion-item>

    </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBadge, IonItem, IonLabel, IonList,  IonAlert } from '@ionic/vue';
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
  --background: rgb(16, 69, 86);
}



</style>