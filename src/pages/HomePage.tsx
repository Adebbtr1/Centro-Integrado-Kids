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
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />

      <main className="pt-20 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              Centro Integrado Kids
            </h1>
          </div>

          {/* Cards laterais sobre Autismo */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Lateral esquerda com cards */}
       {/* Lateral esquerda com cards informativos sobre autismo */}
       <div className="w-full flex flex-col gap-6">
  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/luiz.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Psicopedagogo <br /> Luiz França</h3>
      <p className="text-gray-700 text-sm mt-2">
        .Avaliação diagnóstica completa. Terapias em Grupo. Avaliação de Transtornos Escolares.
        Apoio Psicopedagógico e para deficiências. Plano de Tratamento individualizado.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="images/masso.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Massoterapeuta <br /></h3>
      <p className="text-gray-700 text-sm mt-2">
        Trabalho com massagens, Ventosaterapia, Auriculoterapia, Bambuterapia que envolve técnicas
        da MTC (Medicina Tradicional Chinesa).
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="images/regina.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Psicóloga <br /> Regina Melo</h3>
      <p className="text-gray-700 text-sm mt-2">
        Avaliação diagnóstica completa. Terapias em grupo. Avaliação Transtornos Escolares.
        Apoio psicopedagógico e para Deficiências. Plano de Tratamento Individualizado.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/neuropsicopedagoga.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Neuropsicopedagoga <br />Thamiris Rafaella</h3>
      <p className="text-gray-700 text-sm mt-2">
        Avaliação Neuropsicopedagógica. Intervenção das dificuldades, distúrbios e transtornos de aprendizado.
        Orientação Familiar. Consultório Educacional.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/fisio.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Fisioterapeuta <br /> Danila Oliveira</h3>
      <p className="text-gray-700 text-sm mt-2">
        Atendimento voltado para crianças atípicas. Formação em fisioterapia e psicomotricidade.
        Pós-graduação em Fisioterapia Neurofuncional Pediátrica.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/neuropsi.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Neuropsicóloga <br /> Marcia Teixeira</h3>
      <p className="text-gray-700 text-sm mt-2">
        Realização de avaliações Neuropsicológica detalhadas para diagnóstico e Plano
        de intervenção de distúrbios de neuro desenvolvimento, como Autismo, deificuldades 
        de aprendizagem, prejuízos de atenção, dificuldades cognitivas nos quadros psiquiátricos
        como: TDAH, Alzheimer e outros.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/psicomotricista.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Psicomotricista <br /> Ana Costa</h3>
      <p className="text-gray-700 text-sm mt-2">
        Atuação na organização corporal, lateralidade, equilíbrio e no desenvolvimento psicomotor infantil.
      </p>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/psicomotricista.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Psicomotricista <br /> Ana Costa</h3>
      <p className="text-gray-700 text-sm mt-2">
        Atuação na organização corporal, lateralidade, equilíbrio e no desenvolvimento psicomotor infantil.
      </p>
    </div>

    
  </div>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 rounded-xl shadow-md p-4 flex items-center gap-4">
    <img
      src="/images/psicomotricista.jpg"
      alt="Profissionais"
      className="w-16 h-16"
    />
    <div>
      <h3 className="text-lg font-semibold text-cyan-800">Psicomotricista <br /> Ana Costa</h3>
      <p className="text-gray-700 text-sm mt-2">
        Atuação na organização corporal, lateralidade, equilíbrio e no desenvolvimento psicomotor infantil.
      </p>
    </div>

    
  </div>
</div>


            {/* Conteúdo principal */}
  {/* Conteúdo principal */}
<div className="md:col-span-2 flex flex-col items-center text-center">
  <h2 className="text-3xl font-bold text-blue-900 mb-4">Quem somos nós?</h2>

  <div className="bg-gradient-to-r from-blue-300 to-green-200 p-6 rounded-xl shadow-md max-w-2xl">
    <p className="text-gray-700 mb-6 leading-relaxed">
      No Centro Integrado Kids, unimos profissionais especializados em diversas áreas para oferecer um atendimento completo e acolhedor às crianças e suas famílias. Nosso objetivo é promover o desenvolvimento infantil por meio de avaliações precisas, terapias personalizadas e orientação familiar contínua.
      <br /><br />
      Contamos com uma equipe formada por psicopedagogos, psicólogos, neuropsicólogos, fisioterapeutas, psicomotricistas e massoterapeutas, todos comprometidos com o cuidado humanizado e o bem-estar dos pequenos. Atuamos com enfoque nos transtornos do neurodesenvolvimento, como o autismo, TDAH, TOD, dislexia, deficiência intelectual e ansiedade infantil, respeitando as particularidades de cada criança.
      <br /><br />
      Acreditamos que, com afeto, conhecimento e colaboração entre família e profissionais, é possível construir trajetórias de crescimento mais saudáveis e felizes.
    </p>
  </div>
  <br />
  <h2 className="text-3xl font-bold text-blue-900 mb-4">Missão</h2>

<div className="bg-gradient-to-r from-blue-300 to-green-200 p-6 rounded-xl shadow-md max-w-2xl">
  <p className="text-gray-700 mb-6 leading-relaxed">
  Promover o acolhimento e suporte a crianças, adolescentes e jovens com deficiências ocultas
  e transtornos escolares relacionados à saúde mental, tais como TEA, TDAH, TOD, TEI, entre outros,
   visando a criação de um ambiente de compreensão e assistência adequada.

  </p>
</div>

<br />

<h2 className="text-3xl font-bold text-blue-900 mb-4">Visão</h2>

<div className="bg-gradient-to-r from-blue-300 to-green-200 p-6 rounded-xl shadow-md max-w-2xl">
  <p className="text-gray-700 mb-6 leading-relaxed">
  Assegurar cuidados integrais na saúde mental e emocional de indivíduos 
  com deficiências ocultas, promovendo sua plena inclusão nas dinâmicas sociais e psicossociais. Além disso, desenvolver e implementar estratégias de apoio direcionadas às mães atípicas, 
  com o objetivo de garantir o bem-estar integral de suas famílias.

  </p>
</div>
<br />


<h2 className="text-3xl font-bold text-blue-900 mb-4">Valores</h2>

<div className="bg-gradient-to-r from-blue-300 to-green-200 p-6 rounded-xl shadow-md max-w-2xl">
  <p className="text-gray-700 mb-6 leading-relaxed">
  1. Respeito e dignidade: Tratar cada criança e família com respeito e dignidade, 
  independentimente de suas necessidades ou habilidades. <br />
  2. Inclusão e acessibilidade: Garantir que todos os serviçoes sejam
  acessíveis de inclusivos para crianças com deficiências ocultas. <br />
  3. Compassividade e empatia: Oferecer apoio emocional e compreensão 
  para as crianças e famílias que atendemos. <br />
  4. Profissionalismo e expertise: Manter um alto nível de Profissionalismo
  e expertise em nossas práticas e serviços. <br />
  5.Família-centrada: Trabalhar em parceria com as famílias para entender
  suas necessidades e objetivos. <br />
  6. Inovação e criatividade: Buscar soluções inovadoras e criativas 
  para atender às necessidades únicas de cada criança. <br />
  7. Privacidade e confidencialidade: Garantir a privacidade e confidencialidade
  das informações das crianças e famílias que atendemos.

  </p>
</div>
<br />


<h2 className="text-3xl font-bold text-blue-900 mb-4">Princípios</h2>

<div className="bg-gradient-to-r from-blue-300 to-green-200 p-6 rounded-xl shadow-md max-w-2xl">
  <p className="text-gray-700 mb-6 leading-relaxed">
  1. Centrado na criança: Colocar as necessidades e interesses da criança
  no centro de nossas práticas. <br />
  2. Família como parceira: Trabalhar com parceria com famílias para
  alcançar os objetivos da criança. <br />
  3. Equipe interdisciplinar: Trabalhar em equipe com profissionais de diferentes 
  áreas para oferecer serviçoes abrangentes. <br />
  4. Baseado em evidências: Utilizar práticas e intervenções baseadas
  em evidências científicas.

  </p>
</div>


</div>


          </section>

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
          className="bg-gradient-to-r from-blue-300 to-green-200 text-gray-900 shadow-lg rounded-lg p-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
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
