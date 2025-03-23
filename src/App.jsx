import { useState } from "react";
import { getWeatherData } from "./services/api.js";
import { FaSpinner } from "react-icons/fa";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (cidade) => {
    try {
      setError(null);
      setLoading(true);
      const data = await getWeatherData(cidade);
      setWeather(data);
    } catch (err) {
      setError("Cidade não encontrada!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-start pt-10">
      <h1 className="text-white text-4xl font-bold mb-6">Previsão do Tempo</h1>
      <SearchBar onSearch={handleSearch}/>
      {error && <p className="text-red-600 mt-4 font-bold">{error}</p>}
      {loading && (<div className="mt-4">
        <FaSpinner className="animate-spin text-white" size={30}/>
      </div>)}
      {weather && <WeatherCard data={weather} />}
    </div>
  )
}

export default App;