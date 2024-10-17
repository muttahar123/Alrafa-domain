import { mastercard, visa } from "../assets/icons";

function CheckOut() {
    return (
     
    
        <div className="flex-col w-full max-w-md h-auto sm:h-[500px] absolute bg-white inset-0 m-auto p-4 sm:p-10 shadow-lg">
          <span className="close cursor-pointer text-gray-400 text-xl self-end">X</span>
          <h1 className="text-2xl text-gray-400 mb-4">Personal Information</h1>
  
          <label className="text-sm font-light">Name and Surname</label>
          <input
            type="text"
            placeholder="John Doe"
            className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
          />
  
          <label className="text-sm font-light">Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 333 5678"
            className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
          />
  
          <label className="text-sm font-light">Address</label>
          <input
            type="text"
            placeholder="Elton St 21 22-145"
            className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
          />
  
          <h1 className="text-2xl text-gray-400 mb-4">Card Information</h1>
  
          <div className="flex space-x-2 mb-4">
            <img src={mastercard} width="40" alt="Mastercard" className="card-icon" />
            <img src={visa} width="40" alt="Visa" className="card-icon" />
          </div>
  
          <input
            type="password"
            placeholder="Card Number"
            className="pay-input border-b border-gray-400 p-2 focus:outline-none focus:border-gray-600 mb-4 w-full"
          />
  
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="mm"
              className="pay-input border-b border-gray-400 p-2 w-16 focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              placeholder="yyyy"
              className="pay-input border-b border-gray-400 p-2 w-20 focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              placeholder="cvv"
              className="pay-input border-b border-gray-400 p-2 w-16 focus:outline-none focus:border-gray-600"
            />
          </div>
  
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full">
            Checkout!
          </button>
        </div>
      
    );
  }
  
  export default CheckOut;
  