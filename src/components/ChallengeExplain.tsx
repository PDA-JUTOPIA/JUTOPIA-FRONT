import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostCard from "./ChallengePostCard";
import ChallengePostModal from "./ChallegePostModal";
import { joinRecurit, isInChallenge } from "~/apis/challenge";
import { useBoundStore } from "~/hooks/useBoundStore";
// import { readAllRecurit, IResChallengeRecruit } from "~/apis/challenge";
import { getUserIdByEmail } from "~/apis/user";

interface ChallengeExplainProps {
  challenge: {
    challenge_id: number;
    challenge_name: string;
    challenge_detail: string;
    challenge_thumbnail: string;
    challenge_total: number;
    challenge_recurit_start: string;
    challenge_recurit_end: string;
    challenge_start: string;
    challenge_end: string;
    createdAt: string;
    updatedAt: string;
  };
}

const ChallengeExplain: React.FC<ChallengeExplainProps> = ({ challenge }) => {
  const [activeTab, setActiveTab] = useState("내 인증 현황");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showJoinState, setShowJoinState] = useState(false);
  const email = useBoundStore((x) => x.email);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    //이미 참여중인지 상태 확인.
    const fetchUserId = async () => {
      try {
        console.log(userId); //타입 에러 때문에 찍음
        const id = await getUserIdByEmail(email);
        setUserId(id.userId);
        return id.userId;
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    // 가져온 userid로 참여중인지 확인
    const checkStatus = async (userId: number) => {
      try {
        const check = await isInChallenge(userId, challenge.challenge_id);
        setShowJoinState(check.status);
      } catch (error) {
        console.error("Error fetching challenge status:", error);
      }
    };

    fetchUserId()
      .then((userId) => {
        if (userId) {
          checkStatus(userId).catch((err) => {
            console.log(err);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  // [] 안에 의존성 배열을 빈 배열로 설정하여 한 번만 데이터를 로드하도록 설정
  const handleJoinChallenge = () => {
    joinChallenge().catch((err) => {
      console.log(err);
    });

    setShowJoinState(!showJoinState);
  };
  const joinChallenge = async () => {
    //챌린지 참가
    const resp = await joinRecurit(email, challenge.challenge_id);
    setUserId(resp.user_id);
  };

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
              postImages={["/Reward/coin1.svg"]}
              challengePostId={1}
              likesCount={3}
            />
          </div>
        );
      case "참가자 인증 현황":
        return (
          <div className="flex flex-col space-y-4">
            <PostCard
              userName="윤경"
              userAvatar="/Reward/chart.svg"
              postTime="2024-06-23"
              postContent="챌린지 인증용 UI"
              postImages={["/Reward/coin1.svg"]}
              challengePostId={1}
              likesCount={3}
            />
            <PostCard
              userName="윤경"
              userAvatar="/Reward/chart.svg"
              postTime="2024-06-23"
              postContent="챌린지 인증용 UI"
              postImages={["/Reward/coin1.svg"]}
              challengePostId={1}
              likesCount={3}
            />
            <PostCard
              userName="윤경"
              userAvatar="/Reward/chart.svg"
              postTime="2024-06-23"
              postContent="챌린지 인증용 UI"
              postImages={["/Reward/coin1.svg"]}
              challengePostId={1}
              likesCount={3}
            />
            <PostCard
              userName="윤경"
              userAvatar="/Reward/chart.svg"
              postTime="2024-06-23"
              postContent="챌린지 인증용 UI"
              postImages={["/Reward/coin1.svg"]}
              challengePostId={1}
              likesCount={3}
            />
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
          <h1 className="text-5xl font-medium text-slate-900">
            {challenge.challenge_name}
          </h1>
          <Image
            src={challenge.challenge_thumbnail}
            alt={challenge.challenge_thumbnail}
            width={500}
            height={500}
            className="h-80 w-80 rounded-lg shadow-md"
          />
        </div>
        <div className="text-center text-3xl font-bold text-gray-600 lg:text-left">
          {challenge.challenge_detail}
        </div>
        <div>
          <div className="text-center text-sm text-slate-500 lg:text-left">
            <p className="border-b-2 p-1 text-xl font-bold">
              인증 총 {challenge.challenge_total}번
            </p>
            <p>
              기간 : {new Date(challenge.challenge_start).toLocaleString()} ~{" "}
              {new Date(challenge.challenge_end).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-row justify-around">
            <button
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleModalOpen}
            >
              인증글 작성하기
            </button>
            {!showJoinState && (
              <button
                className="mt-4 rounded-lg bg-red-400 px-4 py-2 text-white hover:bg-red-600"
                onClick={handleJoinChallenge}
              >
                챌린지 참여하기
              </button>
            )}
          </div>
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
          style={{ height: "75vh", maxHeight: "75vh" }}
        >
          {renderTabContent()}
        </div>
      </div>

      {isModalOpen && <ChallengePostModal onClose={handleModalClose} />}
    </div>
  );
};

export default ChallengeExplain;
