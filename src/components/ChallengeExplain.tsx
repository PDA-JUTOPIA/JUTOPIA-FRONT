import React, { useState, useEffect } from "react";
import Image from "next/image";
import image from "/public/bgimage.jpg";
import PostCard from "./ChallengePostCard";
import ChallengePostModal from "./ChallegePostModal";
import { readAllRecurit, IResChallengeRecruit } from "~/apis/challenge";

const ChallengeExplain: React.FC = () => {
  const [activeTab, setActiveTab] = useState("내 인증 현황");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [challenges, setChallenges] = useState<IResChallengeRecruit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const fetchedChallenges = await readAllRecurit();
        setChallenges(fetchedChallenges);
      } catch (error) {
        console.error("Error fetching challenges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []); // [] 안에 의존성 배열을 빈 배열로 설정하여 한 번만 데이터를 로드하도록 설정

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "내 인증 현황":
        return (
          <div className="flex flex-col space-y-4">
            <PostCard
              userName="윤경"
              userAvatar="/Reward/chart.svg"
              postTime="2024-06-23"
              postContent="챌린지 인증용 UI"
              postImages={["/Reward/coin1.svg", "/Reward/coin2.svg"]}
              commentsCount={4}
              likesCount={3}
            />
          </div>
        );
      case "참가자 인증 현황":
        return (
          <div className="flex flex-col space-y-4">
            <ul>
              {challenges.map((challenge) => (
                <li key={challenge.challenge_id}>
                  <h3>{challenge.challenge_name}</h3>
                  <p>{challenge.challenge_detail}</p>
                  <p>Start: {challenge.challenge_start}</p>
                  <p>End: {challenge.challenge_end}</p>
                  {/* 필요한 정보들을 활용하여 UI를 구성 */}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-6 bg-gray-100 p-6 lg:flex-row lg:space-x-6 lg:space-y-0">
      <div className="flex flex-col space-y-6 rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
        <div className="flex flex-col items-center justify-between space-y-4">
          <h1 className="text-5xl font-medium text-slate-900">클릭한 챌린지</h1>
          <Image
            src={image}
            alt="Background Image"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="text-center text-3xl font-bold text-gray-600 lg:text-left">
          주식 어린이, 주린이를 탈출합시다! 꾸준히 참여만 해도 주식 바보
          탈출하기 챌린지😄
        </div>
        <div>
          <p className="text-center text-sm text-slate-500 lg:text-left">
            🔥주토피아 자체 제공하는 챌린지입니다.
          </p>
          <button
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleModalOpen}
          >
            인증글 작성하기
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="mb-4 flex space-x-4">
          <button
            className={`rounded-lg px-4 py-2 shadow-md transition-transform duration-300 ${
              activeTab === "내 인증 현황"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick("내 인증 현황")}
          >
            내 인증 현황
          </button>
          <button
            className={`rounded-lg px-4 py-2 shadow-md transition-transform duration-300 ${
              activeTab === "참가자 인증 현황"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick("참가자 인증 현황")}
          >
            참가자 인증 현황
          </button>
        </div>
        <div
          className="scroll-box flex flex-col space-y-4 rounded-lg bg-white p-5 shadow-lg"
          style={{ height: "75vh" }}
        >
          {renderTabContent()}
        </div>
      </div>

      {isModalOpen && <ChallengePostModal onClose={handleModalClose} />}
    </div>
  );
};

export default ChallengeExplain;
