# Code Server (VS Code Clone)

This is a React-based clone of the Visual Studio Code interface, designed to be mobile-responsive and buildable as an Android APK.

## Project Structure

- `src/components`: UI components like TitleBar, ActivityBar, StatusBar.
- `src/pages`: Main content pages (WelcomePage).
- `src/styles`: Global CSS variables and styles.

## How to Run Locally (Web)

1.  Navigate to the project directory:
    ```bash
    cd code-server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at the URL shown (usually `http://localhost:5173`).

## How to Build the Android APK

This project is configured with **Capacitor** to generate a native Android app.

### Prerequisites (On your local machine)

*   **Node.js** and **npm** installed.
*   **Android Studio** installed.
*   **Java (JDK 17)** installed.

### Steps to Build

1.  **Build the Web Assets:**
    Run this command to compile the React app into the `dist` folder:
    ```bash
    npm run build
    ```

2.  **Add the Android Platform:**
    (First time only)
    ```bash
    npx cap add android
    ```

3.  **Sync Web Assets to Android Project:**
    This copies the built web assets to the native Android project folder:
    ```bash
    npx cap sync
    ```

4.  **Open in Android Studio:**
    This command opens the `android` folder in Android Studio:
    ```bash
    npx cap open android
    ```

5.  **Build the APK:**
    *   In Android Studio, wait for Gradle sync to finish.
    *   Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
    *   Once built, Android Studio will notify you. Click "Locate" to find your `.apk` file.
    *   Transfer this `.apk` to your phone to test!

## Features

*   **Responsive Design:** Works on desktop and adapts to mobile screens.
*   **VS Code UI:** Faithful recreation of the Dark Modern theme, Welcome Page, Activity Bar, and Status Bar.
