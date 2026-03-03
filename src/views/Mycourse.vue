<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Study Material</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-searchbar v-model="searchQuery" placeholder="Search Materials"></ion-searchbar>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card v-for="material in filteredMaterials" :key="material.id">
                <ion-card-header>
                    <ion-card-title>{{ material.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>{{ material.description }}</p>
                    <ion-button :href="material.link" target="_blank">View Material</ion-button>
                </ion-card-content>
            </ion-card>
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
    ionSearchbar,
    ionCardHeader,
    ionCardTitle,
} from '@ionic/vue';

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
        IonButtons,
        ionSearchbar,
        ionCardHeader,
        ionCardTitle,
        ioncard,
        ionCardContent
    },
    name: 'StudyMaterial',
    data() {
        return {
            searchQuery: '',
            studyMaterials: [
                {
                    id: 1,
                    title: 'Internet of Things & Application',

                    link: 'https://darshan.ac.in/gtu-study-material/3160716-IOT-and-Applications'
                },
                {
                    id: 2,
                    title: 'Data Mining',

                    link: 'https://darshan.ac.in/gtu-study-material/3160714-Data-Mining'
                },
                {
                    id: 3,
                    title: 'Theory of Computation',

                    link: 'https://darshan.ac.in/gtu-study-material/3160704-Theory-of-Computation',
                },
                {
                    id: 4,
                    title: 'Microprocessor & Interfacing',

                    link: 'https://darshan.ac.in/gtu-study-material/3160712-Microprocessor-and-Interfacing'
                },
                {
                    id: 5,
                    title: 'Advanced Java Programming',

                    link: 'https://darshan.ac.in/gtu-study-material/3160707-Advance-java-Programming'
                },

                // Add more materials as needed
            ]
        };
    },
    computed: {
        filteredMaterials() {
            return this.studyMaterials.filter(material =>
                material.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
};
</script>

<style scoped>
ion-card {
    margin: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
    --color: black;
}

ion-card:hover {
    transform: translateY(-5px);

}

ion-card-header {
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
    padding: 10px 15px;
    border-bottom: 1px solid #dee2e6;
}

ion-card-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #343a40;
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
}

ion-card-content {
    padding: 15px;
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
}

ion-card-content p {
    margin: 0 0 10px;
    color: #6c757d;
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
}

ion-button {
    --background: rgb(16, 69, 86);
    --background: rgb(16, 69, 86);
    --border-radius: 5px;
}

ion-toolbar {
    --background: linear-gradient(to bottom right, rgb(182, 182, 209), rgb(128, 207, 233));
    ;
    --color: #000000;
}

ion-title {
    font-size: 1.5em;
    font-weight: bold;
}

ion-header {
    --background: #007bff;
    --color: #fff;
}

ion-content {
    --background: rgb(16, 69, 86);
}

ion-searchbar {
    --color: rgb(255, 255, 255);
    --background: rgb(16, 69, 86);
}
</style>