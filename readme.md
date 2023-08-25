# Appium Test Automation Project

This is a Appium test automation project. This project demonstrates how to set up and run automated tests for Android using Appium and WebDriverIO.

## Prerequisites

Before you begin setting up and running your Appium test automation project, you need to ensure that you have the following prerequisites in place:

1. **Node.js and npm:**
   - Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official [Node.js website](https://nodejs.org/).

2. **Android SDK and Emulator:**
   - Download and install the Android SDK (Software Development Kit) from the [Android Developer website](https://developer.android.com/studio).
   - Set up an Android emulator or have a physical Android device available for running tests. You can create emulators using Android Studio's AVD Manager.

3. **Appium Installation:**
   - Install Appium globally using npm:
     ```bash
     npm install -g appium
     ```

4. **Appium Doctor:**
   - Install Appium Doctor globally using npm. Appium Doctor helps you identify and fix issues with your Appium setup:
     ```bash
     npm install -g appium-doctor
     ```

5. **Java Development Kit (JDK):**
   - Appium requires the Java Development Kit (JDK) to be installed on your machine. Download and install the JDK from the [official Oracle website](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) or use OpenJDK.

6. **Environment Variables:**
   - Make sure you have configured the necessary environment variables:
     - `JAVA_HOME`: Points to the directory where you have installed the JDK.
     - `ANDROID_HOME`: Points to the directory where you have installed the Android SDK.

7. **Android Virtual Device (AVD):**
   - If you're using an emulator for testing, create an Android Virtual Device (AVD) using the AVD Manager in Android Studio. This is the virtual device that will be used by Appium for testing.

## Setup

1. **Clone the Repository:**
   - Clone your test automation project repository to your local machine using Git:
     ```bash
     git clone https://github.com/jamil2595/home_task
     cd home-task
     ```

2. **Install Dependencies:**
   - Navigate to the project directory and install the project's dependencies using npm:
     ```bash
     npm install
     ```

3. **Appium Doctor Check:**
   - Run Appium Doctor to ensure that your Appium setup is correct and all dependencies are met:
     ```bash
     appium-doctor
     ```

## Running Tests

Replace "test.apk" file with actual apk file. And make sure you have running emulator and proper the desired capabilites in the config file based on emulator specifications.
To run the test suite, you can use the following command:

` ```
     npx wdio --spec tests/android/<test-file-name>.spec.js
     ```


## Generating report file

If you haven't installed Allure CLI, you can do so using the following:

 ```
     npm install -g allure-commandline
     ```

After running test you can generate a report via Allure by running: 

 ```
     allure generate allure-results && allure open
     ```