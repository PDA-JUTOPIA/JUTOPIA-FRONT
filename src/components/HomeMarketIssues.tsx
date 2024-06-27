import React, { useEffect, useState, useRef } from "react";
import { fetchMarketIssuesApi } from "../apis/marketIssuesApi";
import { Modal, ModalBackdrop } from "./styled";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface ListItem {
  id: number;
  bbs_name: string;
  title: string;
  writer: string;
  reg_date: string;
  attachment_url: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function truncate(str: string, maxlength: number): string {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

const MarketIssues: React.FC = () => {
  const [data, setData] = useState<ListItem[]>([]); // 초기 데이터 타입을 ListItem[]로 설정
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<number>(10);
  const tableRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDetailClick = (item: ListItem) => {
    setSelectedItem(item);
    toggleModal();
  };

  useEffect(() => {
    fetchMarketIssuesApi()
      .then((response) => {
        setData(response); // response.data가 아닌 response 자체를 사용
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      ref={tableRef}
      className="relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <div className="scroll-box max-h-60 overflow-y-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="truncate px-4 py-3">
                제목
              </th>
              <th
                scope="col"
                className="hidden table-fixed px-4 py-3 lg:table-cell"
              >
                발행일
              </th>
              <th
                scope="col"
                className="hidden table-fixed px-4 py-3 lg:table-cell"
              >
                PDF 파일
                <span className="sr-only">Download</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, visibleItems).map((item) => (
              <tr
                key={item.id}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                >
                  <div className="flex items-center justify-between">
                    <Tippy
                      className="overflow-hidden"
                      content={item.title}
                      appendTo={tableRef.current}
                      popperOptions={{
                        modifiers: [
                          {
                            name: "preventOverflow",
                            options: {
                              boundary: tableRef.current,
                            },
                          },
                        ],
                      }}
                    >
                      <span className="mr-2 w-40 truncate md:w-auto">
                        {truncate(item.title, 40)}
                      </span>
                    </Tippy>
                    <button
                      type="button"
                      className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      onClick={() => handleDetailClick(item)}
                    >
                      자세히
                    </button>
                  </div>
                </th>
                <td className="hidden px-4 py-2 lg:table-cell">
                  {item.reg_date}
                </td>{" "}
                {/* 모바일에서 숨기기 */}
                <td className="hidden px-4 py-2 text-right lg:table-cell">
                  {" "}
                  {/* 모바일에서 숨기기 */}
                  <a
                    href={item.attachment_url}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleItems < data.length && (
          <div className="mt-1 flex justify-center">
            <button
              onClick={loadMoreItems}
              className="rounded-full bg-white px-4 py-1 text-sm font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              더보기
            </button>
          </div>
        )}
      </div>

      {isModalOpen && selectedItem && (
        <>
          <ModalBackdrop display="block" onClick={toggleModal} />
          <Modal
            toggleModal={toggleModal}
            title={selectedItem.title}
            detail={
              <>
                <div>
                  <div className="px-3">
                    <p>
                      <strong>게시판:</strong> {selectedItem.bbs_name}
                    </p>
                    <p>
                      <strong>작성자:</strong> {selectedItem.writer}
                    </p>
                    <p>
                      <strong>발행일:</strong> {selectedItem.reg_date}
                    </p>
                    <hr className="mb-3 mt-3" />
                    <p>
                      <strong>내용:</strong>
                      {/* {he.decode(selectedItem.content)} */}
                      <div
                        className="scroll-box"
                        dangerouslySetInnerHTML={{
                          __html: selectedItem.content,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <hr className="mb-4 mt-4" />
                <p className="text-xl max-[570px]:text-lg">
                  자세히 확인하고 싶으시면{" "}
                  <a
                    href={selectedItem.attachment_url}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드
                  </a>
                  후 PDF 파일을 확인하세요.
                </p>
              </>
            }
          />
        </>
      )}
    </div>
  );
};

export default MarketIssues;
