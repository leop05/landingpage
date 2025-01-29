import React from "react";
import Header from "./components/header"
import Informations from "./components/informations"
import Categories from "./components/categories"
import imageIot from "./images/image.jpeg.jpg"
import imagesante from "./images/image sante.jpg"
import imageagriculteur from "./images/image agriculteur.png"
import imagetransport from "./images/transport.jpg"
import './App.css'
import imagemaisonconnectees from"./images/maisonconnectees.jpg"



function App() {
  const className = (Header, Informations, Categories);
  return (
    <div className="headers">
      <Header title={"Iot"}/>
      <Informations title={"Qu'est ce que l'IoT"} image={imageIot} 
       text={"L\'IoT, ou Internet des Objets, révolutionne le paysage des entreprises en connectant des appareils pour collecter, analyser et réagir aux données en temps réel."}/>
      <Categories 
        categories={[
    
          { id: "sante", image : imagesante, title: "Santé", description:"Appareils connectés pour améliorer le bien-êtreLes appareils connectés révolutionnent le bien-être en permettant de suivre des paramètres comme la fréquence cardiaque ou le sommeil. À la maison, des dispositifs tels que les purificateurs d'air et les lumières intelligentes favorisent un environnement sain. Grâce aux données collectées, les utilisateurs reçoivent des recommandations personnalisées pour améliorer leur quotidien."},
           
           
           {id: "agriculteur", image : imageagriculteur, title: "Agriculture", description: "Optimisation des cultures grâce aux capteurs IoTLes capteurs IoT aident les agriculteurs à optimiser leurs cultures en mesurant des données comme l'humidité du sol, la température ou la luminosité. Ces informations permettent d’ajuster l’irrigation et la fertilisation pour réduire les déchets et améliorer les rendements. Ils offrent également des alertes sur les conditions météorologiques et les risques de maladies, rendant l’agriculture plus efficace et durable.." },
           
           
           {id: "transport",image : imagetransport, title: "Transport", description: "Gestion des flottes et suivi logistiqueGrâce à l’IoT, la gestion des flottes et la logistique deviennent plus efficaces. Les capteurs embarqués suivent en temps réel la position des véhicules, leur consommation de carburant et leur état général. Cela permet d’optimiser les itinéraires, de réduire les coûts et d’améliorer la ponctualité des livraisons. Les entreprises peuvent également anticiper les pannes grâce à des alertes, garantissant ainsi une meilleure continuité des opérations. L’analyse des données offre une logistique plus réactive et durable.." },
           
           
           {id: "maisonconnectees",  image : imagemaisonconnectees, title: "Maisons connectées", description: "Automatisation des lumières et appareilsL’IoT permet d’automatiser les lumières et appareils pour améliorer le confort et l’efficacité énergétique. Les capteurs détectent la présence dans une pièce pour ajuster automatiquement l’éclairage ou éteindre les appareils inutilisés. Les utilisateurs peuvent également programmer ou contrôler ces dispositifs à distance via des applications mobiles. Cela réduit la consommation d’énergie et simplifie la gestion quotidienne. L’automatisation apporte ainsi confort, économies et durabilité.." },
         ]}
      />
    </div>
  );
  
}


export default App;
