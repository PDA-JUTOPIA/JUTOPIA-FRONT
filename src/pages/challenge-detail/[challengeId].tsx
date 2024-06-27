// pages/challenge-detail/[challengeId].tsx

/* eslint-disable @next/next/no-img-element */
import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import TopBar from "~/components/TopBar";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import ChallengeExplain from "~/components/ChallengeExplain";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

interface ChallengeDetailProps {
  challenge: Challenge; // challenge 속성은 Challenge 타입을 가져야 함
}

// Challenge 인터페이스 정의
interface Challenge {
  challenge_id: number; // 챌린지 ID
  challenge_name: string; // 챌린지 이름
  challenge_detail: string; // 챌린지 상세 설명
  challenge_thumbnail: string; // 챌린지 썸네일 이미지 URL
  challenge_total: number; // 챌린지 전체 참가자 수
  challenge_recurit_start: string; // 챌린지 모집 시작일
  challenge_recurit_end: string; // 챌린지 모집 종료일
  challenge_start: string; // 챌린지 시작일
  challenge_end: string; // 챌린지 종료일
  createdAt: string; // 생성일
  updatedAt: string; // 최근 수정일
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

      <div className="flex justify-evenly max-[768px]:pb-[90px] md:ml-[6rem] lg:ml-64 lg:gap-6">
        <div className="flex w-full flex-col justify-around gap-5">
          <ChallengeExplain challenge={challenge} />
        </div>
      </div>

      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { challengeId } = context.params as { challengeId: string };

  const res = await fetch(
    `${fullApiUrl}/api/challenge/readChallenge/challengeId/${challengeId}`,
  );
  // 이 부분은 ec2로 맞춰서 변경해봅시다
  const challengeResponse = (await res.json()) as Challenge;

  return {
    props: {
      challenge: challengeResponse,
    },
  };
};

export default ChallengeDetail;
