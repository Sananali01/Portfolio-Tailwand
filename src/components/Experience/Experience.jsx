import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from '../../styles'
import { experiences } from '../../constants'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: '#5a0707',
            color: '#fff'
        }}
        contentArrowStyle={{
            borderRight: '7px solid #1d18136'
        }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center h-full w-full">
                <img src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <a href={experience.company_link} target="_blank" rel="noreferrer" className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</a>
            <p className="text-white font-bold">{experience.location}</p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
                <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Work Experience</p>
                <h2 className={styles.sectionHeadText}>What I have done so far_</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work")