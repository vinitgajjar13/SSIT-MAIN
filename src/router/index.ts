import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import WelcomePage from '../views/Auth/WelcomePage.vue';
//import LoginPage from '../views/Auth/LoginPage.vue';
import Signup from '@/views/Signup.vue';
//import Loginpage1 from '@/views/Loginpage1.vue';//
import LoginPage from '../views/Auth/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: WelcomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '/tabs/',
        redirect: '/tabs/tab2'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'views/AcademicCalendar',
        component: () => import('@/views/AcademicCalendar.vue')
      },
      {
        path: 'views/Exam',
        component: () => import('@/views/Exam.vue')
      },
      {
        path: 'views/Myprofile',
        component: () => import('@/views/Myprofile.vue')
      },
      {
        path: 'views/Mycourse',
        component: () => import('@/views/Mycourse.vue')
      },
      {
        path: 'views/Fees',
        component: () => import('@/views/Fees.vue')
      },
      {
        path: 'views/timetable',
        component: () => import('@/views/timetable1.vue')
      },
      {
        path: 'views/Attendance',
        component: () => import('@/views/Attendance.vue')
      },
      {
        path: 'views/result',
        component: () => import('@/views/result.vue')
      },
      {
        path: 'views/Announce',
        component: () => import('@/views/Announce.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
