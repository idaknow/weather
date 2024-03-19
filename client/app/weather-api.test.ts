import "@testing-library/jest-dom";
import { getCurrentWeather } from "./weather-api";

describe("weather-api", () => {
  const fetchMock = jest
    .spyOn(global, "fetch")
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve([]) } as any)
    );

  describe("getCurrentWeather", () => {
    it("calls the correct api on enter", async () => {
      const json = await getCurrentWeather(2, 3, false);

      expect(fetchMock).toHaveBeenCalledWith(
        "/api/weather?lon=2&lat=3&useCache=false"
      );

      expect(Array.isArray(json)).toEqual(true);
      expect(json.length).toEqual(0);
    });
  });
});
