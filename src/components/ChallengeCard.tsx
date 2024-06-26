// components/ChallengeCard.tsx
import React from "react";
import Image from "next/image";
import type { IResChallengeRecruit } from "~/apis/challenge";

interface ChallengeCardProps {
  challenge: IResChallengeRecruit;
  onClick: (challengeId: number) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  onClick,
}) => {
  return (
    <div
      className="mr-4 flex w-1/3 flex-col items-center justify-between rounded-lg border-b p-4 shadow-lg"
      onClick={() => onClick(challenge.challenge_id)}
    >
      <h2 className="text-3xl font-bold">{challenge.challenge_name}</h2>
      <div>
        <Image
          src={challenge.challenge_thumbnail}
          width={300}
          height={200}
          layout="fixed"
          alt={challenge.challenge_name}
        />
      </div>
      <div>{challenge.challenge_detail}</div>
      <div>
        모집기간: {new Date(challenge.challenge_start).toLocaleDateString()}
        {" ~ "}
        {new Date(challenge.challenge_end).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ChallengeCard;
