import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useEffect, useState } from "react";
import ChallengeChracter3 from "../../public/Challenge/챌린지캐릭터3.svg";
import Image from "next/image";
import type { IResChallengeRecruit } from "~/apis/challenge";
import { readAllRecurit, createRecurit } from "~/apis/challenge";
import { useRouter } from "next/router";

const TABS = [
  { id: 1, title: "모집중인 챌린지" },
  { id: 2, title: "참여중인 챌린지", apiEndpoint: "/api/tab2" },
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
                {/* <ChallengeChracter3 /> */}
                <Image
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
              <button
                className="mt-5 flex h-[40px] items-center justify-center rounded bg-blue-500 px-4 py-2 text-center text-white"
                onClick={() => setIsModalOpen(true)}
              >
                챌린지 등록
              </button>
            </div>

            <div className="mt-5">
              {activeTab === 1 && data && (
                <div className="flex flex-row p-4 ">
                  {data.map((challenge) => (
                    <div
                      key={challenge.challenge_id}
                      className="mr-4 flex w-full flex-col items-center justify-between rounded-lg border-b p-4 shadow-lg"
                      onClick={() =>
                        handleChallengeDetailClick(challenge.challenge_id)
                      }
                    >
                      <h2 className="text-3xl font-bold">
                        {challenge.challenge_name}
                      </h2>
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
                        모집기간:{" "}
                        {new Date(
                          challenge.challenge_start,
                        ).toLocaleDateString()}
                        {" ~ "}
                        {new Date(challenge.challenge_end).toLocaleDateString()}
                      </div>
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">챌린지 등록</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700">챌린지 이름</label>
                <input
                  type="text"
                  name="challenge_name"
                  value={formData.challenge_name}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">챌린지 설명</label>
                <textarea
                  name="challenge_detail"
                  value={formData.challenge_detail}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Challenge Total</label>
                <input
                  id="challenge_total"
                  name="challenge_total"
                  type="number"
                  value={formData.challenge_total}
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">챌린지 썸네일</label>
                <input
                  type="file"
                  name="challenge_thumbnail"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">모집 시작 날짜</label>
                <input
                  type="date"
                  name="challenge_recurit_start"
                  value={formData.challenge_recurit_start}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">모집 종료 날짜</label>
                <input
                  type="date"
                  name="challenge_recurit_end"
                  value={formData.challenge_recurit_end}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">챌린지 시작 날짜</label>
                <input
                  type="date"
                  name="challenge_start"
                  value={formData.challenge_start}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">챌린지 종료 날짜</label>
                <input
                  type="date"
                  name="challenge_end"
                  value={formData.challenge_end}
                  onChange={handleFormChange}
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 rounded bg-gray-500 px-4 py-2 text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                >
                  등록
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Challenge;
