// components/ChallengeGrid.tsx
import React, { useState, useEffect } from "react";
import { readUserRewards } from "~/apis/userReward";
import { readRewards } from "~/apis/reward";
import RewardCard from "~/components/RewardCard";
// import { challenges } from "~/data/challengesData";
import { readUserParticipationCount } from "~/apis/user";
import { createUserReward } from "~/apis/userReward";
interface ChallengeGridProps {
  showOnlyCompleted?: boolean;
  email: string;
}

const ChallengeGrid: React.FC<ChallengeGridProps> = ({
  showOnlyCompleted,
  email,
}) => {
  interface Reward {
    reward_id: number;
    reward_name: string;
    reward_explain: string;
    reward_img_url: string;
    completed?: boolean;
  }
  const [challenges, setChallenges] = useState<Reward[]>([]);
  const [modalStates, setModalStates] = useState<boolean[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      try {
        //1. 전체 리워드 조회 db
        const response = await readRewards();
        const initialChallenges = response.map((challenge) => ({
          ...challenge,
          completed: false,
        }));
        //2. count 가지고 와서 if ===3

        const response2 = await readUserParticipationCount(email);
        if (
          response2.totalParticipationCount === 1 ||
          response2.totalParticipationCount === 3
        ) {
          if (response2.totalParticipationCount === 1) {
            const response3 = await readUserRewards(email);
            if (!response3.userRewardIds.includes(6))
              createUserReward(email, 5).catch((error) => {
                console.error("Failed to create user reward:", error);
              });
          } else {
            const response3 = await readUserRewards(email);

            if (!response3.userRewardIds.includes(7))
              createUserReward(email, 6).catch((error) => {
                console.error("Failed to create user reward:", error);
              });
          }
        }
        //3. 유저 리워드 조회
        const rewardsArray = await readUserRewards(email); // Reward[] 타입의 배열을 받아옴

        const updatedChallenges = initialChallenges.map((challenge) => ({
          ...challenge,
          completed: rewardsArray.userRewardIds.includes(challenge.reward_id),
        }));

        setChallenges(updatedChallenges);

        setModalStates(updatedChallenges.map(() => false));
      } catch (error) {
        console.error("Failed to fetch initial rewards:", error);
      }
    }

    fetchInitialData().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [email]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {challenges
        .filter((challenge) => !showOnlyCompleted || challenge.completed)
        .map((challenge, index) => (
          <RewardCard
            key={index}
            title={challenge.reward_name}
            imageUrl={challenge.reward_img_url}
            description={challenge.reward_explain}
            completed={challenge.completed}
            showDetails={true}
            showModal={modalStates[index]}
            setShowModal={(value) => {
              const newModalStates = [...modalStates];
              newModalStates[index] = value;
              setModalStates(newModalStates);
            }}
          />
        ))}
    </div>
  );
};

export default ChallengeGrid;
