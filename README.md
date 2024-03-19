# Welcome to Ida's weather application

Requirements: [REQUIREMENTS.md](./REQUIREMENTS.md)

Frontend (/client) deployment: https://weather-client-flame.vercel.app/

Backend (/server) deployment: https://weather-server-indol.vercel.app/

- Example: `https://weather-server-indol.vercel.app/weather?lon=-123.113952&lat=49.260872&units=metric&useCache=false`

## Development

### To run this code locally:

1. Clone this repository `git clone git@github.com:idaknow/weather.git` or via HTTPs. Note, to clone via SSH you need to have local keys generated. See https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent for more information.
2. Create a weather api account by following the steps at https://home.openweathermap.org/users/sign_up
3. Retrieve or generate an api key: https://home.openweathermap.org/api_keys. Note, if you do not want to use the default API key from here, if you generate a new API key it can take up to 2 hours to register. Copy this value.
4. Open this repo: `cd weather`.
5. Open the backend: `cd server`. Install dependencies: `npm install`. Duplicate the `.env.example` file and rename it to `.env`. Paste the API Key from Step 3 as the value. Run the backend: `npm run dev`.
6. In a new tab, open the frontend: `cd client`. Duplicate the `.env.local.example` file and rename it to `.env.local`. Feel free to modify the host or port in this file. Install dependencies: `npm install`. Run the application: `npm run dev`.
7. Navigate to `localhost:3000/` to view the weather :~)

If you have any issues with installation, please do not hesitate to contact me via e-mail.

### Design decisions

Assumptions:

- hardcoded 3 cities for simplicity
- only show city, weather icon and temperature for simplicity
- units are hardcoded to metric, as that is my default

Things that were not implemented because of time constraints:

- redux / react context api - passed the state to `WeatherContext` using props
- loading animation - just used a `<p>Loading...</p>` which is not very smooth. If I had more time I would have used `Suspense` with a `fallback` to a loading `Skeleton`.
- variety of error handling - returned a generic response for any non-200 status code from the backend.
- no error handling on frontend with combobox. Assumed it handled this, but this could be added.
- refresh button - but I did implement a use-cache flag that you can hook into in the server.

## How I would productionise this

**Deployment Strategies: Describe how you would prepare and deploy the Weather Dashboard application for production. Consider the steps you would take to ensure the application is secure, performs well under varying loads, and provides a consistent user experience across different devices and networks.**

I would first implement the following:

- add more tests. I've only added one simple test to `getCurrentWeather`. I would add tests for edge cases. and also add some ui tests, using something like cypress.
- implement loading animation
- implement that an error occurs if we've been waiting a long time for the api
- add a specific error for invalid input from the front end

I would consider creating a production-like environment to test the deployments on. For security, I would consider adding a firewall other requests to the api / `server`. I would test the application on a variety of devices and browsers, utilising physical devices and something like BrowserStack. I would try to get multiple devices connecting to the production-like environment and see how it performs.

**Scalability Considerations: The Weather Dashboard currently fetches data for a limited number of cities and serves a relatively small user base. How would you adapt the application architecture and infrastructure to support a significant increase in both the number of cities available and the volume of concurrent users?**

To support more cities I would add another endpoint to my api to get the list of locations, instead of hardcoding it on the frontend. I would here then get a list of locations, either from another api or manually hardcode them. Then for each location I would ping the geography api to get the longitude and latitudes for each. I would cache these values so that you don't need to get them from the backend every time. I would only refresh this list when the browser refreshes.

To support more users, I would add a load-balancer between the frontend and backend and deploy the `server` code into its own environments using docker or kubernetes. This would enable me to spin up multiple apis to serve the clients. This way the api is not a bottleneck.

**Monitoring and Maintenance: Once the application is live, monitoring its health and performance becomes crucial to ensure ongoing reliability and user satisfaction. Describe the monitoring tools and practices you would implement to detect and address issues proactively. Additionally, discuss your approach to application maintenance, including how you would manage updates to dependencies, the application itself, and the handling of potential security vulnerabilities.**

If I deployed this application using something like AWS, I know that you can easily monitor the node health there. We could add cloudwatch alerts if a system goes down. I would add log messages using something like Sentry or DataDog to capture errors produced by clients, and general information that could be helpful for debugging issues. This could also improve as issues arise and get solved, we can add more log messages. Using something like DataDog allows you to set alerts if there's any errors thrown, and I would prioritise investigating these to determine whether they are a real issue.

I would get tests to automatically be run as part of every time there is a push to a branch. I would add rules so that you cannot push to the main branch without having the code reviewed and all tests passing.

I would ensure that all code is deployed to a production-like environment and smoke-tested prior to deployment to production.

I would use a system that keeps track of dependencies and whether there are any with known security vulnerabilities. I know this can be configured in github and managed by another tool, I just cannot remember the name of it.
