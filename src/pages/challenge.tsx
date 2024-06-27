// pages/challenge.tsx
import type { NextPage } from "next";
import TopBar from "~/components/TopBar";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useEffect, useState } from "react";
// import ChallengeChracter3 from "../../public/Challenge/챌린지캐릭터3.svg";
import Image from "next/image";
import type { IResChallengeRecruit } from "~/apis/challenge";
import {
  readAllRecurit,
  createRecurit,
  readJoinRecurit,
} from "~/apis/challenge";
import { useRouter } from "next/router";
import { useBoundStore } from "~/hooks/useBoundStore";
import Tabs from "~/components/ChallengeTabs";
import ChallengeCard from "~/components/ChallengeCard";
import ChallengeForm from "~/components/ChallengeForm";

const TABS = [
  { id: 1, title: "모집중인 챌린지" },
  { id: 2, title: "참여중인 챌린지" },
];

const Challenge: NextPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState<IResChallengeRecruit[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    challenge_name: "",
    challenge_detail: "",
    challenge_total: "",
    challenge_thumbnail: null as File | null,
    challenge_recurit_start: "",
    challenge_recurit_end: "",
    challenge_start: "",
    challenge_end: "",
  });
  const router = useRouter();
  const email = useBoundStore((x) => x.email);

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
          const response = await readJoinRecurit(email);
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData().catch((err) => {
      console.log(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleChallengeDetailClick = (challengeId: number) => {
    try {
      router.push(`/challenge-detail/${challengeId}`).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.error("Error redirecting to challenge detail:", error);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        challenge_thumbnail: e.target.files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFormData().catch((err) => {
      console.log(err);
    });
  };

  const submitFormData = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("challenge_name", formData.challenge_name);
      formDataToSend.append("challenge_detail", formData.challenge_detail);
      formDataToSend.append("challenge_total", formData.challenge_total);
      if (formData.challenge_thumbnail) {
        formDataToSend.append(
          "challenge_thumbnail",
          formData.challenge_thumbnail,
        );
      }
      formDataToSend.append(
        "challenge_recurit_start",
        formData.challenge_recurit_start,
      );
      formDataToSend.append(
        "challenge_recurit_end",
        formData.challenge_recurit_end,
      );
      formDataToSend.append("challenge_start", formData.challenge_start);
      formDataToSend.append("challenge_end", formData.challenge_end);

      const response = await createRecurit(formDataToSend);
      if (response.result === "ok") {
        setIsModalOpen(false);
      } else {
        console.error("Failed to create challenge");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <div className="font-ttlaundrygothicb">
        <TopBar menuName="챌린지" />
        <LeftBar selectedTab="챌린지" />

        <BottomBar selectedTab="챌린지" />
        <div className="mb-[88px] flex justify-center gap-3 pt-5 sm:p-6 md:mb-0 md:ml-24 lg:ml-64 lg:gap-12">
          <div className="ml-[10px] mr-[10px] flex max-w-[65rem] grow flex-col">
            <div className="flex flex-row items-center justify-center rounded-lg bg-shinhan-rino-blue p-5 text-white shadow-lg">
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-[1.3rem] shadow-lg sm:pb-8 sm:pt-8 md:flex-row">
                <Image
                  src="/Challenge/챌린지캐릭.png"
                  alt="Challenge Character"
                  width="500"
                  height="500"
                  sizes="100vw"
                  className="h-32 w-32 rounded-full border-4 border-white object-contain shadow-md sm:h-36 sm:w-36 xl:h-40 xl:w-40"
                />

                <div className="flex flex-col sm:ml-2 md:ml-4 ">
                  <div className="mt-[20px] pb-4 text-[4.55vw] font-bold text-gray-800 min-[500px]:text-2xl md:mt-0 md:text-[2.7vw] lg:text-[2.5vw]">
                    🔥챌린지를 통해 주린이를 탈출해요🔥
                  </div>
                  <div className="ml-[2vw] text-center text-[2.7vw] font-bold text-gray-600 min-[500px]:text-xl md:text-left lg:text-[2vw]">
                    지식을 나누고 궁금증을 해결해요
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="mt-5 max-[400px]:text-[14px]">
                <Tabs
                  tabs={TABS}
                  activeTab={activeTab}
                  onTabClick={setActiveTab}
                />
              </div>
              <button
                className="mt-5 flex h-[40px] items-center justify-center rounded bg-blue-500 px-4 py-2 text-center text-white max-[400px]:text-[12px]"
                onClick={() => setIsModalOpen(true)}
              >
                챌린지 등록
              </button>
            </div>

            <div className="mt-5">
              {data && (
                <div className="flex flex-wrap justify-around p-4 ">
                  {data.map((challenge) => (
                    <ChallengeCard
                      key={challenge.challenge_id}
                      challenge={challenge}
                      onClick={handleChallengeDetailClick}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <BottomBar selectedTab="챌린지" />
        </div>
      </div>
      {isModalOpen && (
        <ChallengeForm
          formData={formData}
          onChange={handleFormChange}
          onFileChange={handleFileChange}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Challenge;
