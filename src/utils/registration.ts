export type RegistrationState = {
  isLive: boolean;
  statusText: string;
  buttonLabel: string;
  buttonEnabled: boolean;
  tooltip?: string;
  closesInText?: string;
};

/**
 * Calculates current registration state from browser's local date and time.
 * Registration Schedule:
 * Every Monday:
 *   09:00 PM (21:00) -> Registration Opens (LIVE)
 *   10:00 PM (22:00) -> Registration Closes (COMING_SOON)
 */
export function getRegistrationState(nowDate: Date = new Date()): RegistrationState {
  const dayOfWeek = nowDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hours = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();

  // Registration is LIVE on Monday (1) between 09:00 PM (21:00) and 10:00 PM (22:00) local time
  const isLive = dayOfWeek === 1 && hours === 21;

  if (isLive) {
    const secondsRemaining = (59 - minutes) * 60 + (60 - seconds);
    const m = Math.floor(secondsRemaining / 60);
    const s = secondsRemaining % 60;
    const pad = (n: number) => String(n).padStart(2, "0");
    const closesInText = `${m}m ${pad(s)}s`;

    return {
      isLive: true,
      statusText: `🟢 Registration Live • Closes in ${closesInText}`,
      closesInText,
      buttonLabel: "Register Now",
      buttonEnabled: true,
    };
  }

  return {
    isLive: false,
    statusText: "Coming Soon • Next Monday",
    buttonLabel: "Register Now",
    buttonEnabled: false,
    tooltip: "Registration opens next Monday.",
  };
}
