import React, { useState } from 'react';
import { Copy, Check, QrCode, Sparkles, Heart, Sprout, Home, Stethoscope, Crown } from 'lucide-react';
import { generateBlessing } from '../services/geminiService';

const TIERS = [
  { amount: 101, label: 'Shagun Seva', desc: 'One day fodder for a calf', icon: Sprout },
  { amount: 501, label: 'Gau Gras', desc: 'Feed 5 cows for a day', icon: Heart, popular: false },
  { amount: 1100, label: 'Aushadhi Seva', desc: 'Medicine for injured cow', icon: Stethoscope, popular: true },
  { amount: 2100, label: 'Chara Seva', desc: 'Week of green fodder', icon: Crown },
  { amount: 5100, label: 'Gau Raksha', desc: 'Complete care for a month', icon: Home },
];

const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1100);
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
      alert("Please enter your name so we can send you blessings.");
      return;
    }
    
    setLoading(true);
    setShowBlessing(true);
    
    const text = await generateBlessing(donorName, finalAmount);
    setBlessingText(text);
    setLoading(false);
  };

  return (
    <div id="donate" className="py-20 bg-saffron-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="bg-white px-4 py-1.5 rounded-full text-saffron-700 font-bold tracking-wider uppercase text-xs shadow-sm border border-orange-100">
            Earn Good Karma
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 font-serif">
            Choose Your Offering
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            "The cow is the mother of all; she gives everything and asks for nothing." <br/>
            <span className="italic text-saffron-700 font-medium">Your contribution today is a direct service to the Divine.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Donation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-orange-100 p-6 md:p-8 relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              Select Amount
              <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">80G Tax Exempt</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {TIERS.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group
                    ${selectedAmount === tier.amount && !customAmount 
                      ? 'border-saffron-500 bg-orange-50/50 shadow-lg scale-[1.02]' 
                      : 'border-gray-100 bg-white hover:border-saffron-300 hover:shadow-md'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-saffron-500 to-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <tier.icon className={`w-6 h-6 ${selectedAmount === tier.amount ? 'text-saffron-600' : 'text-gray-400 group-hover:text-saffron-500'}`} />
                    {selectedAmount === tier.amount && !customAmount && <Check size={18} className="text-saffron-600" strokeWidth={3} />}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹{tier.amount}</div>
                  <div className="text-sm font-semibold text-saffron-700 mt-1">{tier.label}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">{tier.desc}</div>
                </button>
              ))}
              
              {/* Custom Amount */}
              <div className="relative flex items-center h-full">
                <input 
                  type="number" 
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className={`w-full h-full min-h-[120px] rounded-2xl border-2 p-4 text-xl font-bold outline-none transition-all
                    ${customAmount ? 'border-saffron-500 bg-orange-50 shadow-md' : 'border-gray-100 focus:border-saffron-400'}`}
                />
                <span className="absolute right-4 top-4 text-gray-400 text-xs font-bold uppercase tracking-wider">INR</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name of the Donor (For Prayers)</label>
                <input 
                  type="text" 
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all font-medium"
                />
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-saffron-600 to-orange-700 text-white py-4 rounded-xl text-xl font-bold hover:from-saffron-700 hover:to-orange-800 transition-all shadow-xl shadow-saffron-500/30 transform hover:-translate-y-1 active:scale-[0.98] flex justify-center items-center gap-3"
                >
                  {loading ? 'Processing...' : (
                    <>
                      <span>Donate ₹{finalAmount}</span>
                      <HeartHandshakeIcon />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><ShieldIcon size={12}/> 100% Secure Payment</span>
                  <span className="flex items-center gap-1"><FileIcon size={12}/> Tax Deductible (80G)</span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden border border-gray-700">
               {/* Pattern overlay */}
               <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-saffron-500/20 rounded-full blur-3xl"></div>
               
               <div className="text-center relative z-10">
                 <h3 className="text-2xl font-bold mb-2 font-serif text-saffron-100">Direct Bank Transfer</h3>
                 <p className="text-gray-400 text-sm mb-6">Scan via any UPI App</p>
                 
                 <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
                   <img 
                     src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=donate@gausevadham&pn=GauSevaDham&am=0&cu=INR" 
                     alt="UPI QR Code" 
                     className="w-56 h-56 object-contain"
                   />
                 </div>

                 <div className="flex flex-col items-center gap-3">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">UPI ID</p>
                    <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3 w-full max-w-xs backdrop-blur-sm border border-white/10">
                        <code className="text-lg font-mono tracking-wide text-saffron-200">donate@gausevadham</code>
                        <button onClick={handleCopyUPI} className="p-2 hover:bg-white/20 rounded-md transition-colors text-white">
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                    </div>
                 </div>
               </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200/60 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <QrCode size={20} className="text-saffron-600"/>
                Bank Details (For NEFT/RTGS)
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-orange-200 pb-2">
                  <span className="text-gray-500">Account Name</span>
                  <span className="font-bold">Gau Seva Dham Trust</span>
                </div>
                <div className="flex justify-between border-b border-orange-200 pb-2">
                  <span className="text-gray-500">Account No</span>
                  <span className="font-mono font-bold">1234 5678 9012</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-500">IFSC Code</span>
                  <span className="font-mono font-bold">SBIN0001234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blessing Modal */}
      {showBlessing && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 md:p-12 relative overflow-hidden text-center shadow-2xl animate-fade-in-up border-4 border-saffron-100">
            <button 
              onClick={() => setShowBlessing(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <Check size={20} />
            </button>
            
            <div className="w-20 h-20 bg-saffron-50 rounded-full flex items-center justify-center mx-auto mb-6 text-saffron-600 ring-4 ring-saffron-100">
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saffron-600"></div>
              ) : (
                <Sparkles size={40} />
              )}
            </div>

            <h3 className="text-3xl font-bold text-gray-900 font-serif mb-3">
              {loading ? "Receiving Blessings..." : "Dhanyavad, " + donorName}
            </h3>
            
            <div className="mt-6 mb-8 text-gray-700 italic text-xl leading-relaxed font-serif min-h-[120px] flex items-center justify-center bg-orange-50/50 p-6 rounded-xl border border-orange-100">
              {loading ? (
                 <p className="animate-pulse text-sm text-gray-400 tracking-wider uppercase">Connecting your soul to the sacred mission...</p>
              ) : (
                <p>"{blessingText}"</p>
              )}
            </div>

            {!loading && (
              <button
                onClick={() => setShowBlessing(false)}
                className="w-full bg-saffron-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-saffron-700 transition-colors shadow-lg"
              >
                Accept Blessings & Close
              </button>
            )}
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl z-[-1]"></div>
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-saffron-500/20 rounded-full blur-2xl z-[-1]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Icons
const HeartHandshakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
const ShieldIcon = ({size}: {size: number}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
)
const FileIcon = ({size}: {size: number}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
)

export default Donation;