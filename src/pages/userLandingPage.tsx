import { useState } from 'react';
import { Cake, Gift, PartyPopper, Sparkles } from 'lucide-react';

export default function BirthdayApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [cakeSliced, setCakeSliced] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.toLowerCase() === 'anuvinda' && dob === '2002-12z-04') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid name or date of birth!');
    }
  };

  const handleCakeCut = () => {
    setCakeSliced(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-8">
            <Cake className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Birthday Login</h1>
            <p className="text-gray-600">Enter your details to celebrate!</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Let's Celebrate! 🎉
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {confetti && (
        <>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Sparkles className="text-yellow-300" size={20} />
            </div>
          ))}
        </>
      )}
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Happy Birthday, Anuvinda! 🎂
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <PartyPopper className="text-yellow-300 animate-bounce" size={40} />
            <Gift className="text-pink-300 animate-bounce delay-100" size={40} />
            <PartyPopper className="text-yellow-300 animate-bounce delay-200" size={40} />
          </div>
          <p className="text-2xl text-white font-semibold">
            December 4, 2002
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {cakeSliced ? "Enjoy Your Cake! 🍰" : "Time to Cut the Cake!"}
            </h2>
          </div>

          <div className="relative flex justify-center items-center mb-8">
            <div className={`transition-all duration-500 ${cakeSliced ? 'scale-110' : 'scale-100'}`}>
              <svg width="300" height="300" viewBox="0 0 200 200">
                {/* Cake layers */}
                <ellipse cx="100" cy="150" rx="80" ry="15" fill="#8B4513" />
                <rect x="20" y="100" width="160" height="50" fill="#D2691E" rx="5" />
                <ellipse cx="100" cy="100" rx="80" ry="15" fill="#8B4513" />
                <rect x="30" y="70" width="140" height="30" fill="#F4A460" rx="5" />
                <ellipse cx="100" cy="70" rx="70" ry="12" fill="#D2691E" />
                
                {/* Frosting */}
                <path d="M 30 70 Q 40 65, 50 70 T 70 70 T 90 70 T 110 70 T 130 70 T 150 70 T 170 70" 
                      stroke="#FFB6C1" strokeWidth="8" fill="none" />
                
                {/* Candles */}
                {!cakeSliced && (
                  <>
                    <rect x="75" y="40" width="8" height="30" fill="#FF6B6B" rx="2" />
                    <rect x="95" y="35" width="8" height="35" fill="#4ECDC4" rx="2" />
                    <rect x="115" y="40" width="8" height="30" fill="#FFE66D" rx="2" />
                    
                    {/* Flames */}
                    <ellipse cx="79" cy="37" rx="6" ry="8" fill="#FFA500" opacity="0.8">
                      <animate attributeName="ry" values="8;10;8" dur="0.5s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="99" cy="32" rx="6" ry="8" fill="#FFA500" opacity="0.8">
                      <animate attributeName="ry" values="8;10;8" dur="0.6s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="119" cy="37" rx="6" ry="8" fill="#FFA500" opacity="0.8">
                      <animate attributeName="ry" values="8;10;8" dur="0.7s" repeatCount="indefinite" />
                    </ellipse>
                  </>
                )}
                
                {/* Slice cut */}
                {cakeSliced && (
                  <>
                    <line x1="100" y1="70" x2="130" y2="150" stroke="#fff" strokeWidth="3" />
                    <path d="M 100 70 L 130 150 L 130 100 Z" fill="#D2691E" opacity="0.8" />
                  </>
                )}
              </svg>
            </div>
          </div>

          {!cakeSliced ? (
            <button
              onClick={handleCakeCut}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Cut the Cake! 🎂🔪
            </button>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-2xl font-semibold text-gray-800 animate-bounce">
                🎉 Congratulations! 🎉
              </p>
              <p className="text-lg text-gray-600">
                Wishing you a wonderful year ahead filled with joy, success, and amazing memories!
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <span className="text-4xl animate-bounce">🎈</span>
                <span className="text-4xl animate-bounce delay-100">🎁</span>
                <span className="text-4xl animate-bounce delay-200">🎊</span>
                <span className="text-4xl animate-bounce delay-300">🎉</span>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-lg font-semibold drop-shadow-lg">
            May all your wishes come true! ✨
          </p>
        </div>
      </div>
    </div>
  );
}