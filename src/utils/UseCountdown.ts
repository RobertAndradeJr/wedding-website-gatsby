import { useEffect, useState } from 'react';

interface HumanReadableTime {
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
}

const getDays = (timeRemaining: number): number =>
  Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const getHours = (timeRemaining: number): number =>
  Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const getMinutes = (timeRemaining: number): number =>
  Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const getSeconds = (timeRemaining: number): number =>
  Math.floor((timeRemaining % (1000 * 60)) / 1000);

const UseCountdown = (
  date: string,
  options: Record<string, number> = {}
): HumanReadableTime => {
  const { intervalTime = 1000 } = options;
  const [timeRemaining, setTimeRemaining] = useState(
    () => Number(new Date(date)) - Number(new Date(Date.now()))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(current => {
        if (current <= 0) {
          clearInterval(interval);

          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);

    return (): void => clearInterval(interval);
  }, [intervalTime]);

  return {
    Days: getDays(timeRemaining),
    Hours: getHours(timeRemaining),
    Minutes: getMinutes(timeRemaining),
    Seconds: getSeconds(timeRemaining)
  };
};

export default UseCountdown;
