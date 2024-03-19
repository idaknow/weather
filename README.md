# Welcome to Ida's weather application

Requirements: [REQUIREMENTS.md](./REQUIREMENTS.md)

## Development

To run this code locally:

1. Clone this repository `git clone git@github.com:idaknow/weather.git` or via HTTPs. Note, to clone via SSH you need to have local keys generated. See https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent for more information.
2. Create a weather api account by following the steps at https://home.openweathermap.org/users/sign_up
3. Retrieve or generate an api key: https://home.openweathermap.org/api_keys. Note, if you do not want to use the default API key from here, if you generate a new API key it can take up to 2 hours to register. Code this value.
4. Open this repository `cd weather`.
5. Open the backend: `cd server`. Install dependencies: `npm install`. Duplicate the `.env.example` file and rename it to `.env`. Paste the API Key from Step 3 as the value. Run the backend: `npm run dev`.
6. In a new tab, start the frontend: `cd client` & `npm install` & `npm run dev`.
7. Navigate to `localhost:3000/` to view the weather :~)

If you have any issues with installation, please do not hesitate to contact me via e-mail.
