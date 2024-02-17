import Tempranillo from "../img/special/tempranillo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Special = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={Tempranillo} alt=""></img>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start md:mt-20"
          >
            <h1 className="h1">Unique</h1>
            <p className="mb-12 max-w-sm">
              <strong className="text-lg">What makes it unique?</strong>
              <br/> 
              Thanks to the Tempranillo grape, Melquiades becomes a unique red wine, since they are aromatic, combining spices, leather, tobacco leaves and occasionally strawberries.
              <br />
              <br />
              Oak is often associated with this grape due to aging in French or American barrels. As an overall tasty grape with soft tannins, it makes an excellent gastronomic wine. And if you want to accompany it with a truly Spanish meal, it can be combined with traditional tapas such as Jamón Ibérico or with a milder curry dish.
              <br />
              <br />
              <strong>Tasting notes:</strong>
              <br />
              <br />
              <i>Bold, between smooth and tannic, dry and slightly sweet and acidic. </i>
              In the mouth the Melquíades Tinta de Toro of Winery Esteban Celemín in the region of Castille-et-Léon, is a powerful with a nice freshness.
            </p>
            {/* <Link to={"/portfolio"} className="btn">
              Read more
            </Link> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Special;
