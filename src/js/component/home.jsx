import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyCard from "./card";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";



//create your first component
const Home = () => {
	return (
		
		<div className="container-fluid padre ">
			
			<div className="container-fluid mb-2">
				<NavBar />
			</div>

			<div className="container border border-secondary mb-2 rounded-3 ">
				<Jumbotron 
				callToAction={"Call to Action"}
				text={"El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal.  "}
				title={"A WARM WELCOME!"}
				/>
			</div>


			<div className="container d-flex justify-content-between mb-3">
				<MyCard 
					imgURL={"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"}
					buttonLabel={"Find Out More!"}
					title={"Card Title"}
					text={"El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. "}
					
					/>

			

				<MyCard 
					imgURL={"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"}
					buttonLabel={"Find Out More!"}
					title={"Card Title"}
					text={"El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal.  "}
					
					/>


				<MyCard 
					imgURL={"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"}
					buttonLabel={"Find Out More!"}
					title={"Card Title"}
					text={"El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. "}
					
					/>

			</div>
		</div>
	);
};

export default Home;
