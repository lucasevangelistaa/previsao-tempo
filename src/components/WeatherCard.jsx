export default function weatherCard({ data }) {
  const localTime = new Date(
    new Date().getTime() +
      new Date().getTimezoneOffset() * 60000 +
      data.timezone * 1000
  );
  const localTimeString = localTime.toLocaleTimeString("pt-BR", {
    weekday: "long", // nome do dia da semana
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-sm mx-auto mt-6 w-full">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-700 font-semibold">
        {data.name}, {data.sys.country}
      </p>
      <p className="text-gray-500 mb-4">Data e hora local: {localTimeString}</p>
      <p className="text-gray-600 mb-4">
        {data.weather[0]?.description || "Descrição Indisponível!"}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Ìcone do Tempo"
        className="mx-auto"
      />
      <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
      <p className="text-gray-500 mt-2">Umidade: {data.main.humidity}%</p>
      <p className="text-gray-500">Vento: {data.wind.speed} m/s</p>
    </div>
  );
}
