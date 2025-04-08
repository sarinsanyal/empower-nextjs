export default function PremiumPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background/0 p-6">
        {/* Card Container */}
        <div className=" backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-md text-center border bg-background/50 border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900">Premium Membership</h1>
          <p className="mt-4 text-lg text-gray-700">
            Unlock exclusive features with EmPower Journal Premium!
          </p>
  
          {/* Feature List */}
          <ul className="mt-6 space-y-3 text-gray-600 text-left">
            <li>✅ Access to advanced journaling tools</li>
            <li>✅ Personalized analytics & insights</li>
            <li>✅ Cloud storage for your journal entries</li>
            <li>✅ Priority Psychologists' support </li>
          </ul>
  
          {/* Upgrade Button */}
          <button className="mt-6 px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Upgrade to Premium
          </button>
        </div>
      </div>
    );
  }
  
  