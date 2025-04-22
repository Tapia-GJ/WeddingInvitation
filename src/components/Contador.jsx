import { useEffect, useState } from "react";

export default function Countdown({ date }) {
  console.log(date);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!date) return;

    const targetDate = new Date(date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <CountdownItem value={timeLeft.days} label="Días" color="pink" />
      <CountdownItem value={timeLeft.hours} label="Horas" color="blue" />
      <CountdownItem value={timeLeft.minutes} label="Minutos" color="pink" />
      <CountdownItem value={timeLeft.seconds} label="Segundos" color="blue" />
    </div>
  );
}

function CountdownItem({ value, label, color }) {
  const bgColor = color === "pink" ? "bg-pink-100" : "bg-blue-100";
  const textColor = color === "pink" ? "text-pink-500" : "text-blue-500";
  const borderColor = color === "pink" ? "border-pink-200" : "border-blue-200";

  return (
    <div className="text-center">
      <div
        className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-lg ${bgColor} border ${borderColor}`}
      >
        <span className={`text-4xl md:text-5xl font-bold ${textColor}`}>
          {value}
        </span>
      </div>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </div>
  );
}
