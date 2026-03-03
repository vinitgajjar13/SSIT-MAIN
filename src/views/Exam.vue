<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exam</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list :inset="true">
        <ion-item :button="true" router-link="/tabs/views/timetable">
          <ion-icon slot="start" :icon="listCircle" size="large"></ion-icon>
          <ion-label>Time-Table</ion-label>
          <ion-icon color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>
        <ion-item :button="true">
          <ion-icon slot="start" :icon="listCircle" size="large"></ion-icon>
          <ion-label>Regular Exam Form</ion-label>
          <ion-icon color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>
        <ion-item :button="true">
          <ion-icon slot="start" :icon="listCircle" size="large"></ion-icon>
          <ion-label>Hall Ticket</ion-label>
          <ion-icon color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>
        <ion-item :button="true">
          <ion-icon slot="start" :icon="listCircle" size="large"></ion-icon>
          <ion-label>Result</ion-label>
          <ion-icon color="medium" :icon="chevronForward"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { defineComponent } from "vue";
import { chevronForward, listCircle } from "ionicons/icons";
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
ion-list,
ion-item {
  --background: lightblue;
}
ion-item {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
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
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
  --color: black;
}

ion-content {
  --background: rgb(16, 69, 86);
}

ion-icon {
  --color: black;
}
</style>
