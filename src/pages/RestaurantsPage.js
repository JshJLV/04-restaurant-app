import FormReservation from "./restaurants/FormReservation";

function RestaurantsPage() {
  return (
    <main className="container mx-auto flex flex-col xl:flex-row px-10 py-6">
      <FormReservation />
      <div className="mb-10 xl:mb-0 xl:flex-1 xl:pr-4">
        "Seccion de mapa"
      </div>
    </main>
  );
}

export default RestaurantsPage;
