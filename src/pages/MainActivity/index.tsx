import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {get} from axios;

// import { Container } from './styles';

const MainActivity: React.FC = () => {
  const [latLong, setLatLong] = useState([0, 0]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return <View />;
};

export default MainActivity;

/**

 api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=df3f4d252c1ce4ba92b594deb9410dcf

 Response:

 {"coord": { "lon": 139,"lat": 35},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.52,
    "feels_like": 278.99,
    "temp_min": 280.15,
    "temp_max": 283.71,
    "pressure": 1016,
    "humidity": 93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  "clouds": {
    "all": 2
  },
  "dt": 1560350192,
  "sys": {
    "type": 3,
    "id": 2019346,
    "message": 0.0065,
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  },
  "timezone": 32400,
  "id": 1851632,
  "name": "Shuzenji",
  "cod": 200
}
 */
