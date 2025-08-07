import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onLikeClick: () => void;
}

const Like = ({ onLikeClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onLikeClick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );
  else
    return (
      <AiOutlineHeart
        color="#ff6b81"
        size={20}
        onClick={toggle}
      ></AiOutlineHeart>
    );
};

export default Like;
