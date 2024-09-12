import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Gabriel Mattesich
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Software Engineer | Córdoba, Argentina
        </p>

        <section className="mb-8 text-center">
          {/* Estadísticas de GitHub */}
          {/* Contribuciones del calendario */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            GitHub Contributions
          </h2>
          <GitHubCalendar
            username="gabrielmattesich"
          />
        </section>

        {/* Resto del contenido (CV, experiencia, etc.) */}
        {/* ... */}
      </div>
    </div>
  );
}
