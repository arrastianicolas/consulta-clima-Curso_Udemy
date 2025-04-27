import { formatTemperature } from "../../helpers";
import { WeatherType } from "../../hooks/useWeather";
import styles from "./WeatherDetail.module.css";

type WeatherDetailProps = {
  weather: WeatherType;
};

export const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name}</h2>
      <p className={styles.current}>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />{" "}
        {formatTemperature(weather.main.temp)}&deg;C
      </p>
      <div className={styles.temperatures}>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  );
};
