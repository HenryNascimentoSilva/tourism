import { useNavigate } from "react-router-dom";

function Card({ img, name, date}) {

  const navigate = useNavigate();
  const goToExcursion = () => {
    navigate(`/excursion/${name}`);
  }

  return (
    <>
      <div className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-2xl duration-500 bg-slate-100 mt-10 font-poppins">
        <img src={img} alt={name} className="w-full lg:h-56 h-32 md:h-40 bg-cover" />
        <div className="flex-grow px-4 pt-4 pb-1">
          <div className="font-semibold text-xl">{name}</div>
          <div className="py-1">
            <ion-icon name="calendar-outline"></ion-icon>
            <span className="ml-2 text-lg">{date}</span>
          </div>
          <div className="py-1">
            <ion-icon name="bus-outline"></ion-icon>
            <span className="ml-2 text-lg">Passeio Turístico</span>
          </div>
          <div className="py-1">
            <ion-icon name="card-outline"></ion-icon>
            <span className="ml-2 text-lg">Em até 10x no cartão</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-5 px-4 pt-1 pb-4">
          <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={goToExcursion}>
            Saiba Mais
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;