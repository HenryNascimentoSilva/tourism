import { useNavigate, useParams } from "react-router-dom";
import imageData from './components/imageData';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from "./Nav";
import Footer from "./Footer";

function DetailsPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  
  // Conteúdo individual de cada card
  const excursionData = imageData[name] || {};
  const { img1, img2, img3, text, link } = excursionData;

  // Navegação para a janela principal
  const goToHome = () => {
    navigate('/');
  }

  // Função para redirecionar para a página de compra
  const goBuy = () => {
    if (link) {
      window.location.href = link;  // Navega para o link de compra
    } else {
      console.error('Link não definido para esta excursão.');
    }
  }

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center min-h-screen font-poppins bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-5">
        <div className="grid grid-cols-1 gap-2 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-full bg-slate-100 md:p-8 rounded-lg shadow-lg">
          <div className="w-full">
            <Swiper autoplay={{ delay: 2500 }} modules={[Autoplay]}>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 bg-cover md:rounded-lg rounded-t" src={img1} alt={`${name} img1`} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 bg-cover md:rounded-lg rounded-t" src={img2} alt={`${name} img2`} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 bg-cover md:rounded-lg rounded-t" src={img3} alt={`${name} img3`} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col justify-between text-lg leading-relaxed p-4 md:rounded-xl">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <ul className="list-none mb-4">
                {text.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-4 md:mt-0">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={goToHome}>
                Fechar
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goBuy}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPage;
