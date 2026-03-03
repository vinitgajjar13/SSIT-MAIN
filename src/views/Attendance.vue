<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Attendance Sheet</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-datetime
          v-model="attendanceDate"
          display-format="YYYY-MM-DD"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Class</ion-label>
        <ion-select v-model="selectedClass">
          <ion-select-option v-for="classItem in classes" :key="classItem">{{
            classItem
          }}</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="2"><strong>Eno.</strong></ion-col>
          <ion-col size="4"><strong>Name</strong></ion-col>
          <ion-col size="2"><strong>Present</strong></ion-col>
          <ion-col size="2"><strong>Absent</strong></ion-col>
        </ion-row>
        <ion-row v-for="student in students" :key="student.eno">
          <ion-col size="2">{{ student.eno }}</ion-col>
          <ion-col size="4">{{ student.name }}</ion-col>
          <ion-col size="2">
            <ion-radio-group v-model="student.attendance">
              <ion-radio slot="start" value="present"></ion-radio>
            </ion-radio-group>
          </ion-col>
          <ion-col size="2">
            <ion-radio-group v-model="student.attendance">
              <ion-radio slot="start" value="absent"></ion-radio>
            </ion-radio-group>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-button expand="full" @click="submitAttendance"
        >Submit Attendance</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonDatetime,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonTitle,
  IonHeader,
  IonToolbar,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonDatetime,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonRadioGroup,
    IonRadio,
    IonHeader,
    IonToolbar,
    IonTitle
  },
  data() {
    return {
      attendanceDate: new Date().toISOString().slice(0, 10),
      selectedClass: "",
      classes: ["Class A", "Class B", "Class C"], // Example classes
      students: [
        { eno: "3160001", name: "John Doe", attendance: "absent" },
        { eno: "3160002", name: "Jane Smith", attendance: "absent" },
        { eno: "3160003", name: "Michael Johnson", attendance: "absent" },
        { eno: "3160004", name: "Emily Davis", attendance: "absent" },
      ],
    };
  },
  methods: {
    submitAttendance() {
      const attendanceData = {
        date: this.attendanceDate,
        class: this.selectedClass,
        students: this.students.map((student) => ({
          eno: student.eno,
          name: student.name,
          attendance: student.attendance,
        })),
      };
      console.log("Attendance Data:", attendanceData);
      alert("Attendance submitted!");
    },
  },
};
</script>

<style scoped>
ion-page {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
}

ion-toolbar {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
  color: rgb(0, 0, 0);
}

ion-title {
  font-size: 1.5rem;
  font-weight: bold;
}

ion-grid {
  --ion-grid-padding: 0;
  --background: rgb(16, 69, 86);
  --color: black;
}

ion-row {
  --ion-grid-column-padding: 0.5rem;
  --color: black;
  --background: black;
}

ion-col {
  padding: 0.5rem;
  --color: black;
  --background: black;
}

ion-item {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
  --border-radius: 10px;
  --color: black;
}

ion-item:hover {
  transform: translateY(-5px);
}

ion-content {
  --background: rgb(16, 69, 86);
}

ion-datetime {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
  --color: black;
}

ion-select {
  --color: black;
}

ion-button {
  --background: linear-gradient(
    to bottom right,
    rgb(182, 182, 209),
    rgb(128, 207, 233)
  );
  --color: black;
}

ion-radio {
  --color: black;
  --background: black;
}

ion-radio-group {
  --color: black;
  --background: black;
}
</style>
