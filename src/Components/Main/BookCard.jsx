import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const BookCard = ({ book,isFavorite }) => {
  const { id, title, author, thumbnail, price, rating, favorite } = book;
  return (
    <div className="space-y-3">
      {/* thumbnail */}
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={thumbnail} alt="book name" />
      </div>
      {/* info */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{title}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          {/* stars */}
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
          {/* stars ends */}
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <LuShoppingCart />
            Add to Cart
          </button>
          <button onClick={()=>isFavorite(id)} className={favorite?"flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5":"flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"}>
            {favorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
