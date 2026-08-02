import { useState, useEffect } from "react";
import {
  getRegistrationState,
  RegistrationSchedule,
  RegistrationState,
} from "@/utils/registration";

export function useWeeklyRegistration(schedule?: RegistrationSchedule): RegistrationState {
  const [regState, setRegState] = useState<RegistrationState>(() =>
    getRegistrationState(schedule, new Date()),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRegState(getRegistrationState(schedule, new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, [schedule]);

  return regState;
}
