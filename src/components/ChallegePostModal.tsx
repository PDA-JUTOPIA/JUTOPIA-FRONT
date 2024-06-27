import React, { useState } from "react";
import { setTimeout } from "timers";
import { createPost } from "~/apis/challengePost";
import type { IResReadPost } from "~/apis/challengePost";
import { readUserPost, readAllPost } from "~/apis/challengePost";

interface ChallengePostModalProps {
  onClose: () => void;
  challengeId: number;
  email: string;
  setPostData: React.Dispatch<React.SetStateAction<IResReadPost[] | null>>;
  postData: IResReadPost[];
  activeTab: string;
}

const ChallengePostModal: React.FC<ChallengePostModalProps> = ({
  onClose,
  challengeId,
  email,
  setPostData,
  postData,
  activeTab,
}) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...event.target.files]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(postData);
    submitFormData().catch((err) => {
      console.log(err);
    });
    onClose();
    setTimeout(() => {
      updatePosts().catch((err) => {
        console.log(err);
      });
    }, 1300);
  };

  const submitFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("challenge_post_text", content);
      formData.append("challenge_id", challengeId.toString());
      formData.append("email", email);

      images.forEach((image, index) => {
        formData.append(`photos`, image);
        console.log(index);
      });
      const response = await createPost(formData);
      console.log("Post created:", response);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-0"
      style={{ margin: "0" }}
    >
      <div className="relative mx-auto w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-bold">인증글 작성하기</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="rounded-lg border border-gray-300 p-2"
            rows={4}
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="rounded-lg border border-gray-300 p-2"
            multiple
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChallengePostModal;
