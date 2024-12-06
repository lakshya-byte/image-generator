import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  
  const {user , setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      console.log("Navigating to /result");
      navigate("/result");
    } else {
      console.log("User not logged in, showing login modal");
      console.log(setShowLogin); // Check if `setShowLogin` is defined
      setShowLogin && setShowLogin(true); // Safe call to avoid runtime errors
    }
  };
  
  return (
    <motion.div
      className="text-center py-16 bg-gradient-to-r from-purple-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 tracking-tight leading-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        See The Magic, <span className="text-purple-600">TRY NOW</span>
      </motion.h1>

      {/* Button */}
      <motion.button
      onClick={onClickHandler}
        className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl font-semibold rounded-full shadow-md"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Generate Images
        <motion.img
          src={assets.star_group}
          alt="Star Group"
          className="ml-3 h-6 w-6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
