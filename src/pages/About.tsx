import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AboutImage from '../assets/images/About.png';
const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Me | Varnica - Product & Project Manager';
  }, []);

  const values = [
    {
      title: 'User-Centered Approach',
      description: 'I believe in creating products that solve real user problems and deliver meaningful value.'
    },
    {
      title: 'Curiosity & Evidence',
      description: 'I’m driven by asking “why” and “what if,” and I rely on data and real feedback to guide every decision, ensuring that intuition is backed by facts.'
    },
    {
      title: 'Agile Leadership',
      description: 'I excel in leading cross-functional teams and adapting to changing requirements.'
    },
    {
      title: 'Continuous Learning',
      description: 'I\'m passionate about staying current with technology trends and product practices.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background, approach, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">
                I build products that solve real problems and scale fast.
              </p>
              
              <p className="text-lg mb-6">
                I began my career in engineering at Infosys, learning how complex systems work, and more importantly, how to make them work better. Over time, I shifted to product management to focus on the bigger picture: understanding user pain points, shaping vision, and turning scattered ideas into products people rely on.
              </p>
              
              <p className="text-lg mb-6">
               Since then, I’ve built and scaled products across HR tech, edtech, fintech, and e-commerce. Some I’ve led end-to-end from 0→1, others I’ve driven through critical stages of growth. I thrive where tech, business, and user experience collide, translating big-picture strategy into crisp execution.
              </p>
              
              <p className="text-lg mb-6">
                What drives me every day is the challenge of turning complex problems into simple, meaningful experiences. I’m constantly learning and growing because I know that great products don’t happen by chance, they’re the result of focus, creativity, and teamwork.
              </p>
              
              <p className="text-lg">
                And yes, I definitely run on coffee and roadmaps.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-accent/20 rounded-lg transform -rotate-3"></div>
              <img
  src={AboutImage}
  alt="Varnica working"
  className="relative rounded-lg shadow-lg w-full object-cover z-10"
/>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">My Core Values</h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex">
                    <CheckCircle2 className="text-accent shrink-0 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8">Product Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Start with Why</h3>
              <p className="text-muted-foreground">
                Understanding the core purpose and user needs is crucial. Every feature 
                and decision should align with solving real problems and delivering value.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Iterate & Learn</h3>
              <p className="text-muted-foreground">
                I believe in rapid iteration and learning from real user feedback. 
                This approach helps us build better products faster and more efficiently.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Balance Stakeholders</h3>
              <p className="text-muted-foreground">
                Success comes from balancing user needs, business goals, and technical 
                constraints while maintaining clear communication with all stakeholders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;