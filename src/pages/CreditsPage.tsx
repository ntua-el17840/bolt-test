import React, { useState } from 'react';

const CreditsPage: React.FC = () => {
  const [credits, setCredits] = useState(100); // Mock initial credits
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const handlePurchase = () => {
    setCredits(credits + purchaseAmount);
    setPurchaseAmount(0);
    // Here you would typically call an API to update the user's credits
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Credits</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Balance</h2>
        <p className="text-3xl font-bold text-green-600">{credits} Credits</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Purchase Credits</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="number"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(parseInt(e.target.value))}
            className="border rounded py-2 px-3 w-full"
            placeholder="Enter amount"
          />
          <button
            onClick={handlePurchase}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Purchase
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Credits are free for demonstration purposes. In a real application, you would integrate with a payment system.
        </p>
      </div>
    </div>
  );
};

export default CreditsPage;