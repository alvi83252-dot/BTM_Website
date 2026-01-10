import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin } from 'lucide-react'


import AnanyaBadithe from '../assets/images/AnanyaBadithe.png'
import ElainaTesfai from '../assets/images/ElainaTesfai.png'
import JohannCardona from '../assets/images/JohannCardona.jpg'
import MarwanHajMohamed from '../assets/images/MarwanHajMohamed.png'
import Nitya_Powar from '../assets/images/Nitya_Powar.png'
import RobertShuttleworth from '../assets/images/RobertShuttleworth.png'
import SamuelAsareBotwe from '../assets/images/SamuelAsareBotwe.png'
import SuryaanshMaithani from '../assets/images/SuryaanshMaithani.jpg'
import ThoyburRahman from '../assets/images/ThoyburRahman.png'

const images = [
  { src: AnanyaBadithe, name: 'Ananya Badithe', role: 'Frontend Developer', description: 'I am an enthusiatic and hardworking data science professional equipped with a business and analytical skillset who has extensive working knowledge of data analysis projects in Python and R.', linkedin: 'https://www.linkedin.com/in/ananya-badithe-82aba31b4'},
  { src: ElainaTesfai, name: 'Elaina Tesfai', role: 'Executive Team/Front-end Developer', description: 'I am a dependable,quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve.', linkedin: 'https://www.linkedin.com/in/elaina-tesfai-213a19243' },
  { src: JohannCardona, name: 'Johann Cardona', role: 'Full-Stack Developer', description: 'I am curious individual mastering code,balancing theory and practice,embracing challenges to shape a boundless future in software development and AI.', linkedin: 'https://www.linkedin.com/in/johann-cardona' },
  { src: MarwanHajMohamed, name: 'Marwan Haj Mohamed', role: 'Executive Team/Front-end Developer' ,description:'I am passionate, quick learning programmer that constantly broaden my knowledge in different languages to earn more experience in this field. ', linkedin: 'https://www.linkedin.com/in/marwan-haj'},
  { src: Nitya_Powar, name: 'Nitya Powar', role: 'Front-end Developer',description:'I am dedicated passionate and a acute learner, consistently expanding my expertise across multiple programming languages and in the field of Computer Science.', linkedin: 'https://www.linkedin.com/in/nitya-p-b04716223'},
  { src: RobertShuttleworth, name: 'Robert Shuttleworth', role: 'Programmer' ,description:'An articulate and motivational individual with experience working with multiple programming languages.I am keen to develop my existing skills and learn new skills to complement them.', linkedin: 'https://www.linkedin.com/in/robertshuttleworth'},
  { src: SamuelAsareBotwe, name: 'Samuel Asare Botwe', role: 'Data Analyst',description:'I am a very motivated data analyst and computer programmer that is willing to learn and use their skills to provide problem-solving strategies and applications.' , linkedin: 'https://www.linkedin.com/in/samuel-asare-botwe-b130491b9'},
  { src: SuryaanshMaithani, name: 'Suryaansh Maithani', role: 'Full-Stack Developer',description:'I am a self-motivated and dedicated university student with an unwavering passion for software programming. I am fully immeresed in the world of full stack development and I thrive in collaborative evironments,valuing teamwork and delivering high-quality, user-centric solutions. ', linkedin: 'https://www.linkedin.com/in/suryaansh-m' },
  { src: ThoyburRahman, name: 'Thoybur Rahman', role: 'Full-Stack Developer',description:'I am strong-willed and strive to make my initial plans and prototypes a success regardless of the obstacles that stand in the way. This will facilitate me in becoming successful in this career.', linkedin: 'https://www.linkedin.com/in/thoybur' }
]

const imageVariants = {
  center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
  left1: { x: '-45%', scale: 0.8, zIndex: 3 },
  left: { x: '-80%', scale: 0.6, zIndex: 2 },
  right: { x: '80%', scale: 0.6, zIndex: 2 },
  right1: { x: '45%', scale: 0.8, zIndex: 3 },
  hidden: { opacity: 0, scale: 0.3, zIndex: 0 }
}

export const ImageSlider: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const getPosition = (index: number) => {
    const diff = (index - centerIndex + images.length) % images.length
    if (diff === 0) return 'center'
    if (diff === 1) return 'right1'
    if (diff === 2) return 'right'
    if (diff === images.length - 1) return 'left1'
    if (diff === images.length - 2) return 'left'
    return 'hidden'
  }

  const handleCardClick = (index: number, isCenter: boolean) => {
    if (isCenter) {
      setFlipped((prev) => !prev)
    } else {
      setCenterIndex(index)
      setFlipped(false)
    }
  }

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % images.length)
    setFlipped(false)
  }

  const handleBack = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length)
    setFlipped(false)
  }

  return (
    <section className="snap-start min-h-screen px-4 py-10 bg-gradient-to-b from-[#0A0A0C] via-[#0B0B0D] to-[#0A0A0C]">
      <div className="mx-auto max-w-6xl space-y-4">
        <h3 className="text-3xl font-bold text-sky-400 text-center">
          Our People
        </h3>

        <div className="relative flex items-center justify-center h-[70vh] overflow-hidden perspective-[1200px]">
          {images.map((item, index) => {
            const position = getPosition(index)
            const isCenter = position === 'center'

            return (
              <motion.div
                key={index}
                variants={imageVariants}
                animate={position}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute w-[320px] h-[420px] cursor-pointer"
                onClick={() => handleCardClick(index, isCenter)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{
                    rotateY: isCenter && flipped ? 180 : 0,
                    scale: isCenter && flipped ? 1.04 : 1
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 15
                  }}
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center px-6 text-center backface-hidden rotate-y-180">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    {/* LinkedIn icon */}
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View LinkedIn profile"
                      className="mt-2 text-sky-400 hover:text-sky-300 hover:scale-110 transition"
                      aria-label={`${item.name} LinkedIn`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={22} />
                    </a>
                    <p className="mt-2 text-sky-400">{item.role}</p>
                    <p className="mt-2 text-white-400">{item.description}</p>
                    {/* <p className="mt-4 text-sm text-gray-300">
                      Passionate team member contributing to innovative solutions.
                    </p> */}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        <div className="mx-auto max-w-6xl space-y-4">
        <h3 className="text-3xl font-bold text-sky-400 text-center">
          Our People
        </h3>
        </div>
          {/* Navigation Buttons – pushed further down */}
          <div className="absolute bottom-2 z-20 flex gap-10">
            <button
              onClick={handleBack}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
