import React from 'react'
import { motion } from 'framer-motion';
import profilepic from "../assets/images/profilepic.png";


export const Hero = () => {
    return (
        <div className="relative overflow-clip min-h-screen text-white bg-gradient-to-b from-black via-[#071E18_35%] to-[#208A65_85%]">
            <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] border-[1px] border-[#8cd6de]/30" style={{ background: "radial-gradient(closest-side, #000 85%, #249974)" }} />
            <div className="container relative mx-auto px-4 pt-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-8 mt 24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
                        <img
                            src={profilepic}
                            alt="Harsh"
                            className="w-[250px] relative z-10"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
                            Hi, I am <br /> Harsh <span className="text-emerald-400">Kumar</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                            I am a fullsstack developer focusing on creating websites that provides user with best experience.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors"
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
                            >
                                View Work
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0], }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
                    />

                </div>
            </div>
        </div>
    )
}