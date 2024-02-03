# Weather App 

This is a weather application built with React, TailwindCSS and DaisyUI that allows you to search for current weather and 5 day forecast in your desired city.

## Website
The React Weather App is deployed via Vercel:
Vue Weather App - Netlify

## Features

- See current temperature, weather condition, highest temp, lowest temp etc for a location
- View 5 day forecast with weather details for each day
- Switch temperature units between Celsius and Fahrenheit  
- Light and dark mode
- Responsive UI using Tailwind and DaisyUI
  
## Running Locally

### Cloning the repo
>`git clone https://github.com/yourusername/weather-app.git`
>`cd weather-app`

### Change The API KEY
>In the `constants.js` folder change the API_KEY to your own KEY.

### Installing dependencies
`npm install`

### Starting the dev server
`npm start`

- This will install dependencies and start the app on http://localhost:3000
> **Note**
> If port 3000 is in use, it will use next available port

### Build for production
`npm run build`
This will generate a production build in `build` folder.

### Running tests
`npm test`
Runs all test cases.

> The project needs to be cloned locally before running above commands. Alternatively, you can fork the repo and clone your fork.

## Usage
- Enter name of your desired city to fetch weather

### Changing temperature units 

- Default is Celsius
- Toggle button in navbar to switch to Fahrenheit 

### Dark mode

- Enable dark mode using theme toggle on navbar
- Styling done using DaisyUI

## Built with

- [React](https://reactjs.org/) - Frontend framework 
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Daisy UI](https://daisyui.com/) - Tailwind CSS component library
- [Weather API](https://(https://www.weatherapi.com/docs/) - API for weather data

Let me know if you would like any changes or have additional sections to add!
