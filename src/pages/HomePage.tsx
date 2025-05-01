import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const disorders = [
  {
    title: 'Autismo',
    description:
      'O autismo é um transtorno do desenvolvimento que afeta a comunicação, comportamento e interação social. A pessoa com autismo pode apresentar dificuldades em interações sociais e padrões de comportamento repetitivos. Com o suporte adequado, pessoas autistas podem desenvolver habilidades importantes e participar ativamente da sociedade.',
    image:
      'https://images.pexels.com/photos/8709147/pexels-photo-8709147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'TDAH',
    description:
      'O TDAH é caracterizado por dificuldades de atenção, impulsividade e hiperatividade. Indivíduos com TDAH podem ter desafios em se concentrar em tarefas, controlar impulsos e manter um comportamento adequado em diferentes ambientes. Intervenções como acompanhamento terapêutico e estratégias educacionais podem ser muito eficazes.',
    image:
      'https://images.pexels.com/photos/8378737/pexels-photo-8378737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'TOD',
    description:
      'O TOD é um transtorno que envolve padrões de comportamento desafiador e oposição a autoridades. Indivíduos com TOD frequentemente se recusam a seguir regras, desobedecem instruções e têm dificuldades em controlar sua raiva. O tratamento inclui terapia comportamental e estratégias para melhorar a comunicação e o controle emocional.',
    image:
      'https://images.pexels.com/photos/8378752/pexels-photo-8378752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Deficiência Intelectual',
    description:
      'Caracteriza-se por limitações significativas no funcionamento intelectual e no comportamento adaptativo, afetando habilidades sociais, conceituais e práticas.',
    image:
      'https://images.pexels.com/photos/7352806/pexels-photo-7352806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Dislexia',
    description:
      'É uma dificuldade específica de aprendizagem, principalmente na leitura, escrita e soletração, sem relação com a inteligência geral da criança.',
    image:
      'https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Transtorno de Ansiedade Infantil',
    description:
      'A ansiedade infantil pode se manifestar de diversas formas, como medo excessivo, preocupação constante ou fobia escolar. Crianças com esse transtorno podem ter dificuldades para dormir, se concentrar ou se separar dos pais. O tratamento geralmente envolve terapia cognitivo-comportamental e, em alguns casos, acompanhamento médico.',
    image:
      'https://images.pexels.com/photos/7929377/pexels-photo-7929377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const professionals = [
  {
    title: 'Psicólogo',
    description:
      'O psicólogo é um profissional que atua ajudando na saúde mental, lidando com questões emocionais, comportamentais e sociais. Ele utiliza técnicas de terapia para promover o bem-estar psicológico e emocional dos pacientes.',
    image: '/images/kids123.png',
  },
  {
    title: 'Psicopedagogo',
    description:
      'O psicopedagogo auxilia no processo de aprendizagem, diagnosticando e tratando dificuldades relacionadas à educação. Ele ajuda crianças, adolescentes e adultos a superarem barreiras cognitivas no aprendizado.',
    image: '/images/kids124.png',
  },
  {
    title: 'Fisioterapeuta',
    description:
      'O fisioterapeuta trabalha na reabilitação física, ajudando a melhorar a mobilidade e reduzir dores. Ele usa técnicas de terapia física para tratar lesões, doenças e condições que afetam o movimento do corpo.',
    image: '/images/kids.png',
  },
  {
    title: 'Neuropsicólogo',
    description:
      'O neuropsicólogo estuda a relação entre o cérebro e o comportamento. Ele avalia e trata pessoas com distúrbios neurológicos, ajudando a melhorar funções cognitivas afetadas por lesões cerebrais ou condições neuropsiquiátricas.',
    image: '/images/neuropsicologo.jpg',
  },
  {
    title: 'Terapeuta Ocupacional',
    description:
      'O terapeuta ocupacional auxilia na recuperação de habilidades para realizar atividades cotidianas. Ele trabalha com indivíduos que enfrentam dificuldades devido a condições físicas, mentais ou cognitivas, promovendo independência e qualidade de vida.',
    image: '/images/terapeuta_ocupacional.jpg',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-200 to-white">
      <Header />

      <main className="pt-20 pb-24">
        {/* Imagem de fundo */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
  Centro Integrado Kids
          </h1>
        </div>

        <div className="mb-16 max-w-3xl mx-auto text-center">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Quem Somos Nós</h2>
  <p className="text-gray-600 text-lg">
    Somos um centro dedicado ao cuidado, desenvolvimento e bem-estar de crianças com transtornos e dificuldades no aprendizado. Nossa equipe multidisciplinar trabalha com empatia, profissionalismo e compromisso para oferecer suporte individualizado e promover o desenvolvimento integral de cada criança.
  </p>
</div>


          {/* Cards sobre Transtornos */}
          <div className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
  Transtornos
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

      {/* Footer fixado ao final da tela */}
      <Footer />
    </div>
  );
};

export default HomePage;
