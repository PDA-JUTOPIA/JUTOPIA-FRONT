import React, { useState } from "react";
import Image from "next/image";
import PostLike from "./ChallengePostLikeButton";
import { readComment, createComment } from "~/apis/challengePostComment";
import type { IResComment } from "~/apis/challengePostComment";
import { getUserIdByEmail } from "~/apis/user";
import { useBoundStore } from "~/hooks/useBoundStore";

interface CommentLikeSectionProps {
  challengePostId: number;
  initialLikes: number;
}

const CommentLikeSection: React.FC<CommentLikeSectionProps> = ({
  challengePostId,
  initialLikes,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsCount, setCommentsCount] = useState(0);
  const [data, setData] = useState<IResComment[] | null>(null);
  const email = useBoundStore((x) => x.email);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentUpload = () => {
    if (!comment.trim()) return;

    craeteCommentData().catch((err) => {
      console.log(err);
    });

    setComment("");
    setCommentsCount(commentsCount + 1);
  };

  const craeteCommentData = async () => {
    try {
      const userId = await getUserIdByEmail(email);
      const response = await createComment(
        userId.userId,
        challengePostId,
        comment,
      );
      console.log(response.challenge_post_comment_id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentUpload();
    }
  };

  const toggleComments = () => {
    // 댓글 조회
    readCommentData().catch((err) => {
      console.log(err);
    });

    setShowComments(!showComments);
  };

  const readCommentData = async () => {
    try {
      const response = await readComment(challengePostId);
      setCommentsCount(response.length);
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2 py-4">
        <div
          className="flex cursor-pointer items-center"
          onClick={toggleComments}
        >
          <Image
            className="mr-2"
            src="/challenge/comment.png"
            alt="Comments"
            width={24}
            height={24}
          />
          <span>{commentsCount} Comments</span>
        </div>
        <PostLike initialLikes={initialLikes} />
      </div>
      {showComments && data && (
        <div className="px-4 py-1">
          <div className="mb-2 rounded-md bg-gray-100 p-2">
            {data.map((comment) => (
              <div key={comment.challenge_post_comment_id}>
                <div>{comment.challenge_post_comment_text}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center rounded-md border border-gray-300 p-2">
        <input
          className="w-full border-none focus:outline-none"
          type="text"
          placeholder="Write comment"
          value={comment}
          onChange={handleCommentChange}
          onKeyPress={handleKeyPress}
        />
        <div className="ml-2 cursor-pointer" onClick={handleCommentUpload}>
          <Image
            src="/challenge/comment-upload.png"
            alt="Upload Comment"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentLikeSection;
