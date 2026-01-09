import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin } from 'lucide-react'


import AlanSerranoRico from '../assets/Expert images/Alan_Serrano_Rico.png'
import Xiaohui_Liu from '../assets/Expert images/Xiaohui_Liu.png'
import Kate_Hone from '../assets/Expert images/Kate_Hone.png'
import Timothy_Cribbini from '../assets/Expert images/Timothy_Cribbini.png'
import Giuseppe_Destefanis from '../assets/Expert images/Giuseppe_Destefanis.png'
import David_Bell from '../assets/Expert images/David_Bell.png'
import Derek_Groen from '../assets/Expert images/Derek_Groen.png'
import Isabel_Sasoon from '../assets/Expert images/Isabel_Sasoon.png'
import Stephen_Swift from '../assets/Expert images/Stephen_Swift.png'
import Alina_Miron from '../assets/Expert images/Alina_Miron.png'
import Rumyana_Neykova from '../assets/Expert images/Rumyana_Neykova.png'  
import MahirArzoky from '../assets/Expert images/Mahir_Arzoky.png'

const images = [
  { src: Rumyana_Neykova, name: 'Rumyana Neykova', role: 'Technical Director/ Software Engineering Expert', description: 'My body of work builds on the foundations of cryptocurrency theory and type systems. Furthermore, I have accumulated years of industrial experience working as a software developer in companies and corporations such as Microsoft.', linkedin: 'https://www.linkedin.com/in/rumineykova' },
  { src: Alina_Miron, name: 'Alina Miron', role: 'AI Expert', description: 'I am an accomplished artificial intelligence researcher and developer with excellent understanding of data. This is consolidated by my PhD in Machine Learning. Furthermore, I have a strong background in computer vision, natural language processing and data science.', linkedin: 'Linkedin not available' },
  { src: Stephen_Swift, name: 'Stephen Swift', role: 'AI Expert', description: 'My interest corresponds with intelligent data analysis, heuristic search, search-based software engineering and data clustering & database refactoring. Furthermore, I am a member of FIAR-NER, which promotes collaborations between industry and academia.', linkedin: 'https://www.linkedin.com/in/stephen-swift-5959253' },
  { src: Isabel_Sasoon, name:'Isabel Sasoon', role: 'Data Science Expert' ,description:'My research interests are in data science, data-driven automated reasoning, and its transparency and explainability. Isabel has over 10 years of industry experience working as a data scientist in various verticals including Health, Public Sector and Telecoms. ', linkedin: 'https://www.linkedin.com/in/isabel-sassoon-phd-18437a1'},
  { src: Derek_Groen, name: 'Derek Groen', role: 'Applied R&D Expert',description:'I am an interdisplinary researcher who focuses primarily on multiscale modelling and high-performance computing, but takes along some major challenges that surroung these topics.', linkedin: 'https://www.linkedin.com/in/derek-groen-126a9a10'},
  { src: David_Bell, name: 'David Bell', role: 'Applied R&D Expert' ,description:'I am a multi-disciplinary researcher, who has applied novel digital service solutions in varying domains (including a range of health setting). Furthermore, I have industrial experience working for several small to large software development companies.', linkedin: 'https://www.linkedin.com/in/drdavidbell'},
  { src: Giuseppe_Destefanis, name: 'Giuseppe Destefanis', role: 'Software Engineering Expert',description:'The focal areas of my research revolve around mining software repositories, empirical software engineering, agile methodologies, software metrics & patterns, and blockchain. Also, I have 15+ years’ experience working as a consultant and affiliate researcher.', linkedin: 'https://www.linkedin.com/in/giuseppe-destefanis-2b301813' },
  { src: Timothy_Cribbini, name: 'Timothy Cribbini', role: 'UI Expert',description:'My expertise and interests lie in the realm of researching new methods and applications of visual text analytics in multiple diverse areas. Over the course of my career, I have also participated in several funded projects in which I have consolidated my research.', linkedin: 'https://www.linkedin.com/in/timothy-cribbin-44476b171' },
  { src: Kate_Hone, name: 'Kate Hone', role: 'UI Expert',description:'I am a highly experienced academic leader whose research particularly focuses on the human factor implications of using speech and emotion within system design. I have incorporated this research into many projects such as the Millennium Homes project as well as many others.' , linkedin: 'https://www.linkedin.com/in/kate-hone-94616513'},
  { src: Xiaohui_Liu, name: 'Xiaohui Liu', role: 'AI Expert',description:'Xiaohui Liu is Professor of Computing at Brunel University London where he conducts research in artificial intelligence, data science and optimization, with applications in diverse areas including biomedicine and engineering.' , linkedin: 'https://www.linkedin.com/in/xiaohui-liu-3b069624'},
  { src: AlanSerranoRico, name: 'Alan Serrano-Rico', role: 'Managing Director/ R&D Expert',description:'My research has mainly focused on applying scientific research to real-life challenges organisations face when adopting ICT. As the founder and director of BTM, I am keen on developing better, closer relationships between industry, academia, and our talented students.', linkedin: 'https://www.linkedin.com/in/alan-serrano-6634456'},
  {src: MahirArzoky, name: 'Mahir Arzoky', role: 'AI Expert',description:'My interest corresponds with intelligent data analysis, heuristic search, search-based software engineering and data clustering & database refactoring. Furthermore, I am a member of FIAR-NER, which promotes collaborations between industry and academia.', linkedin: 'Linkedin not available' }
]

const imageVariants = {
  center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
  left1: { x: '-45%', scale: 0.8, zIndex: 3 },
  left: { x: '-80%', scale: 0.6, zIndex: 2 },
  right: { x: '80%', scale: 0.6, zIndex: 2 },
  right1: { x: '45%', scale: 0.8, zIndex: 3 },
  hidden: { opacity: 0, scale: 0.3, zIndex: 0 }
}

export const Talent_Image: React.FC = () => {
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
          Our Talents
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
