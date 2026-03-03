# SSIT

This is an [Ionic Vue](https://ionicframework.com/docs/vue/overview) application with Capacitor for building mobile experiences.

## Features & Modules

Based on the project structure, this application provides various features catering to academic scenarios:

- **Authentication Module**: Welcome page, Login, and Signup.
- **Academic Dashboard/Tabs**: A bottom-tab navigation containing different modules.
- **Key Features**:
  - `AcademicCalendar`: Academic scheduling.
  - `Announce`: Important announcements.
  - `Attendance`: Tracking student attendance.
  - `Exam` & `Result`: Examination schedules and resultant marks.
  - `Fees`: Fee structures and payments.
  - `Mycourse` & `Myprofile`: Student profile and enrolled courses.
  - `hallticket` & `timetable`: Examination hall tickets and general timetables.
  - `Settingpage`: Application settings.

## Project Structure

- `src/views`: Contains all the Vue templates/pages.
- `src/router`: Contains the Vue Router configuration integrating with Ionic's router.
- `src/components`: Reusable Vue components.
- `src/theme`: Ionic theme variables (CSS).

## Get Started

### Prerequisites

Ensure you have Node.js and npm installed.

### Setup

Install the project dependencies using npm:

```bash
npm install
```

### Running Locally

To run the development server (using Vite):

```bash
npm run dev
```

### Build for Production

To create a production build of the web app:

```bash
npm run build
```

This project uses Vue Type-Check (`vue-tsc`) followed by Vite's build.

### Testing

You can run the existing tests with:

- **Unit Tests** (Vitest):
  ```bash
  npm run test:unit
  ```
- **E2E Tests** (Cypress):
  ```bash
  npm run test:e2e
  ```

### Linting

To run the linter recursively within the project:

```bash
npm run lint
```

## Capacitor Build & Sync

Since this app uses Capacitor, you can sync your web code to your native projects:

```bash
npx cap sync
```

Or open the Android project using:

```bash
npx cap open android
```

(Note: Ensure you have built your project using `npm run build` prior to syncing).
