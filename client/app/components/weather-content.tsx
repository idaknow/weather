import { Button } from "@/components/ui/button";
import { faRefresh } from "@fortawesome/free-solid-svg-icons/faRefresh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { WeatherData } from "../constants/types";

/*
This file contains what is shown in the card below. The options are:
1. "No location selected." -> if the user has not selected a value from the drop-down
2. "There was an error loading weather data. Please try again."
-> If the user selected a value from the drop-down, but there was an issue requesting to the API.
3. The location, weather icon and temperature. This is just a POC that we are connecting to this service.
As noted below, this could easily be expanded to more information.
*/

type WeatherContentProps = {
  isError: boolean;
  locationName: string | null;
  weatherData: WeatherData | null;
  isLoading: boolean;
  onRefresh: () => void;
};

export const WeatherContent = ({
  isError,
  locationName,
  weatherData,
  isLoading,
  onRefresh,
}: WeatherContentProps) => {
  if (isError) {
    return <p>There was an error loading weather data. Please try again.</p>;
  }

  if (!locationName || !weatherData) {
    return <p>No location selected.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // note: just showing basic information: location, icon and temperature
  // Future work: expand this to utilise more of the weather api
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-semibold scroll-m-20 pb-2 tracking-tight first:mt-0">
          Current weather in ✨{locationName}✨
        </h2>

        <Button className="h-8 w-6" variant="ghost" onClick={onRefresh}>
          <FontAwesomeIcon icon={faRefresh} />
        </Button>
      </div>

      <div className="flex justify-center items-center m-5">
        <FontAwesomeIcon className="h-20" icon={weatherData.icon} />
      </div>

      <p className="flex justify-center">
        Temperature: {weatherData.temperature} degrees celsius
      </p>
    </>
  );
};
