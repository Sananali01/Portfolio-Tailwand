import { motion } from "framer-motion";
import { styles } from '../../styles';
import LeftBanner from './banner/LeftBanner';
import RightBanner from './banner/RightBanner';
import GitHubCalendar from 'react-github-calendar';
import { textVariant } from '../../utils/motion';

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen mx-auto mb-20" >
                <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#841F1F]" />
                        <div className="w-1 sm:h-80 h-40 mt-[2px] rounded-full bg-[#ffffff]" />
                    </div>
                    <section className="w-full pb-20 flex flex-col gap-10 lg:flex-row items-center justify-between border-b-[1px] font-titleFont border-b-black">
                        <LeftBanner />
                        <div className="hidden lg:block">
                            <RightBanner />
                        </div>
                    </section>
                </div>
            </section>

            <section className="py-12 github-calander">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={textVariant()} className="text-center">
                        <p className={styles.sectionSubText}>GitHub Contributions</p>
                        <h2 className={styles.sectionHeadText}>My GitHub Activity_</h2>
                    </motion.div>
                    <motion.div variants={textVariant()} className="max-w-4xl mx-auto mt-10">
                        <GitHubCalendar username="sananali01" blockSize={14} blockMargin={4} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
