import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const disorders = [
  {
    title: 'Autismo',
    description:
      'O autismo é um transtorno do desenvolvimento que afeta a comunicação, comportamento e interação social...',
    image:
      'https://images.pexels.com/photos/8709147/pexels-photo-8709147.jpeg',
  },
  {
    title: 'TDAH',
    description:
      'O TDAH é caracterizado por dificuldades de atenção, impulsividade e hiperatividade...',
    image:
      'https://images.pexels.com/photos/8378737/pexels-photo-8378737.jpeg',
  },
  {
    title: 'TOD',
    description:
      'O TOD é um transtorno que envolve padrões de comportamento desafiador e oposição a autoridades...',
    image:
      'https://images.pexels.com/photos/8378752/pexels-photo-8378752.jpeg',
  },
  {
    title: 'Deficiência Intelectual',
    description:
      'Caracteriza-se por limitações significativas no funcionamento intelectual e no comportamento adaptativo...',
    image:
      'https://images.pexels.com/photos/7352806/pexels-photo-7352806.jpeg',
  },
  {
    title: 'Dislexia',
    description:
      'É uma dificuldade específica de aprendizagem, principalmente na leitura, escrita e soletração...',
    image:
      'https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg',
  },
  {
    title: 'Transtorno de Ansiedade Infantil',
    description:
      'A ansiedade infantil pode se manifestar de diversas formas, como medo excessivo, preocupação constante ou fobia escolar...',
    image:
      'https://images.pexels.com/photos/7929377/pexels-photo-7929377.jpeg',
  },
];

const borderColors = ['blue-400', 'red-300', 'green-900', 'yellow-400', 'purple-400'];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-blue-100 font-sans">

      <Header />

      <main className="pt-24 pb-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
              <span className="text-purple-600">C</span>
              <span className="text-blue-300">e</span>
              <span className="text-yellow-400">n</span>
              <span className="text-red-600">t</span>
              <span className="text-purple-600">r</span>
              <span className="text-blue-300">o</span>
              <span className="text-yellow-400"> </span>
              <span className="text-yellow-400">I</span>
              <span className="text-red-600">n</span>
              <span className="text-purple-600">t</span>
              <span className="text-blue-300">e</span>
              <span className="text-yellow-300">g</span>
              <span className="text-red-600">r</span>
              <span className="text-purple-600">a</span>
              <span className="text-blue-300">d</span>
              <span className="text-yellow-400">o</span>
              <span className="text-red-600"> </span>
              <span className="text-red-600">K</span>
              <span className="text-purple-600">i</span>
              <span className="text-blue-300">d</span>
              <span className="text-yellow-400">s</span>
            </h1>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            <div className="flex flex-col gap-6">
              {[
                {
                  name: 'Luiz França',
                  title: 'Psicopedagogo',
                  image: '/images/luiz.jpg',
                  text: 'Avaliação diagnóstica completa. Terapias em Grupo. Avaliação de Transtornos Escolares. Apoio Psicopedagógico e para deficiências. Plano de Tratamento individualizado.',
                },
                {
                  name: '',
                  title: 'Massoterapeuta',
                  image: 'images/masso.jpg',
                  text: 'Trabalho com massagens, Ventosaterapia, Auriculoterapia, Bambuterapia que envolve técnicas da MTC (Medicina Tradicional Chinesa).',
                },
                {
                  name: 'Regina Melo',
                  title: 'Psicóloga',
                  image: 'images/regina.jpg',
                  text: 'Avaliação diagnóstica completa. Terapias em grupo. Avaliação Transtornos Escolares. Apoio psicopedagógico e para Deficiências. Plano de Tratamento Individualizado.',
                },
                {
                  name: 'Thamiris Rafaella',
                  title: 'Neuropsicopedagoga',
                  image: '/images/neuropsicopedagoga.jpg',
                  text: 'Avaliação Neuropsicopedagógica. Intervenção das dificuldades, distúrbios e transtornos de aprendizado. Orientação Familiar. Consultório Educacional.',
                },
                {
                  name: 'Danila Oliveira',
                  title: 'Fisioterapeuta',
                  image: '/images/fisio.jpg',
                  text: 'Atendimento voltado para crianças atípicas. Formação em fisioterapia e psicomotricidade. Pós-graduação em Fisioterapia Neurofuncional Pediátrica.',
                },
                {
                  name: 'Marcia Teixeira',
                  title: 'Neuropsicóloga',
                  image: '/images/neuropsi.jpg',
                  text: 'Avaliações Neuropsicológicas detalhadas para diagnóstico e plano de intervenção de distúrbios de neurodesenvolvimento como Autismo, TDAH, Alzheimer e outros.',
                },
              ].map((prof, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={idx}
                  className={classNames(
                    'bg-blue-50 rounded-xl shadow-lg p-4 flex gap-4 items-center hover:shadow-xl transition border-l-4',
                    `border-${borderColors[idx % borderColors.length]}`
                  )}
                >
                  <img src={prof.image} alt="Profissional" className="w-16 h-16 rounded-full object-cover border border-blue-200" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">
                      {prof.title} {prof.name && <><br />{prof.name}</>}
                    </h3>
                    <p className="text-blue-700 text-sm mt-2 leading-snug">{prof.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="md:col-span-2 flex flex-col items-center text-center space-y-10">
  {[
    {
      title: 'Quem somos nós?',
      content: 'No Centro Integrado Kids, unimos profissionais especializados em diversas áreas para oferecer um atendimento completo e acolhedor às crianças e suas famílias. Nosso objetivo é promover o desenvolvimento infantil por meio de avaliações precisas, terapias personalizadas e orientação familiar contínua.\n\nContamos com uma equipe formada por psicopedagogos, psicólogos, neuropsicólogos, fisioterapeutas, psicomotricistas e massoterapeutas, todos comprometidos com o cuidado humanizado e o bem-estar dos pequenos.',
    },
    {
      title: 'Missão',
      content: 'Promover o acolhimento e suporte a crianças, adolescentes e jovens com deficiências ocultas e transtornos escolares relacionados à saúde mental.',
    },
    {
      title: 'Visão',
      content: 'Assegurar cuidados integrais na saúde mental e emocional de indivíduos com deficiências ocultas, promovendo sua plena inclusão nas dinâmicas sociais.',
    },
    {
      title: 'Valores',
      content: '1.Respeito e dignidade 2.Inclusão e acessibilidade 3.Compassividade e empatia 4.Profissionalismo e expertise 5.Família-centrada 6.Inovação    7.Confidencialidade',
    },
    {
      title: 'Princípios',
      content: '1. Centrado na criança 2. Família como parceira  3. Equipe interdisciplinar 4. Baseado em evidências',
    },
  ].map((section, idx) => (
    <motion.div
      key={idx}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={idx}
      className={classNames(
        'bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col gap-4 items-center hover:shadow-xl transition min-h-[200px] flex-grow',
        `border-l-4 border-${borderColors[idx % borderColors.length]}`
      )}
    >
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{section.title}</h2>
      <p className="text-blue-700 whitespace-pre-line leading-relaxed flex-grow">{section.content}</p>
    </motion.div>
  ))}
</div>

{/* Linha divisória entre os cards principais e os transtornos */}

          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent mb-12">
                Vocês sabiam?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {disorders.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    className={classNames(
                      'bg-white text-gray-900 shadow-lg rounded-lg p-6 border-l-4 transform transition duration-300 hover:scale-105 hover:shadow-xl',
                      `border-${borderColors[index % borderColors.length]}`
                    )}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">{card.title}</h3>
                    <p className="text-blue-700 text-sm leading-snug">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <a href="https://wa.me/5521973692354" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600" target="_blank">
          WhatsApp
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
