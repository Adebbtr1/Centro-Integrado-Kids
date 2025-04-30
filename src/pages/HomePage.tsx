import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselItems = [
  {
    title: 'Apoio Emocional',
    description: 'Suporte especializado para o bem-estar dos alunos',
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg'
  },
  {
    title: 'Acompanhamento Individual',
    description: 'Atendimento personalizado para cada estudante',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg'
  },
  {
    title: 'Grupos de Apoio',
    description: 'Atividades em grupo para desenvolvimento social',
    image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg'
  },
  {
    title: 'Orientação Familiar',
    description: 'Suporte para famílias e responsáveis',
    image: 'https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg'
  },
  {
    title: 'Ambiente Acolhedor',
    description: 'Espaços dedicados para relaxamento e reflexão',
    image: 'https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg'
  },
  {
    title: 'Desenvolvimento Pessoal',
    description: 'Programas para crescimento e autoconhecimento',
    image: 'https://images.pexels.com/photos/4101140/pexels-photo-4101140.jpeg'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/13164530/pexels-photo-13164530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
         
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-shadow">
            Centro Integrado Kids
          </h1>

          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[350px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage;
