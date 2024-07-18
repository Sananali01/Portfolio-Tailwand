import { motion } from 'framer-motion';
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant, fadeIn } from "../../utils/motion";
import { technologies } from '../../constants';

const Skills = () => {
  return (
    <div className='mt-10'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies I Use</h2>
      </motion.div>

      {technologies.map((category, index) => (
        <div key={index} className="mt-10">
          <h3 className="text-3xl font-bold mb-5 pl-5 justify-center">{category.category}</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75 } }}
            variants={fadeIn('up', 'spring', 0.4, 1)}
            className="w-full flex flex-wrap justify-center gap-10 pl-5" // Center items horizontally
          >
            {category.items.map((technology, techIndex) => (
              <motion.div
                key={techIndex}
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-24 h-24 object-contain"
                />
                <p className="mt-4 text-lg font-semibold text-center">{technology.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Skills, 'skills');
