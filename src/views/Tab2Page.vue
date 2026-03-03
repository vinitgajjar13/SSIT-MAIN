
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logout">
            <ion-icon slot="icon-only" :icon="exitOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list inset="true">

        <ion-item router-link="/tabs/views/Myprofile">
          <ion-icon slot="start" :icon="personCircleOutline"></ion-icon>
          <ion-label>My Profile</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/Mycourse">
          <ion-icon slot="start" :icon="schoolOutline"></ion-icon>
          <ion-label>My Course</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/Fees">
          <ion-icon slot="start" :icon="cashOutline"></ion-icon>
          <ion-label>Fees</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/Attendance">
          <ion-icon slot="start" :icon="checkmarkCircleOutline"></ion-icon>
          <ion-label>Attendance</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/Exam">
          <ion-icon slot="start" :icon="bookOutline"></ion-icon>
          <ion-label>Exam</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/result">
          <ion-icon slot="start" :icon="trophyOutline"></ion-icon>
          <ion-label>Result</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/AcademicCalendar">
          <ion-icon slot="start" :icon="calendarOutline"></ion-icon>
          <ion-label>Academic Calendar</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>

        <ion-item router-link="/tabs/views/Announce">
        <ion-icon slot="start" :icon="informationCircleOutline"></ion-icon>
        <ion-label>Announcements</ion-label>
        <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
      </ion-item>

       <!---<ion-item router-link="/tabs/views/Settingpage">
          <ion-icon slot="start" :icon="settingsOutline"></ion-icon>
          <ion-label>Settings</ion-label>
          <ion-icon slot="end" color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>-->

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
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
} from '@ionic/vue';

import {
  personCircleOutline,
  schoolOutline,
  bookOutline,
  calendarOutline,
  exitOutline,
  cashOutline,
  checkmarkCircleOutline,
  trophyOutline,
  informationCircleOutline,
  settingsOutline,
  chevronForward
} from 'ionicons/icons';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonButtons
  },
  setup() {
    const logout = () => {
      // Implement logout functionality
      console.log("Logging out...");
    };

    return {
      logout,
      personCircleOutline,
      schoolOutline,
      bookOutline,
      calendarOutline,
      exitOutline,
      cashOutline,
      checkmarkCircleOutline,
      trophyOutline,
      informationCircleOutline,
      settingsOutline,
      chevronForward,
    };
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: rgb(3, 34, 45);
}

ion-title {
  --color: black;
}

ion-list,
ion-item {
  --background: lightblue;
}

ion-item {
  --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
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
  --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
  --color: black;
}

ion-content {
  --background: rgb(16, 69, 86);
}


</style>