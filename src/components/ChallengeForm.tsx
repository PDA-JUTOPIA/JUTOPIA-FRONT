// components/ChallengeForm.tsx
import React from "react";

interface ChallengeFormProps {
  formData: {
    challenge_name: string;
    challenge_detail: string;
    challenge_total: string;
    challenge_thumbnail: File | null;
    challenge_recurit_start: string;
    challenge_recurit_end: string;
    challenge_start: string;
    challenge_end: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({
  formData,
  onChange,
  onFileChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ fontFamily: "TTLaundryGothicB" }}
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">챌린지 등록</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="mb-1 block text-gray-700">챌린지 이름</label>
            <input
              type="text"
              name="challenge_name"
              value={formData.challenge_name}
              onChange={onChange}
              className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-gray-700">챌린지 설명</label>
            <textarea
              name="challenge_detail"
              value={formData.challenge_detail}
              onChange={onChange}
              className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-gray-700">Challenge Total</label>
            <input
              id="challenge_total"
              name="challenge_total"
              type="number"
              value={formData.challenge_total}
              onChange={onChange}
              className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-gray-700">챌린지 썸네일</label>
            <input
              type="file"
              name="challenge_thumbnail"
              accept="image/*"
              onChange={onFileChange}
              className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-gray-700">모집 시작 날짜</label>
              <input
                type="date"
                name="challenge_recurit_start"
                value={formData.challenge_recurit_start}
                onChange={onChange}
                className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-gray-700">모집 종료 날짜</label>
              <input
                type="date"
                name="challenge_recurit_end"
                value={formData.challenge_recurit_end}
                onChange={onChange}
                className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-gray-700">
                챌린지 시작 날짜
              </label>
              <input
                type="date"
                name="challenge_start"
                value={formData.challenge_start}
                onChange={onChange}
                className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-gray-700">
                챌린지 종료 날짜
              </label>
              <input
                type="date"
                name="challenge_end"
                value={formData.challenge_end}
                onChange={onChange}
                className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChallengeForm;
