import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    title: "Share Your Feelings",
<<<<<<< HEAD
    description: "Express ideas candidly to encourage open dialogue and mutual respect.",
=======
    description: "Express yourself openly and connect emotionally.",
>>>>>>> 5a67afcaeee5919aec1b32148713b4c3d372c48c
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3917/3917754.png",
    title: "Start New Chat",
<<<<<<< HEAD
    description: "Strengthen personal bonds through seamless communication.",
=======
    description: "Reach out to your loved ones instantly.",
>>>>>>> 5a67afcaeee5919aec1b32148713b4c3d372c48c
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/10356/10356717.png",
    title: "Stay Connected",
    description: "Keep the conversations going, anytime, anywhere.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/9132/9132294.png",
    title: "Group Conversations",
<<<<<<< HEAD
    description: "Connect with your team or friends in one organized space.",
=======
    description: "Chat together with friends in a single space.",
>>>>>>> 5a67afcaeee5919aec1b32148713b4c3d372c48c
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, type: "spring", bounce: 0.3 }
  },
};

const ConnectAndChat = () => {
  return (
    <div className="min-h-[28rem] bg-transparent py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#3D8E61] font-semibold text-center mb-12">
        Express Yourself Freely
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-24 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
<<<<<<< HEAD
              <p className="text-gray-400 text-sm font-semibold">{card.description}</p>
=======
              <p className="text-gray-600 text-sm">{card.description}</p>
>>>>>>> 5a67afcaeee5919aec1b32148713b4c3d372c48c
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectAndChat;
