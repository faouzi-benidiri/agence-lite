import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Works from "./pages/Works";
import StudyCase from "./Components/StudyCase";

function App() {
  const studiesData = [
    {
      title: "Platon",
      summary:
        "Plongez dans notre collaboration avec Platon pour élargir sa portée sur le marché et améliorer la reconnaissance de sa marque grâce à un site web convivial, des campagnes publicitaires percutantes et une optimisation des moteurs de recherche, entraînant une croissance des ventes et une meilleure notoriété de la marque.",
      description:
        "Platon est une entreprise spécialisée dans la conception et la fabrication de robots pour la logistique. Leur objectif est d'optimiser la gestion de la chaîne d'approvisionnement pour leurs clients. Nous avons travaillé avec Platon pour développer un site web permettant de présenter leurs produits, leurs technologies, ainsi que leurs services d'accompagnement et de maintenance. Nous avons également créé un configurateur de robots en ligne permettant aux clients de personnaliser leur robot en fonction de leurs besoins spécifiques.",
      // Autres propriétés pour cette étude de cas
    },
    {
      title: "Solane",
      summary:
        "Découvrez comment notre agence a aidé Solane, une marque de produits alimentaires biologiques, à attirer de nouveaux clients et à se démarquer dans un marché concurrentiel grâce à un branding attrayant, un site web de commerce électronique et des campagnes de marketing numérique ciblées, entraînant une augmentation significative des ventes et une position renforcée en tant que leader du secteur.",
      description:
        "Solane est une entreprise spécialisée dans la production et la distribution de légumes bio. Ils avaient besoin d'un système de gestion de leur production, de leurs stocks et de leurs ventes. Nous avons travaillé avec Solane pour développer un logiciel sur mesure répondant à leurs besoins spécifiques. Le logiciel permet de suivre en temps réel la production et les stocks de légumes, de gérer les commandes des clients et de générer des rapports de vente détaillés. Depuis la mise en place du logiciel, Solane a pu augmenter son efficacité opérationnelle et sa rentabilité.",
      // Autres propriétés pour cette étude de cas
    },
    {
      title: "Sedal",
      summary:
        "Découvrez comment notre agence a aidé Sedal à renforcer sa présence en ligne, augmenter l'engagement des clients et stimuler les ventes grâce à une refonte du site web, des campagnes de médias sociaux ciblées et des stratégies publicitaires percutantes.",
      description:
        "Sedal est une entreprise spécialisée dans la fabrication de produits capillaires pour femmes. Ils avaient besoin d'un nouveau packaging pour leur gamme de produits capillaires. Nous avons travaillé avec Sedal pour créer un nouveau design de packaging qui reflète leur image de marque et qui se démarque sur les rayons des magasins. Nous avons également créé des campagnes publicitaires en ligne ciblant leur public cible pour augmenter leur visibilité et leurs ventes. Depuis la mise en place du nouveau packaging et des campagnes publicitaires, Sedal a vu une augmentation significative de ses ventes.",
      // Autres propriétés pour cette étude de cas
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works data={studiesData} />} />
        <Route
          path="/works/:title"
          element={<StudyCase data={studiesData} />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
