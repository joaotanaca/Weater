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
  permissions: string;
}

const LocationContext = createContext({} as LocationI);

export const useLocation = (): LocationI => useContext(LocationContext);

export const LocationProvider = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  const [location, setLocation] = useState({} as GeolocationCoordinates);
  const [permissions, setPermissions] = useState<string>('');
  const successPermission = () =>
    navigator.geolocation.getCurrentPosition(position =>
      setLocation(position.coords),
    );
  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
      switch (state) {
        case 'granted':
          successPermission();
          setPermissions('permitido');
          break;
        case 'prompt':
          successPermission();
          setPermissions('permitido');
          break;
        case 'denied':
          setPermissions('negado');
          break;
      }
    });
  }, []);
  return createElement(
    LocationContext.Provider,
    {
      value: { location, permissions },
    },
    children,
  );
};
