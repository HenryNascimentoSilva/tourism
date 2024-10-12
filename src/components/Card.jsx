import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";

function Card(props) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-xl bg-slate-100 mt-10">
      <img src={props.img} alt={props.name} className="w-full h-auto" />
      <div className="flex-grow px-4 pt-4 pb-1">
        <div className="font-semibold text-xl">{props.name}</div>
        <div className="py-1">
          <ion-icon name="calendar-outline"></ion-icon>
          <span className="ml-2 text-lg">{props.date}</span>
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
        <WhiteButton>
          Saiba Mais
        </WhiteButton>
        <BlueButton>
          Comprar
        </BlueButton>
      </div>
    </div>
  );
}

export default Card;