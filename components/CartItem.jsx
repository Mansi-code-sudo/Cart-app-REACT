import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";



const CartItem = ({item,itemIndex}) => {


  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}><MdDelete /></div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
