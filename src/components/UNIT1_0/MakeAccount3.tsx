import React from "react";
import { useState } from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

const MakeAccount3 = ({ onNext, onPrev }) => {
  const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#explainMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: "중개형 ISA란? ~~~블라블라~~~", // 표시할 텍스트
      placement: "bottom", // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#clickButton3",
      content: "필수 계좌만 한 번에 만들기 버튼을 클릭해봅시다.",
      placement: "center",
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white p-0">
        <Joyride
          steps={steps}
          run={run}
          continuous={true}
          spotlightClicks={true}
          // scrollToFirstStep={true}
          // showSkipButton={true}
          tooltipComponent={Tooltip}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
        <div className="py-6">
          <div className="bg-shnhan-whitegray-back mt-5 p-4">
            <span className="bg-shinhan-back text-shinhan-blue rounded-xl p-1 text-xs font-bold">
              BEST
            </span>
            <div className="mt-3 text-xs">필수계좌 2개로 충분해요</div>
            <h2 id="explainMessage" className="text-base font-bold text-black">
              증권종합+중개형ISA
            </h2>
            <div className="mb-3 mt-3">
              <span className="rounded-xl bg-white p-2 text-xs font-medium text-black">
                주식, 금융상품을{" "}
                <span className="font-semibold">증권종합계좌</span> 하나로
              </span>
              <div className="mt-3">
                <span className="rounded-xl bg-white p-2 text-xs font-medium text-black">
                  세금 덜 내는 <span className="font-semibold">중개형 ISA</span>
                </span>
              </div>
            </div>
            <button
              onClick={onNext}
              id="clickButton3"
              className="bg-shinhan-button mt-5 h-[35px] w-full rounded-lg text-xs font-medium text-white"
            >
              필수 계좌만 한 번에 만들기
            </button>
          </div>
          <h2 className="p-4 text-base font-bold text-black">
            스마트한 자산관리를 시작 하세요!
          </h2>
          <div className="flex justify-between pl-4 pr-4">
            <div className="bg-shnhan-whitegray-back rounded-xl p-3 pr-8">
              <span className="text-xs font-semibold">중개형ISA</span>
              <div className="text-xs font-medium">
                세금을 낮추는
                <br />
                절세 계좌
              </div>
            </div>
            <div className="bg-shnhan-whitegray-back rounded-xl p-2 pl-2 pr-6">
              <span className="text-xs font-semibold">연금저축</span>
              <div className="text-xs font-medium">
                세액공제 혜택,
                <br />
                미래를 위한 준비
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <hr />
        </div>
        <div className="ml-3 flex items-center justify-between p-1">
          <div className="flex items-center">
            <div className="text-xs font-semibold text-black">홈</div>
            <div className="ml-5 text-xs font-semibold text-black">관심</div>
            <div className="ml-5 text-xs font-semibold text-black">현재가</div>
            <div className="ml-5 text-xs font-semibold text-black">주문</div>
            <div className="ml-5 text-xs font-semibold text-black">잔고</div>
          </div>
          <div className="flex items-center">
            <div className="bg-shinhan-blue rounded-lg p-3 text-xs font-semibold text-white">
              메뉴
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <button
          onClick={onPrev}
          className="mt-4 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          이전
        </button>
      </div>
    </div>
  );
};

export default MakeAccount3;