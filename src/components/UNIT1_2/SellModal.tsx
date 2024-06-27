import React, { useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { RiMore2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { TbArrowBigDownFilled } from "react-icons/tb";
import { GoTriangleUp } from "react-icons/go";
import Button from "@mui/material/Button";
import { Modal, Box } from "@mui/material";
import { useState } from "react";
import { Drawer } from "@mui/material";

interface SellProps {
  onNext: () => void;
}

const SellModal: React.FC<SellProps> = ({ onNext }) => {
  const [open, setOpen] = useState(true);
  const [modalopen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalOpen = () => {
    handleClose(); // 먼저 Drawer를 닫고
    setModalOpen(true); // Modal 열기
  };

  const handleModalClose = () => setModalOpen(false);

  const containerRef = useRef();
  const sampleRef = useRef();

  // Modal style
  const style = {
    position: "absolute",
    width: "auto", // 모달의 폭을 내용에 맞춤
    bgcolor: "background.paper",
    borderRadius: "16px",
    p: 4,
  };
  return (
    <div
      ref={containerRef}
      className="relative ml-3 mt-8 h-screen max-h-[510px] w-screen max-w-[300px] bg-white !pr-0"
    >
      <div className="relative">
        <div className="flex items-center justify-between pl-4 pr-4 pt-4">
          <div className="flex items-center">
            <IoIosArrowBack />
            <div className="ml-2 flex h-[30px] w-[150px] items-center justify-between rounded-lg bg-shnhan-whitegray-back p-2 text-sm font-semibold text-black ">
              <span id="welcomeMessage" className="">
                삼성전자
              </span>
              <span className="text-gray-500">
                <CiSearch />
              </span>
            </div>
          </div>
          <div className="flex">
            <AiOutlineHeart />
            <span className="ml-2">
              <BiBarChartSquare />
            </span>
            <span className="ml-2">
              <RiMore2Fill />
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between pl-4 pr-4">
          <div className="flex w-[175px] items-center justify-between">
            <div className="text-lg font-bold text-red-500">79,800</div>
            <div className="flex items-center text-xs font-semibold text-red-500">
              <GoTriangleUp />
              1,200
            </div>
          </div>
          <div className="text-base font-bold text-red-500">1.40%</div>
        </div>
        <div className="mt-1 pl-4 pr-4 text-xs">
          <div className="text-xxs flex items-center justify-between font-medium text-gray-600">
            <div className="flex">
              <span>시 79,700</span>
              <span className="ml-1">고 80,500</span>
              <span className="ml-1">저 79,000</span>
            </div>
            <div>
              <span>13,804,346주</span>
            </div>
          </div>
        </div>
        <div className="mt-1 pl-4 pr-4 text-xs">
          <div className="flex items-center">
            <span className="text-xxs font-medium text-gray-400">현금30</span>
            <span className="text-xxs ml-1 font-semibold text-black underline">
              신용45
            </span>
            <span className="text-xxs ml-2 items-center rounded-lg bg-gray-100 p-0.5 font-semibold text-purple-700 underline">
              소수점 가능
            </span>
          </div>
        </div>
        <div className="mt-1 flex items-center justify-between pl-4 pr-4">
          <div className="flex h-[30px] w-[230px] items-center justify-between rounded-lg bg-shnhan-whitegray-back p-2 text-xs font-semibold text-black ">
            <span className="ml-1">270-37-612754[01]CMA RP 고유민</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <span className="text-gray-400">
            <FaLock />
          </span>
        </div>
        <div className="mt-2 grid grid-cols-4 pl-4 pr-4 text-center text-sm font-semibold">
          <span className="text-sm font-semibold text-shinhan-gray">매수</span>
          <span
            id="explainMessage1"
            className="text-sm font-medium text-shinhan-blue"
          >
            매도
          </span>
          <span className="text-sm font-medium text-shinhan-gray">
            정정/취소
          </span>
          <span className="text-sm font-medium text-shinhan-gray">체결</span>
        </div>
        <div className="mt-2 flex text-center">
          <div className="w-2/5 w-full">
            <div
              id="explainMessage2"
              className="h-[20px] items-center bg-shnhan-whitegray-back text-xs font-semibold"
            >
              호가
            </div>
            <div className="flex h-[15px] items-center justify-between bg-white pt-2 text-xs">
              <div className="pl-5 text-custom font-semibold text-gray-600">
                상한가
              </div>
              <div className="flex items-center pr-4 text-custom font-semibold text-red-500">
                <TbArrowBigUpFilled />
                102,100
              </div>
            </div>
            <div className="flex pt-1">
              <div className="w-3/5">
                <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                  <span>80,200</span>
                  <br />
                  <span className="text-custom">+2.04%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                  <span className="ml-1">166,243</span>
                </div>
              </div>
            </div>
            <div className="flex pt-0">
              <div className="w-3/5">
                <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                  <span>80,100</span>
                  <br />
                  <span className="text-custom">+1.91%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                  <span className="ml-1">181,365</span>
                </div>
              </div>
            </div>
            <div className="flex pt-0">
              <div className="w-3/5">
                <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                  <span>80,000</span>
                  <br />
                  <span className="text-custom">+1.78%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                  <span className="ml-1">178,068</span>
                </div>
              </div>
            </div>
            <div className="flex pt-0">
              <div className="w-3/5">
                <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                  <span>79,900</span>
                  <br />
                  <span className="text-custom">+1.65%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                  <span className="ml-1">22,597</span>
                </div>
              </div>
            </div>
            <div className="flex border-2 border-red-500 pt-0">
              <div className="w-3/5 ">
                <div className="h-[30px]  bg-blue-50 text-right text-xs font-semibold text-red-500">
                  <span>79,800</span>
                  <br />
                  <span className="text-custom">+1.53%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                  <span className="ml-1">154,568</span>
                </div>
              </div>
            </div>
            <div className="flex pt-0">
              <div className="w-3/5">
                <div className="h-[30px] bg-red-50 text-right text-xs font-semibold text-red-500">
                  <span>79,700</span>
                  <br />
                  <span className="text-custom">+1.40%</span>
                </div>
              </div>
              <div className="w-2/5">
                <div className="h-[30px] bg-red-100 text-left text-custom font-semibold">
                  <span className="ml-1">72,603</span>
                  <br />
                  <span className="ml-1 text-custom text-red-500">11</span>
                </div>
              </div>
            </div>

            <div className="flex h-[15px] items-center justify-between bg-white pt-2 text-xs">
              <div className="pl-5 text-custom font-semibold text-gray-600">
                하한가
              </div>
              <div className="flex items-center pr-4 text-custom font-semibold text-shinhan-blue">
                <TbArrowBigDownFilled />
                55,100
              </div>
            </div>
          </div>
          <div className="w-3/5 w-full">
            <div className="flex">
              <div className="h-[20px] w-1/2 bg-black text-xs font-semibold text-white">
                현금
              </div>
              <div className="h-[20px] w-1/2 bg-gray-200 text-xs font-semibold text-gray-400">
                신용
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <div
                  id="explainMessage3"
                  className="flex h-[20px] w-[70px] items-center justify-between rounded-md border-2 border-black bg-white p-2 text-xs font-semibold"
                >
                  지정가
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </div>

                <div
                  id="explainMessage4"
                  className="flex h-[20px] w-[55px] items-center justify-between rounded-md bg-shnhan-whitegray-back p-1 text-xs font-semibold"
                >
                  시장가
                </div>
              </div>
              <div className="mt-1 flex h-[25px] items-center justify-between rounded-md border-2  border-black bg-white text-xs font-semibold">
                <div className="pl-2">-</div>
                <div className="">79,900원</div>
                <div className="pr-2">+</div>
              </div>
              <div className="mt-1 flex h-[25px] items-center justify-between rounded-md border-2 border-shnhan-whitegray-back bg-white text-xs font-semibold">
                <div className="pl-2">-</div>
                <div className="text-shinhan-gray ">0주</div>
                <div className="pr-2">+</div>
              </div>

              <div className="mt-2 flex justify-between">
                <div className="flex h-[20px] w-[80px] items-center justify-between rounded-md bg-shnhan-whitegray-back text-custom font-semibold">
                  <span id="explainMessage5" className="ml-3">
                    매도가능 1주
                  </span>
                </div>

                <div className="flex h-[20px] w-[50px] rounded-md bg-gray-500 text-custom font-semibold text-white">
                  <span className="ml-1">보유잔고</span>
                </div>
              </div>

              <div className="mt-12 flex h-[25px] items-center items-center justify-between rounded-md text-custom font-semibold">
                <div className="text-shinhan-gray ">주문금액</div>
                <div className="text-sm">0원</div>
              </div>
              <button
                onClick={handleOpen}
                id="clickButton1"
                className="mt-1 h-[35px] w-full rounded-md bg-blue-500 text-xs font-medium text-white"
              >
                현금매도
              </button>
              <Drawer
                style={{ position: "fixed" }}
                anchor="bottom"
                open={open}
                onClose={handleClose}
                container={() => {
                  return containerRef.current;
                }}
                ModalProps={{
                  style: { position: "absolute" },
                  keepMounted: true,
                }}
                // variant="persistent"
                variant="temporary"
                SlideProps={{
                  container: sampleRef.current,
                }}
                PaperProps={{
                  style: {
                    position: "absolute",
                  },
                }}
              >
                <div className="p-4">
                  <div className="text-sm font-semibold text-shinhan-blue">
                    현금매도 <span className="text-black">주문확인 </span>
                  </div>
                  <div className="mt-2">
                    <div className="text-custom font-semibold text-gray-600">
                      <div className="flex justify-between ">
                        <span className="">계좌번호</span>
                        <span className="text-black">
                          270-37-612754 [01] CMA RP 고유민
                        </span>
                      </div>
                      <div className="mt-2 flex justify-between ">
                        <span className="">주문종목</span>
                        <span className="text-black">삼성전자(005930)</span>
                      </div>
                      <div className="mt-2 flex justify-between ">
                        <span className="">주문유형</span>
                        <span className="text-black">지정가</span>
                      </div>
                      <div className="mt-2 flex justify-between ">
                        <span className="">주문단가</span>
                        <span className="text-gray-600">0원</span>
                      </div>
                      <div className="mt-2 flex justify-between ">
                        <span className="">주문수량</span>
                        <span className="text-shinhan-blue">1주</span>
                      </div>
                      <div className="mt-2 flex justify-between ">
                        <span className="">주문금액</span>
                        <span className="text-black"></span>
                      </div>
                    </div>
                  </div>
                  <span className="mt-5 text-custom font-medium text-gray-400">
                    * 수수료 및 제세금은 체결내역에서 확인하세요
                  </span>
                  <Button
                    onClick={handleModalOpen}
                    sx={{
                      backgroundColor: "#3B82F6", //blue-500
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#3B82F6",
                      },
                      "&:active": {
                        backgroundColor: "#3B82F6",
                      },
                    }}
                    className="mt-4 h-[35px] w-full rounded-lg bg-blue-500 text-xs font-medium"
                  >
                    매도주문
                  </Button>
                </div>
              </Drawer>
              <Modal
                open={modalopen}
                onClose={handleModalClose}
                container={containerRef.current}
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={style}>
                  <div className="p4 flex flex-col items-center text-custom font-semibold text-gray-600">
                    <span className="">주문을 접수했어요.</span>
                    <span className="">체결 내역을 꼭 확인하세요</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Button
                      sx={{
                        backgroundColor: "shnhan-whitegray-back",
                        color: "black",
                      }}
                      className="h-[35px] w-[10px] rounded-lg bg-shnhan-whitegray-back text-xs font-medium text-black"
                    >
                      닫기
                    </Button>
                    <Button
                      onClick={onNext}
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                        "&:active": {
                          backgroundColor: "red",
                        },
                      }}
                      className="bg-red ml-2 h-[35px] w-full rounded-lg text-xs font-medium"
                    >
                      체결 내역 확인
                    </Button>
                  </div>
                </Box>
              </Modal>
              <div ref={sampleRef}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
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
          <div className="rounded-lg bg-shinhan-blue p-3 text-xs font-semibold text-white">
            메뉴
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
