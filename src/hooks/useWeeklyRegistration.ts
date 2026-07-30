import { useState, useEffect } from "react";
import { getRegistrationState, RegistrationState } from "@/utils/registration";

export function useWeeklyRegistration(): RegistrationState {
  const [regState, setRegState] = useState<RegistrationState>(() =>
    getRegistrationState(new Date()),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRegState(getRegistrationState(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return regState;
}
