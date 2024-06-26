// pages/challenge-detail/[challengeId].tsx

/* eslint-disable @next/next/no-img-element */
import { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import TopBar from "~/components/TopBar";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import ChallengeExplain from "~/components/ChallengeExplain";

interface ChallengeDetailProps {
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

const ChallengeDetail: NextPage<ChallengeDetailProps> = ({ challenge }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="font-ttlaundrygothicb">
      <TopBar menuName="챌린지" />
      <LeftBar selectedTab="챌린지" />

      <div className="flex justify-evenly pt-10 md:ml-[8rem] lg:ml-64 lg:gap-6">
        <div className="flex w-full flex-col justify-around gap-5 p-2">
          <ChallengeExplain challenge={challenge} />
        </div>
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { challengeId } = context.params as { challengeId: string };

  const res = await fetch(
    `http://localhost:3000/api/challenge/readChallenge/challengeId/${challengeId}`,
  );
  const challenge = await res.json();

  return {
    props: {
      challenge,
    },
  };
};

export default ChallengeDetail;
