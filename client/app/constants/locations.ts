import {
  faCloud,
  faCloudRain,
  faSmog,
  faSnowflake,
  faSun,
  faThunderstorm,
  faTornado,
} from "@fortawesome/free-solid-svg-icons";

import { Location } from "./types";

// note: hardcoded for simplicity
// Future work: could replace this with an API or could have a list of names
// and make a request to geography api to get long / latitude for each.
export const locations: Location[] = [
  {
    label: "Vancouver",
    value: "vancouver",
    lon: -123.113952,
    lat: 49.2608724,
  },
  {
    label: "Toronto",
    value: "toronto",
    lon: -79.3839347,
    lat: 43.6534817,
  },
  {
    label: "Calgary",
    value: "calgary",
    lon: -114.065465,
    lat: 51.0460954,
  },
];

export const weatherToIcon = {
  Thunderstorm: faThunderstorm,
  Drizzle: faCloudRain,
  Rain: faCloudRain,
  Snow: faSnowflake,
  Clear: faSun,
  Clouds: faCloud,
  Mist: faSmog,
  Smoke: faSmog,
  Haze: faSmog,
  Dust: faSmog,
  Fog: faSmog,
  Sand: faSmog,
  Ash: faSmog,
  Squall: faSmog,
  Tornado: faTornado,
};
