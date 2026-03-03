<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-title>Time-Table</ion-title>
          </ion-toolbar>
      </ion-header>
      
      
    <ion-content>
      <ion-card>
      <ion-item>
        <ion-label>Semester</ion-label>
        <ion-select v-model="selectedSemester" slot="end" placeholder="Select one">
          <ion-select-option value="Sem 1">Sem 1</ion-select-option>
          <ion-select-option value="Sem 2">Sem 2</ion-select-option>
          <ion-select-option value="Sem 3">Sem 3</ion-select-option>
          <ion-select-option value="Sem 4">Sem 4</ion-select-option>
          <ion-select-option value="Sem 5">Sem 5</ion-select-option>
          <ion-select-option value="Sem 6">Sem 6</ion-select-option>
          <ion-select-option value="Sem 7">Sem 7</ion-select-option>
          <ion-select-option value="Sem 8">Sem 8</ion-select-option>
        </ion-select>
      </ion-item>

      <br>

      
      <ion-item>
        <ion-label>Branch</ion-label>
        <ion-select v-model="selectedBranch" slot="end" placeholder="Select one">
          <ion-select-option value="Computer Engineering">Computer Engineering</ion-select-option>
          <ion-select-option value="Mechanical Engineering">Mechanical Engineering</ion-select-option>
          <ion-select-option value="Civil Engineering">Civil Engineering</ion-select-option>
          <ion-select-option value="IT Engineering">IT Engineering</ion-select-option>
        </ion-select>
      </ion-item>
      
      
      </ion-card>
      
        <ion-button id="present-alert">Search</ion-button>
      
      
    </ion-content>
 
</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonApp, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      selectedSemester: '',
      selectedBranch: '',
    };
  },
});
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
  }

  ion-select v-model {
    --color:black;
    --background:black;
  }

  ion-button {
    position: center;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 40%;
  }

</style>