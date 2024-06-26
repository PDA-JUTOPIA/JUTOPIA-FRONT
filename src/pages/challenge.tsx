// pages/challenge.tsx
import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useEffect, useState } from "react";
import ChallengeChracter3 from "../../public/Challenge/챌린지캐릭터3.svg";
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
        <LeftBar selectedTab="챌린지" />

        <BottomBar selectedTab="챌린지" />
        <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
          <div className="flex max-w-[65rem] grow flex-col">
            <div className="flex flex-row items-center justify-start rounded-lg bg-shinhan-rino-blue p-5 text-white shadow-lg">
              <div className="relative ml-4 h-48 w-48 overflow-hidden rounded-full bg-white p-5">
                <Image
                  src={ChallengeChracter3}
                  alt="Challenge Character"
                  width={0}
                  height={0}
                  sizes="100vw"
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
            <div className="flex flex-row justify-between">
              <div className="mt-5">
                <Tabs
                  tabs={TABS}
                  activeTab={activeTab}
                  onTabClick={setActiveTab}
                />
              </div>
              <button
                className="mt-5 flex h-[40px] items-center justify-center rounded bg-blue-500 px-4 py-2 text-center text-white"
                onClick={() => setIsModalOpen(true)}
              >
                챌린지 등록
              </button>
            </div>

            <div className="mt-5">
              {data && (
                <div className="flex flex-row p-4 ">
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
