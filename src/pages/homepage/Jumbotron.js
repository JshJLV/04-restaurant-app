import ImgCostillas from "../../assets/img/costillas.jpg"

function Jumbotron() {
  return (
    <div>
        <img className="w-full h-96 object-cover" src={ImgCostillas} alt="Costillas"/>
    </div>
  )
}

export default Jumbotron