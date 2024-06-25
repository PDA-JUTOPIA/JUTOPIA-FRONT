import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useEffect, useState } from "react";
import ChallengeChracter3 from "../../public/Challenge/챌린지캐릭터3.svg";
import Image from "next/image";
import { readAllRecurit, IResChallengeRecruit } from "~/apis/challenge";

const TABS = [
  { id: 1, title: "모집중인 챌린지" },
  { id: 2, title: "참여중인 챌린지", apiEndpoint: "/api/tab2" },
];

const Challenge: NextPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState<IResChallengeRecruit[] | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === 1) {
          const response = await readAllRecurit();
          setData(response);
        } else {
          // 참여중인 챌린지 조회 api
          // const response = await
          // setData(response);
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData().catch((err) => {
      console.log(err);
    });
  }, [activeTab]);

  if (!isHydrated) {
    // 초기 로딩 상태 표시 또는 빈 상태로 렌더링
    return null;
  }

  return (
    <>
      <div className="font-ttlaundrygothicb">
        <LeftBar selectedTab="챌린지" />

        <BottomBar selectedTab="챌린지" />
        <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
          <div className="flex max-w-[65rem] grow flex-col">
            <div className="flex flex-row items-center justify-start rounded-lg bg-shinhan-rino-blue p-5 text-white shadow-lg">
              <div className="relative ml-4 h-48 w-48 overflow-hidden rounded-full bg-white p-5">
                <Image
                  src={ChallengeChracter3}
                  alt="Challenge Character"
                  className="contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="pb-8 pl-8 text-4xl font-bold">
                  챌린지를 통해 주린이를 탈출해요
                </div>
                <div className="pl-8  text-3xl font-bold">
                  지식을 나누고 궁금증을 해결해요
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex border-b">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`-mb-px border-b-2 px-4 py-2 ${activeTab === tab.id ? "border-blue-500 text-blue-500" : "border-transparent"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5">
              {activeTab === 1 && data && (
                <div className="rounded-lg border p-4 shadow-lg">
                  {data.map((challenge) => (
                    <div key={challenge.challenge_id} className="border-b p-4">
                      <h2 className="text-xl font-bold">
                        {challenge.challenge_name}
                      </h2>
                      <p>{challenge.challenge_detail}</p>
                      <p>
                        Start:{" "}
                        {new Date(
                          challenge.challenge_start,
                        ).toLocaleDateString()}
                      </p>
                      <p>
                        End:{" "}
                        {new Date(challenge.challenge_end).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 2 && (
                // 참여중인 챌린지 데이터를 렌더링
                <div>참여중인 챌린지 데이터</div>
              )}
            </div>
          </div>

          <BottomBar selectedTab="챌린지" />
        </div>
      </div>
    </>
  );
};

export default Challenge;
