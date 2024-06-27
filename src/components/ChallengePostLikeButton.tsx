import React, { useState } from "react";
import { SlHeart } from "react-icons/sl";
import { ImHeart } from "react-icons/im";

interface PostLikeProps {
  initialLikes: number;
}

const PostLike: React.FC<PostLikeProps> = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="flex cursor-pointer items-center" onClick={handleLikeClick}>
      {!liked ? (
        <SlHeart size={24} className="mr-2" />
      ) : (
        <ImHeart size={24} color="red" className="mr-2" />
      )}
      <span>{likesCount} Likes</span>
    </div>
  );
};

export default PostLike;
