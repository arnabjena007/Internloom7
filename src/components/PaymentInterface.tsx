import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const PaymentInterface = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    console.log('Payment submitted:', { paymentMethod, cardNumber, expiryDate, cvv });
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>
      
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Payment Method</label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md ${
                  paymentMethod === 'credit_card'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setPaymentMethod('credit_card')}
              >
                Credit Card
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md ${
                  paymentMethod === 'paypal'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                PayPal
              </button>
            </div>
          </div>

          {paymentMethod === 'credit_card' && (
            <>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="expiryDate"
                      className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="cvv"
                      className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {paymentMethod === 'paypal' && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You will be redirected to PayPal to complete your payment.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInterface;