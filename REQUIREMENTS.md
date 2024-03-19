# Build a Weather Dashboard Application

## Overview

The goal is to develop a **Weather Dashboard application** using [Nextjs](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/) or any Tailwind design system. This application is designed to allow users to view current weather conditions in multiple cities. By leveraging the [OpenWeatherMap API](https://home.openweathermap.org/users/sign_up) (this offers a free API tier, or you can use any public weather API of your preference).

The application will fetch and display weather data in an accessible and user-friendly manner. This project is an opportunity to demonstrate proficiency in modern web development practices, including responsive design, state management, and API integration.

## Requirements

### Application

- **Framework:** Using Nextjs for this project to leverage TypeScript's static typing features alongside React's powerful UI capabilities, with many capable utilities for an application such as this.
- **State Management:** The use of React Context API, or Redux, or the like, is required for managing the application's state. This choice is to assess your ability to structure and manage complex application states, ensuring the application is both efficient and easy to maintain.
- **API Consumption:** Applicants must fetch weather data from the OpenWeatherMap API (or similar) for at least three cities. This should allow you to manage API key security and include simple caching to optimize response times. This requirement is designed to evaluate your skills in working with external APIs and handling data fetching, parsing, and state management, and security in a React application.
- **Search Functionality:** Implementing a search feature for users to find current weather conditions of a chosen city is crucial. It should include error handling for invalid city searches. This functionality will test your ability to implement user-driven interactions and robust error handling mechanisms.

### UI/UX

- **Responsive Design:** The application must leverage components from a Tailwind system (like shadcn/ui) being fully responsive, ensuring a seamless experience across both mobile and desktop devices. This requirement highlights the importance of modern web development skills in creating flexible and accessible user interfaces. [Fontawesome Weather Icons](https://fontawesome.com/icons/categories/weather) or the like could be leverages for the iconography.
- **Data Presentation:** Presenting the weather data in a clear, intuitive interface, including temperature, weather conditions, and icons, is essential. This will assess your ability to design and implement a user-friendly data visualization.
- **User Interaction:** Incorporate interactive elements, such as a refresh button and loading state animations. These features are crucial for enhancing the user experience and demonstrating your proficiency in creating dynamic and interactive web applications. Providing an auto-complete search for the three possible cities available to emphasize good UX would be ideal.

### Documentation and Code Quality

- **README:** A comprehensive README file with setup instructions is required. This should include steps to obtain an API key from OpenWeatherMap and configure it for the application. Clear documentation is vital for any project to ensure it can be easily set up and used by others.
- **Code Comments:** Commenting your code is necessary to explain your decision-making processes and the functionality of complex components. This practice is crucial for maintaining code quality and facilitating collaboration.
- **Testing:** Basic unit tests for components using Jest and React Testing Library must be included. Testing is a fundamental aspect of software development, ensuring your components work as expected and facilitating future maintenance.

## Evaluation Criteria

Your submission will be evaluated based on the code structure and quality, functionality of the specified features, design and user experience, efficiency of API integration, and the clarity and comprehensiveness of your documentation.

### Productization & Scalability Questions

In your email response, please provide 1-3 paragraph answers for the following questions on how an application like this would be use at a more enterprise level:

1. **Deployment Strategies:** Describe how you would prepare and deploy the Weather Dashboard application for production. Consider the steps you would take to ensure the application is secure, performs well under varying loads, and provides a consistent user experience across different devices and networks.
2. **Scalability Considerations:** The Weather Dashboard currently fetches data for a limited number of cities and serves a relatively small user base. How would you adapt the application architecture and infrastructure to support a significant increase in both the number of cities available and the volume of concurrent users?
3. **Monitoring and Maintenance:** Once the application is live, monitoring its health and performance becomes crucial to ensure ongoing reliability and user satisfaction. Describe the monitoring tools and practices you would implement to detect and address issues proactively. Additionally, discuss your approach to application maintenance, including how you would manage updates to dependencies, the application itself, and the handling of potential security vulnerabilities.

## Submission Guidelines

Provide an email response with the following details:

- A link to your **GitHub repository** with your project code.
- A demo URL to Vercel (or the like) show casing your application in the wild.
- Any necessary API keys (with instructions on how to replace them) or any local testing.
