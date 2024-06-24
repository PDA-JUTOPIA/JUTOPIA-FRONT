import type { NextPage } from "next";
import TopBar from "~/components/TopBar";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useState, useEffect } from "react";
import ChallengeExplain from "~/components/ChallengeExplain";

const ChallengeDetail: NextPage = () => {
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
          <ChallengeExplain />
        </div>
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export default ChallengeDetail;
