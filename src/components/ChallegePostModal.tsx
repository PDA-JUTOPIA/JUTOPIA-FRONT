import React, { useState } from "react";

interface ChallengePostModalProps {
  onClose: () => void;
}

const ChallengePostModal: React.FC<ChallengePostModalProps> = ({ onClose }) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...event.target.files]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      content,
      images,
    });
    onClose(); // Close the modal after submission
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
