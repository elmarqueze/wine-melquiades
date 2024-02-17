import Producer from "../img/about/producer.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
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
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden md:mt-20">
            <img src={Producer} alt=""></img>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About</h1>
            <p className="mb-12 max-w-sm">
              <strong className="text-lg">Region: </strong>
              <br/> 
              <i>Wine from the land of Castilla y León, Spain.</i>
              <br />
              <br />
              Located in the northern half of the Central Iberian plateau, <b>Castilla y León</b> is the largest of Spain's 17 administrative regions, covering about one-fifth of the country's total area.
              <br />
              <br />
              It extends about 350 kilometers (220 miles) from <b>central Spain to the northern coast</b>. Just as wide, it connects the Rioja wine region to the Portuguese border. Red wines reign supreme in Castilla y León, and the Tempranillo grape is undoubtedly the king.
              <br />
              <br />
              <strong className="text-lg">Grape: </strong>
              <br />
              <i>Tempranillo</i>
              <br />
              <i>Tinta de Toro</i>
            </p>
            <Link to={"/portfolio"} className="btn">
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
