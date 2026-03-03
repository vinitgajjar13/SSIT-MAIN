<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-grid>
        <!-- Search Bar -->
        <ion-row>
          <ion-col>
            <ion-searchbar v-model="searchQuery" placeholder="Search settings"></ion-searchbar>
          </ion-col>
        </ion-row>

        <!-- Account -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Account</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Username:</ion-label>
                  <ion-input type="text" v-model="username"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label>Email:</ion-label>
                  <ion-input type="email" v-model="email"></ion-input>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Notifications -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Notifications</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Enable Notifications</ion-label>
                  <ion-toggle v-model="enableNotifications"></ion-toggle>
                </ion-item>
                <ion-list>
                  <ion-item v-for="notification in notifications" :key="notification.id">
                    {{ notification.message }}
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Update Information -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Update Information</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Name:</ion-label>
                  <ion-input type="text" v-model="name"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label>Password:</ion-label>
                  <ion-input type="password" v-model="password"></ion-input>
                </ion-item>
                <ion-button expand="block" @click="updateInfo">Update</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Appearance -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Appearance</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Theme:</ion-label>
                  <ion-select v-model="theme">
                    <ion-select-option value="light">Light</ion-select-option>
                    <ion-select-option value="dark">Dark</ion-select-option>
                  </ion-select>
                </ion-item>
                <ion-item>
                  <ion-label>Font Size:</ion-label>
                  <ion-select v-model="fontSize">
                    <ion-select-option value="small">Small</ion-select-option>
                    <ion-select-option value="medium">Medium</ion-select-option>
                    <ion-select-option value="large">Large</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Privacy -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Privacy</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Share Location:</ion-label>
                  <ion-toggle v-model="shareLocation"></ion-toggle>
                </ion-item>
                <ion-item>
                  <ion-label>Share Contacts:</ion-label>
                  <ion-toggle v-model="shareContacts"></ion-toggle>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- About App -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>About App</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Version:</ion-label>
                  <ion-input type="text" v-model="version" readonly></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label>Developer:</ion-label>
                  <ion-input type="text" v-model="developer" readonly></ion-input>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Help & Support -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Help & Support</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label>Support Email:</ion-label>
                  <ion-input type="email" v-model="supportEmail" readonly></ion-input>
                </ion-item>
                <ion-button expand="block" @click="openSupportPage">Contact Support</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Our Team Information -->
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Our Team</ion-card-title>
              </ion-card-header>
             
                <ion-list :inset="true">
      <ion-item>
        <ion-label>Name :</ion-label>
        <ion-label>Pranjal Vejani</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Name :</ion-label>
        <ion-label>Heer Thakor</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Name :</ion-label>
        <ion-label>Sakshi Barapatre</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Name :</ion-label>
        <ion-label>Sahil Maurya</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Name :</ion-label>
        <ion-label>Vinit Karshala</ion-label>
      </ion-item>
                </ion-list>
              
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- Log Out -->
        <ion-row>
          <ion-col>
            <ion-button expand="block"  @click="logout">Log Out</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonCardContent,
  IonList,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonCardContent,
    IonList,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  data() {
    return {
      searchQuery: '',
      username: '',
      email: '',
      notifications: [
        
      ],
      name: '',
      password: '',
      theme: 'light',
      fontSize: 'medium',
      shareLocation: false,
      shareContacts: false,
      version: '1.0.0',
      developer: 'Developer Name',
      supportEmail: 'support@example.com',
      teamName: 'Team Name',
      teamEmail: 'team@example.com',
      enableNotifications: false
    };
  },
  methods: {
    updateInfo() {
      // Update user information logic here
      console.log('Updating information');
    },
    logout() {
      // Log out logic here
      console.log('Logging out');
      // Example: Clear session and redirect to login page
      // localStorage.clear();
      // this.$router.push({ name: 'login' });
    },
    openSupportPage() {
      // Open support page logic here
      console.log('Opening support page');
    }
  }
};
</script>

<style scoped>
ion-header {
  --background: #f8f9fa;
  --color: #000000;
}

ion-title {
  font-size: 1.5em;
  font-weight: bold;
  --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  --color: #000000;
}

ion-content {
  --background: rgb(16, 69, 86);
}

ion-searchbar {
  margin: 16px;
  --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  --color: #000000;
  
}

ion-card {
  --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  --color: #000000;
  
  margin: 8px 16px;
 
}

ion-card-title {
  font-size: 1.2em;
  font-weight: bold;
  --color:black;
}

ion-item {
  --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  --color: #000000;
  --border-color: #000000;
}

ion-button {
  margin: 16px;
  --background: rgb(16, 69, 86);

}

ion-toolbar {
  --background:linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));;
  --color: #000000;
}
</style>
