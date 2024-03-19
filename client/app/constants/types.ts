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
