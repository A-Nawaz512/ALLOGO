import React, { useState } from "react";

// Food Item Card Component - Simplified
const FoodItemCard = ({ img, name, price, onOrderClick }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-2xl"
      />
      
      {/* Always visible info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-[#FDC700] font-semibold">${price.toFixed(2)}</p>
      </div>

      {/* Overlay with Order Button */}
      <div 
        className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center transition-all duration-300 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent any parent event
            console.log("Button clicked for:", name);
            onOrderClick();
          }}
          className="bg-[#FDC700] text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 active:scale-95 transition-all duration-200 shadow-lg"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

// Order Modal Component
const OrderModal = ({ name, price, closeModal }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const commission = price * 0.05;
  const total = (price * quantity) + commission;

  const handleConfirmDelivery = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={closeModal} // Close when clicking outside
    >
      <div 
        className="bg-white rounded-2xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>

        {!isConfirmed ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Order {name}</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Price:</span>
                <span>${price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded bg-gray-200"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-8 h-8 rounded bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${(price * quantity).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Commission (5%):</span>
                <span>${(commission * quantity).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total:</span>
                <span className="text-[#CA9249]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button
                onClick={closeModal}
                className="flex-1 border border-gray-300 py-3 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelivery}
                className="flex-1 bg-[#FDC700] text-black font-bold py-3 rounded-lg hover:bg-yellow-500"
              >
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed!</h3>
            <p>Your {name} is on its way!</p>
            <p className="text-sm text-gray-500 mt-4">Total: ${total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const FoodMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const foodItems = [
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      name: "Cheeseburger",
      price: 8.99,
    },
    {
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      name: "Pizza Slice",
      price: 12.5,
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg",
      name: "Fast Food Combo",
      price: 15.0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_1280.jpg",
      name: "Healthy Salad",
      price: 9.5,
    },
  ];

  const handleOrderClick = (item) => {
    console.log("Opening modal for:", item.name);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#CA9249]">
          Food Menu
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <FoodItemCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              onOrderClick={() => handleOrderClick(item)}
            />
          ))}
        </div>

        {modalOpen && selectedItem && (
          <OrderModal
            name={selectedItem.name}
            price={selectedItem.price}
            closeModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default FoodMenu;