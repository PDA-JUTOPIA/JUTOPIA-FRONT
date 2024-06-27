import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";
import { useEffect, useState } from "react";
import Profile from "~/components/HomeProfile";
import WeeklyCalendar from "~/components/WeeklyCalender";
import Card from "~/components/HomeCard";
import MarketIssues from "~/components/HomeMarketIssues";
import DomesticStock from "~/components/DomesticStock";

const Home: NextPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    // 초기 로딩 상태 표시 또는 빈 상태로 렌더링
    return null;
  }

  return (
    <div className="font-ttlaundrygothicb">
      <TopBar menuName="Home" />

      <LeftBar selectedTab="홈" />
      <div className="max-w-[65rem] grow max-[768px]:pb-[90px] sm:px-6 sm:pt-6 md:ml-24 lg:absolute lg:left-[50%] lg:ml-32 lg:translate-x-[-50%]">
        <Profile />
        <WeeklyCalendar />
        <div className="m-5 flex flex-col gap-6 md:justify-between min-[1200px]:flex-row">
          <Card title="시장 지표" content={<DomesticStock />} />
          <Card
            title="최신 금융 칼럼(with 신한투자증권)"
            content={<MarketIssues />}
          />
        </div>
      </div>
      <BottomBar selectedTab="홈" />
    </div>
  );
};

export default Home;
