import { motion } from 'framer-motion';

interface ProfilePolaroidProps {
  imageUrl?: string;
  alt?: string;
}

export default function ProfilePolaroid({ 
  imageUrl = "/karuna-portfolio/portfolio.jpg", 
  alt = "Karuna Guglani" 
}: ProfilePolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
      animate={{ opacity: 1, rotate: 2, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative group"
      whileHover={{ 
        rotate: 0, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Polaroid Frame */}
      <div className="bg-white p-4 pb-16 shadow-2xl transform rotate-2 transition-all duration-500 rounded-sm border-2 border-gray-100 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-8 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-4 w-1 h-1 bg-pink-400 rounded-full opacity-50 animate-pulse delay-700"></div>
        {/* Image Container */}
        <div className="w-48 h-56 bg-muted rounded-sm overflow-hidden relative shadow-inner group/image">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {/* Original overlay - no color changes */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
          
          {/* Shimmer effect on hover only */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
        
        {/* Polaroid Caption */}
        <div className="mt-4 text-center relative z-10">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-black font-handwriting text-xl relative z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Hi! I am
              </motion.span>
              <br />
              <motion.span 
                className="text-black font-bold text-2xl tracking-wide group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Karuna Guglani
              </motion.span>
            </p>
            
            {/* Animated decorative underline */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            ></motion.div>
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-150 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative tape */}
      <div className="absolute -top-2 left-8 w-16 h-8 bg-yellow-200/80 transform -rotate-12 shadow-sm rounded-sm opacity-70" />
      <div className="absolute -top-2 right-8 w-16 h-8 bg-yellow-200/80 transform rotate-12 shadow-sm rounded-sm opacity-70" />
    </motion.div>
  );
}