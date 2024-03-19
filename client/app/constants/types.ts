import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// generic, used by the shadcn/ui combobox
export type Item = {
  label: string;
  value: string;
};

export type Location = Item & {
  lon: number;
  lat: number;
};

export type WeatherData = {
  icon: IconDefinition;
  temperature: number;
};

type WeatherIconResponse = {
  main: string;
};

type MainWeatherResponse = {
  temp: number;
};

// this is the response object returned from the current API
// I have stripped the response to only the data that I am interested in for simplicity
export type WeatherResponse = {
  cod: number; // look for 200 code
  weather: WeatherIconResponse[];
  main: MainWeatherResponse | null;
};
