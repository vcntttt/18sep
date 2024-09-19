import { useEffect, useState, useMemo } from "react";
import MotionNumber from "motion-number";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

function Card({ children, color, time }) {
  return (
    <div
      className={`rounded-lg p-2 flex flex-col items-center justify-center`}
    >
      <p className={`flex flex-col items-center gap-x-2 px-4 py-2 rounded-sm ${color}`}>
        <span className="text-xl">{children}</span>
        <span>{time}</span>
      </p>
    </div>
  );
}

export default function Contador() {
  const proximo18 = useMemo(() => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    let proximo18 = new Date(año, 8, 18);

    if (hoy > proximo18) {
      proximo18.setFullYear(año + 1);
    }

    return proximo18;
  }, []);

  const calcularDiferencia = () => {
    const currentDate = new Date();
    return {
      days: differenceInDays(proximo18, currentDate),
      hours: differenceInHours(proximo18, currentDate) % 24,
      minutes: differenceInMinutes(proximo18, currentDate) % 60,
      seconds: differenceInSeconds(proximo18, currentDate) % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcularDiferencia());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calcularDiferencia());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [proximo18]);

  return (
    <div className="flex">
      <Card color={"bg-white text-black"} time={"días"}>
        <MotionNumber value={timeLeft.days} locales="es-CL" />
      </Card>
      <Card color={"bg-blue-500 text-white"} time={"horas"}>
        <MotionNumber value={timeLeft.hours} locales="es-CL" />
      </Card>
      <Card color={"bg-white text-black"} time={"minutos"}>
        <MotionNumber value={timeLeft.minutes} locales="es-CL" />
      </Card>
      <Card color={"bg-red-500 text-white"} time={"segundos"}>
        <MotionNumber value={timeLeft.seconds} locales="es-CL" />
      </Card>
    </div>
  );
}
