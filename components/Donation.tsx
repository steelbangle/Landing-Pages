import React, { useState } from 'react';
import { Copy, Check, QrCode, Sparkles } from 'lucide-react';
import { generateBlessing } from '../services/geminiService';

const TIERS = [
  { amount: 101, label: 'Shagun Seva', desc: 'One day fodder for a calf' },
  { amount: 501, label: 'Gau Gras', desc: 'Feed 5 cows for a day' },
  { amount: 1100, label: 'Chara Seva', desc: 'Weekly green fodder' },
  { amount: 2100, label: 'Aushadhi Seva', desc: 'Critical medicine kit' },
  { amount: 5100, label: 'Maha Dan', desc: 'Full care for a month' },
];

const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(501);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [showBlessing, setShowBlessing] = useState(false);
  const [blessingText, setBlessingText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('donate@gausevadham');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonate = async () => {
    if (!donorName.trim()) {
      alert("Please enter your name for the receipt/blessing.");
      return;
    }
    
    setLoading(true);
    setShowBlessing(true);
    
    // Simulate API delay + Gemini Generation
    const text = await generateBlessing(donorName, finalAmount);
    setBlessingText(text);
    setLoading(false);
  };

  return (
    <div id="donate" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-saffron-600 font-semibold tracking-wider uppercase text-sm">Divine Contribution</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 font-serif">Make a Donation, Earn Good Karma</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose an amount to support our holy mission. All donations are tax-exempt under 80G.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Donation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-saffron-500 rounded-full"></span>
              Choose Donation Amount
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {TIERS.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md
                    ${selectedAmount === tier.amount && !customAmount 
                      ? 'border-saffron-500 bg-orange-50 shadow-md ring-1 ring-saffron-500' 
                      : 'border-gray-200 bg-white hover:border-saffron-300'}`}
                >
                  <div className="text-lg font-bold text-gray-900">₹{tier.amount}</div>
                  <div className="text-xs text-saffron-700 font-medium mt-1">{tier.label}</div>
                  <div className="text-[10px] text-gray-500 mt-1 leading-tight">{tier.desc}</div>
                  {selectedAmount === tier.amount && !customAmount && (
                    <div className="absolute top-2 right-2 text-saffron-600">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  )}
                </button>
              ))}
              <div className="relative flex items-center">
                <input 
                  type="number" 
                  placeholder="Custom"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className={`w-full h-full rounded-xl border-2 p-4 text-lg font-bold outline-none transition-all
                    ${customAmount ? 'border-saffron-500 bg-orange-50 ring-1 ring-saffron-500' : 'border-gray-200 focus:border-saffron-400'}`}
                />
                <span className="absolute right-4 text-gray-400 text-sm font-medium">INR</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name (for Blessings)</label>
                <input 
                  type="text" 
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleDonate}
                  className="w-full bg-saffron-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-saffron-700 transition-all shadow-lg hover:shadow-saffron-500/40 transform hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center gap-2"
                >
                  {loading ? 'Processing...' : `Donate ₹${finalAmount} Now`}
                  {!loading && <HeartHandshakeIcon />}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Secure payment gateway. 80G receipt sent via email/WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-saffron-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
               {/* Pattern overlay */}
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
               <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
               
               <div className="text-center relative z-10">
                 <h3 className="text-xl font-bold mb-2">Scan to Donate via UPI</h3>
                 <p className="text-saffron-100 text-sm mb-6">PhonePe / GPay / Paytm</p>
                 
                 <div className="bg-white p-4 rounded-xl inline-block shadow-lg mb-6">
                   {/* Placeholder QR using an icon for demo purposes or a placeholder image */}
                   <img 
                     src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=donate@gausevadham&pn=GauSevaDham&am=0&cu=INR" 
                     alt="UPI QR Code" 
                     className="w-48 h-48 object-contain"
                   />
                 </div>

                 <div className="flex items-center justify-center gap-2 bg-black/20 rounded-lg p-2 max-w-xs mx-auto backdrop-blur-sm">
                   <code className="text-sm font-mono tracking-wide">donate@gausevadham</code>
                   <button onClick={handleCopyUPI} className="p-1.5 hover:bg-white/10 rounded-md transition-colors">
                     {copied ? <Check size={16} /> : <Copy size={16} />}
                   </button>
                 </div>
               </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <QrCode size={18} className="text-saffron-600"/>
                Bank Transfer Details
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Account Name:</span>
                  <span className="font-medium text-gray-900">Gau Seva Dham Trust</span>
                </div>
                <div className="flex justify-between">
                  <span>Account No:</span>
                  <span className="font-medium text-gray-900">XXXX-XXXX-9876</span>
                </div>
                <div className="flex justify-between">
                  <span>IFSC Code:</span>
                  <span className="font-medium text-gray-900">SBIN000XXXX</span>
                </div>
                <div className="flex justify-between">
                  <span>Branch:</span>
                  <span className="font-medium text-gray-900">Vrindavan, UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blessing Modal */}
      {showBlessing && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative overflow-hidden text-center shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setShowBlessing(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <Check size={24} />
            </button>
            
            <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4 text-saffron-600">
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saffron-600"></div>
              ) : (
                <Sparkles size={32} />
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">
              {loading ? "Receiving Blessings..." : "Thank You, " + donorName}
            </h3>
            
            <div className="mt-4 text-gray-600 italic text-lg leading-relaxed min-h-[100px] flex items-center justify-center">
              {loading ? (
                 <p className="animate-pulse">Connecting your soul to the sacred mission...</p>
              ) : (
                <p>"{blessingText}"</p>
              )}
            </div>

            {!loading && (
              <button
                onClick={() => setShowBlessing(false)}
                className="mt-6 w-full bg-saffron-600 text-white py-3 rounded-lg font-semibold hover:bg-saffron-700 transition-colors"
              >
                Accept Blessings
              </button>
            )}
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 z-[-1]"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-50 z-[-1]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper icon
const HeartHandshakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default Donation;
