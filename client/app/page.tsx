"use client"; // current bug: https://github.com/nextui-org/nextui/issues/1403#issuecomment-1678863519

import { Card, CardContent } from "@/components/ui/card";
import { ComboBox } from "@/components/ui/combo-box";
import { useState } from "react";

import { WeatherContent } from "./components/weather-content";
import { locations, weatherToIcon } from "./constants/locations";
import { WeatherData } from "./constants/types";
import { getCurrentWeather } from "./weather-api";

export default function Home() {
  const [locationName, setLocationName] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clearData = () => {
    setLocationName(null);
    setWeatherData(null);
    setIsError(false);
  };

  // call API and render changes to UI
  const onSelectionChange = (
    key: string | number | null,
    useCache: boolean = true
  ) => {
    setIsError(false);
    setIsLoading(true);

    const location = locations.find((loc) => loc.value === key);
    if (!location) {
      clearData();
      return;
    }

    getCurrentWeather(location.lon, location.lat, useCache)
      .then((response: any) => {
        // Future work: type the response!
        if (response.cod !== 200 || !response.main) {
          setIsError(true);
          return;
        }

        const iconName = response.weather[0].main as keyof typeof weatherToIcon;
        setLocationName(location.label);
        setWeatherData({
          icon: weatherToIcon[iconName],
          temperature: response.main.temp,
        });
      })
      .catch(() => clearData()) // note: no real error handling, usually print a generic message to page
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <div className="mx-10">
        <h1 className="text-3xl font-italic justify-center flex my-10">
          Your daily weather scoop for...
          <ComboBox
            className="ml-10"
            placeholder="Select a location"
            emptyMessage="No location selected."
            items={locations.map((loc) => ({
              value: loc.value,
              label: loc.label,
            }))}
            onSelectionChanged={onSelectionChange}
          />
        </h1>

        <Card className="mb-10">
          <CardContent className="mt-5">
            <WeatherContent
              isError={isError}
              locationName={locationName}
              weatherData={weatherData}
              isLoading={isLoading}
              onRefresh={() => onSelectionChange(locationName, false)}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
