
// props.item = { _id, image, price, name, recipe }
// Renders a card with image, top-right price badge, title, description and an Add to Cart button

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item || {};
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  
  
  
  const handleAddToCart = () => {
    console.log('handleAddToCart called');
    console.log('User:', user);
    console.log('User email:', user?.email);
    
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        name,
        image,
        price,
        email: user.email
      };
      
      console.log('Sending cart item:', cartItem);
      console.log('Using axiosSecure:', axiosSecure);
      
      // Use secure axios instance to POST cart item
      axiosSecure.post('/carts', cartItem)
        .then(response => {
          console.log('Response received:', response);
          console.log('Response data:', response.data);
          
          // server could return insertedId or acknowledgement
          const data = response.data || {};
          if (data.insertedId || data.acknowledged) {
            Swal.fire({
              icon: 'success',
              title: 'Added to Cart',
              text: `${name} has been added to your cart.`,
              confirmButtonColor: '#D1A054'
            });
          } else {
            // fallback success message
            Swal.fire({
              icon: 'success',
              title: 'Added to Cart',
              text: `${name} was processed.`,
              confirmButtonColor: '#D1A054'
            });
          }
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
          console.error('Error response:', error.response);
          console.error('Error message:', error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an issue adding the item to your cart. Please try again later.',
            confirmButtonColor: '#D1A054'
          });
        });
      
  }
  else {
    // Show login prompt when user is not logged in
    Swal.fire({
            icon: 'warning',
            title: 'You are not logged in',
            text: 'Please login to add items to cart.',
            showCancelButton: true,
            confirmButtonColor: '#D1A054',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Login Now',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', { state: { from: location } });
            }
          });
  }
}


  return (
    <div className="bg-white overflow-hidden flex flex-col shadow-sm">
      {/* Image with price badge */}
      <div className="relative h-56 md:h-60 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-slate-900 text-white text-sm font-semibold px-3 py-1 rounded shadow">
          ${price}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-gray-50 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-center mb-3">{name}</h3>
        <p className="text-gray-600 text-sm text-center leading-relaxed flex-1">{recipe}</p>

        <div className="mt-6 flex justify-center">
          <button
            
            onClick={handleAddToCart}
            className="
              inline-flex items-center justify-center cursor-pointer
              px-8 h-12 rounded-md
              bg-gray-100 text-yellow-700
              border-0 border-b-4 border-yellow-600
              shadow-sm
              transition-colors duration-200
              hover:bg-slate-900 hover:text-yellow-400
            "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
