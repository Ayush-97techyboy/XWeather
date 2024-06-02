import { Card, CardContent, Typography } from "@mui/material";
import styles from "../Weather/XWeather.module.css";

const WeatherCard = ({ weatherData }) => {
  const { current } = weatherData;

  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className={styles.weatherCard}>
      <div>
        <Card
          style={{
            backgroundColor: randomColor,
            // margin: "70px",
            padding: "1rem",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              style={{ color: "black", textAlign: "center" }}
            >
              Temperature:
              <div>{current.temp_c}°C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card
          style={{
            backgroundColor: randomColor,
            margin: "70px",
            padding: "1rem",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              style={{ color: "black", textAlign: "center" }}
            >
              Humidity:
              <div>{current.humidity}%</div>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card
          style={{
            backgroundColor: randomColor,
            marginRight: "70px",
            padding: "1rem",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              style={{ color: "black", textAlign: "center" }}
            >
              Wind Speed:
              <div>{current.wind_kph} km/h</div>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card
          style={{
            backgroundColor: randomColor,
            // margin: "50px",
            padding: "1rem",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              style={{ color: "black", textAlign: "center" }}
            >
              Condition:
              <div>{current.condition.text}</div>
              <img
                src={current.condition.icon}
                alt={current.condition_text}
                style={{ marginLeft: "8px" }}
              />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherCard;
