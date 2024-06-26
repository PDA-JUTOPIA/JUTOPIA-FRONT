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
      className="mx-4 mb-6 flex w-full max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg border shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      onClick={() => onClick(challenge.challenge_id)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={challenge.challenge_thumbnail}
          layout="fill"
          objectFit="cover"
          alt={challenge.challenge_name}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-1 bg-white p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {challenge.challenge_name}
        </h2>
        <p className="mb-4 text-gray-600">{challenge.challenge_detail}</p>
        <div className="text-sm text-gray-600">
          챌린지 기간:{" "}
          {new Date(challenge.challenge_start).toLocaleDateString()}
          {" ~ "}
          {new Date(challenge.challenge_end).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
