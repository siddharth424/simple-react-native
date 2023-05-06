# React Native Balloon Inflation App

This is a simple React Native app that allows the user to inflate and deflate a balloon by clicking a button. The app also includes a form page that allows the user to enter their name and email and submit the data to an API.

## Getting Started

1.  Clone the repository to your local machine.
2.  Open the project in your preferred code editor.
3.  Install the necessary dependencies by running `npm install` in your terminal.
4.  Start the app by running `npm start` in your terminal.

## Usage

### Balloon Page

1.  Click the "Inflate" button to inflate the balloon.
2.  Click the "Deflate" button to deflate the balloon.
3.  The balloon will retain its inflation status even if you navigate away from the page. You can inflate or deflate the balloon as many times as you like.

### Form Page

1.  Enter your name and email in the form fields.
2.  Click the "Submit" button to submit the data to the API.
3.  If the submission is successful, a message will be displayed confirming that your data has been submitted.

## Screenshots



## API

The app calls a basic API that logs the data sent from the form. The API endpoint used in this app is [https://webhook.site](https://webhook.site/), which provides a temporary endpoint for testing purposes. If you wish to use a different endpoint or implement your own API, simply modify the `createUser` function in `api.js`.

## Dependencies

-   React Native
-   React Navigation
-   Axios

