import { createContext, useState } from "react";
import { Text1 } from "../constants";

interface SnackBarContextType {
  snackmessage: string;
  setSnackMessage: React.Dispatch<React.SetStateAction<string>>;
  snackvisible: Boolean;
  setSnackVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SnackBarContext = createContext<SnackBarContextType>({
  snackmessage: "",
  setSnackMessage: () => {},
  snackvisible: false,
  setSnackVisible: () => {},
});

const SnackBarContextProvider = ({ children }: any) => {
  const [snackmessage, setSnackMessage] = useState(Text1);
  const [snackvisible, setSnackVisible] = useState(false);
  return (
    <SnackBarContext.Provider
      value={{ snackvisible, setSnackVisible, snackmessage, setSnackMessage }}
    >
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
