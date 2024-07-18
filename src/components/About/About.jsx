import Tilt from 'react-parallax-tilt';
import { styles } from '../../styles';
import { services } from '../../constants';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const ServiceCard = ({ title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <div className='w-full bg-gradient-to-r from-[#841F1F] to-[#ffffff] p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-[#5a0707] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full'>
        <div style={{ marginTop: '130px' }}></div>
        <div className='max-w-3xl text-center'>
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview_
          </h2>
          <p className='mt-4 text-secondary text-[17px] leading-[30px]'>
            I am a passionate front-end web developer with a degree in Computer Science. Specializing in React.js, I have a solid foundation in HTML, CSS, and JavaScript. My ability to quickly learn and adapt enables me to collaborate closely with clients, crafting efficient, scalable, and user-friendly solutions that address real-world challenges. Together, we can transform your vision into reality with innovative and impactful web experiences!
          </p>
        </div>

        <div className='lg:mt-20 mt-10 flex flex-wrap gap-10 justify-center'>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Personal Details Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl font-semibold text-gray-100 mb-6 text-center'>
            Personal Details
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Tilt className='w-full'>
              <div className='bg-[#5a0707] rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-[#ffffff] mb-2'>Date of Birth</h3>
                <p className='text-[#9ca3af]'>November 6th, 2002</p>
              </div>
            </Tilt>
            <Tilt className='w-full'>
              <div className='bg-[#5a0707] rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-[#ffffff] mb-2'>Location</h3>
                <p className='text-[#9ca3af]'>Lahore, Pakistan</p>
              </div>
            </Tilt>
            <Tilt className='w-full'>
              <div className='bg-[#5a0707] rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-[#ffffff] mb-2'>Languages</h3>
                <p className='text-[#9ca3af]'>English, Urdu</p>
              </div>
            </Tilt>
            <Tilt className='w-full'>
              <div className='bg-[#5a0707] rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-[#ffffff] mb-2'>Hobbies</h3>
                <p className='text-[#9ca3af]'>Gaming, Traveling, Gym</p>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      <Experience />
      <Education />
    </>
  );
};

export default About;
