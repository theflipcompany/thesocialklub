export type RegistrationSchedule = {
  dayOfWeek: number; // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  dayName: string;
  hour: number;
  displayTime: string;
};

export type RegistrationState = {
  isLive: boolean;
  statusText: string;
  buttonLabel: string;
  buttonEnabled: boolean;
  tooltip?: string;
  closesInText?: string;
};

/**
 * Helper to get date components specifically in India Standard Time (IST, Asia/Kolkata).
 */
function getISTComponents(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) {
    if (p.type !== "literal") {
      map[p.type] = p.value;
    }
  }

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const dayOfWeek = weekdayMap[map.weekday] ?? date.getDay();
  let hours = parseInt(map.hour, 10);
  if (hours === 24) hours = 0;
  const minutes = parseInt(map.minute, 10);
  const seconds = parseInt(map.second, 10);

  return { dayOfWeek, hours, minutes, seconds };
}

/**
 * Calculates current registration state from IST date and time.
 * Accepts an optional event-specific RegistrationSchedule.
 */
export function getRegistrationState(
  schedule?: RegistrationSchedule,
  nowDate: Date = new Date(),
): RegistrationState {
  const { dayOfWeek, hours, minutes, seconds } = getISTComponents(nowDate);

  const targetDay = schedule?.dayOfWeek ?? 3;
  const targetHour = schedule?.hour ?? 20;
  const targetDayName = schedule?.dayName ?? "Wednesday";
  const targetDisplayTime = schedule?.displayTime ?? "8:00 PM IST";

  // Registration is LIVE on target day during target hour in IST
  const isLive = dayOfWeek === targetDay && hours === targetHour;

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
    statusText: `COMING SOON - ${targetDayName} 8 PM`,
    buttonLabel: "Register Now",
    buttonEnabled: false,
    tooltip: `Registration opens next ${targetDayName} at ${targetDisplayTime}.`,
  };
}
