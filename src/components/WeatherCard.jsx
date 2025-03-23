export default function weatherCard({ data }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-sm mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p className="text-gray-600 mb-4">{data.weather[0]?.description || "Descrição Indisponível!"}</p>
            <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Ìcone do Tempo"
            className="mx-auto"
             />
             <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
             <p className="text-gray-500 mt-2">Umidade: {data.main.humidity}%</p>
             <p className="text-gray-500">Vento: {data.wind.speed} m/s</p>
        </div>
    )
}