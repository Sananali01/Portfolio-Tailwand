import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";


const Maps = () => {

    // const [hue, setHue] = useState(0)
    // const color = `hsl(${hue % 360}deg 39% 70%)`

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Find</p>
                    <h2 className={styles.sectionHeadText}>Me Here_</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} gap-7`}>
                <div className="">
                    <div className="w-full h-screen">
                        <iframe
                            title="Google Maps Lahore"
                            className="w-full h-96 md:h-screen"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.841104975498!2d74.34921951462704!3d31.549710458750306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919021bd30373e1%3A0x3c8e79b9c9f14c50!2sLahore!5e0!3m2!1sen!2spk!4v1626447640117!5m2!1sen!2spk"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Maps, "");