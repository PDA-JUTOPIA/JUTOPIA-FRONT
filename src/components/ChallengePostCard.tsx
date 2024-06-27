import React from "react";
import Image from "next/image";
import CommentLikeSection from "./ChallengePostCommentLikeSection";
import OverflowMenu from "./ChallengeOverflowMenu";
import { deletePost } from "~/apis/challengePost";
import { useBoundStore } from "~/hooks/useBoundStore";
import type { IResReadPost } from "~/apis/challengePost";
import { readUserPost, readAllPost } from "~/apis/challengePost";

interface PostCardProps {
  userName: string;
  userAvatar: string;
  postTime: string;
  postContent: string;
  postImages: string[];
  challengePostId: number;
  likesCount: number;
  setPostData: React.Dispatch<React.SetStateAction<IResReadPost[] | null>>;
  postData: IResReadPost[];
  activeTab: string;
  challengeId: number;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  userAvatar,
  postTime,
  postContent,
  postImages,
  challengePostId,
  likesCount,
  setPostData,
  postData,
  activeTab,
  challengeId,
}) => {
  const email = useBoundStore((x) => x.email);

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    //삭제 api 합체
    deletePostDo().catch((err) => {
      console.log(err);
    });

    setTimeout(() => {
      updatePosts().catch((err) => {
        console.log(err);
      });
      console.log(postData);
    }, 1300);
  };
  const deletePostDo = async () => {
    const resp = await deletePost(challengePostId, email);
    console.log(resp);
  };

  const updatePosts = async () => {
    try {
      if (activeTab === "내 인증 현황") {
        const resp = await readUserPost(challengeId, email);
        setPostData(resp.posts);
      } else if (activeTab === "참가자 인증 현황") {
        const resp = await readAllPost(challengeId);
        setPostData(resp.posts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl bg-white shadow-md">
      <div className="flex items-center p-4">
        <Image
          className="rounded-full"
          src={userAvatar}
          alt={`${userName}'s avatar`}
          width={40}
          height={40}
        />
        <div className="ml-4 flex flex-1 items-center justify-between">
          <div>
            <div className="text-lg font-medium">{userName}</div>
            <div className="text-sm text-gray-500">{postTime}</div>
          </div>
          <OverflowMenu onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
      <div className="px-4">
        <p className="text-gray-700">{postContent}</p>
        <div className="-mx-1 mt-4 flex flex-wrap">
          {postImages.map((image, index) => (
            <div key={index} className="w-1/2 p-1">
              <Image
                className="rounded-md object-cover"
                src={image}
                alt={`Post image ${index + 1}`}
                width={300}
                height={128}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-2">
        <CommentLikeSection
          challengePostId={challengePostId}
          initialLikes={likesCount}
        />
      </div>
    </div>
  );
};

export default PostCard;
