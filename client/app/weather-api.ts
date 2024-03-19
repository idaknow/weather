const units = "metric"; // hardcoded for simplicity

export const getCurrentWeather = async (
  lon: number,
  lat: number,
  useCache: boolean
) => {
  const result = await fetch(
    `/api/weather?lon=${lon}&lat=${lat}&useCache=${useCache}`
  );
  const resultJson = await result.json();
  return resultJson;
};
