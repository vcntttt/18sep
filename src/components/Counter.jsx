import React, { useEffect, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState('');

  useEffect(() => {
    const proximo18 = calcularProximo18();

    const actualizar = () => {
      const hoy = new Date();
      const diff = proximo18 - hoy;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);

      setContador(`${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`);
    };

    const intervalId = setInterval(actualizar, 1000);
    actualizar();

    return () => clearInterval(intervalId);
  }, []);

  const calcularProximo18 = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    let proximo18 = new Date(año, 8, 18);

    if (hoy > proximo18) {
      proximo18.setFullYear(año + 1);
    }

    return proximo18;
  };

  return (
    <p id="contador" className="text-center text-white">
      {contador}
    </p>
  );
}

export default Contador;
