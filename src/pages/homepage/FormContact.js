import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import imgRestaurante from "../../assets/img/restaurant.jpg"

function FormContact() {
  return (
    <div className="container mx-auto p-8 flex flex-col xl:flex-row">
      <div className="mb-10 xl:mb-0 xl:flex-1 xl:pr-4">
        <h1 className="font-bold text-5xl mb-8">Datos de contacto</h1>
        <p className="text-lg text-justify">
          Si quieres recibir mas informacion puedes mandarnos un correo
          preguntando lo que necesites
        </p>
        <div className="xl:mt-10">
          <img src={imgRestaurante} alt="Fotografia de restaurante"/>
        </div>
      </div>
      <form className="xl:flex-1 xl:pl-4 xl:flex xl:flex-col xl:justify-center">
        <label className="text-xl mt-3 block">Nombre: </label>
        <Inputs placeholder={"Nombre"} />
        <label className="text-xl block mt-3">Teléfono: </label>
        <Inputs placeholder={"Teléfono"} />
        <label className="text-xl block mt-3">Email: </label>
        <Inputs placeholder={"Email"} />
        <label className="text-xl block mt-3">Mensaje: </label>
        <textarea
          className="bg-gray-100 rounded-md mt-2 p-2 w-full"
          placeholder="Escribe tu mensaje"
        ></textarea>
        <Button />
      </form>
    </div>
  );
}

export default FormContact;
