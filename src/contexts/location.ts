/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  createElement,
} from 'react';

interface LocationI {
  location: GeolocationCoordinates;
}

const LocationContext = createContext({} as LocationI);

export const useLocation = (): LocationI => useContext(LocationContext);

export const LocationProvider = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  const [location, setLocation] = useState({} as GeolocationCoordinates);
  const [allowGeoRecall, setAllowGeoRecall] = useState(true);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successPermission, () => {
        if (allowGeoRecall) getLocation();
      });
    }
  }
  const successPermission = (position: GeolocationPosition) => {
    setLocation(position.coords);
    setAllowGeoRecall(false);
  };

  useEffect(() => {
    getLocation();
  }, []);
  return createElement(
    LocationContext.Provider,
    {
      value: { location },
    },
    children,
  );
};
