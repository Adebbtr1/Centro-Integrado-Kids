import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const disorders = [
  {
    title: 'Autismo',
    description:
      'O autismo é um transtorno do desenvolvimento que afeta a comunicação, comportamento e interação social...',
    image:
      'https://images.pexels.com/photos/8709147/pexels-photo-8709147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'TDAH',
    description:
      'O TDAH é caracterizado por dificuldades de atenção, impulsividade e hiperatividade...',
    image:
      'https://images.pexels.com/photos/8378737/pexels-photo-8378737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'TOD',
    description:
      'O TOD é um transtorno que envolve padrões de comportamento desafiador e oposição a autoridades...',
    image:
      'https://images.pexels.com/photos/8378752/pexels-photo-8378752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Deficiência Intelectual',
    description:
      'Caracteriza-se por limitações significativas no funcionamento intelectual e no comportamento adaptativo...',
    image:
      'https://images.pexels.com/photos/7352806/pexels-photo-7352806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Dislexia',
    description:
      'É uma dificuldade específica de aprendizagem, principalmente na leitura, escrita e soletração...',
    image:
      'https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Transtorno de Ansiedade Infantil',
    description:
      'A ansiedade infantil pode se manifestar de diversas formas, como medo excessivo, preocupação constante ou fobia escolar...',
    image:
      'https://images.pexels.com/photos/7929377/pexels-photo-7929377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-200 to-white">
      <Header />

      <main className="pt-20 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              Centro Integrado Kids
            </h1>
          </div>

          <div className="mb-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Coluna da Esquerda com 6 Cards */}
  <div className="space-y-4">
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div
        key={n}
        className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-blue-600 mb-1">
          Card {n}
        </h3>
        <p className="text-gray-600 text-sm">
          Descrição breve do conteúdo do card {n}.
        </p>
      </div>
    ))}
  </div>

  {/* Conteúdo "Quem Somos Nós" (2 colunas de largura em telas md+) */}
  
</div>
          {/* Cards sobre Transtornos */}
          <div className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
                Vocês sabiam?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {disorders.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white text-gray-900 shadow-lg rounded-lg p-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
