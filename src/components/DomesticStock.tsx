import type { ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!fullApiUrl) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_PORT are not set",
  );
}

interface ListItem {
  [key: string]: {
    output: {
      bstp_nmix_prpr: string; // 코스피, 코스닥, 코스피200 지수
      bstp_nmix_prdy_vrss: string; // 업종 지수 전일 대비
      bstp_nmix_prdy_ctrt: string; // 업종 지수 전일 대비율
    };
  };
}

const DomesticStock = () => {
  const [data, setData] = useState<ListItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stockNum = ["0001", "1001", "2001"];

  useEffect(() => {
    const eventSource = new EventSource(
      `${fullApiUrl}/api/koreainvestment/domestic-stock`,
    );

    eventSource.onmessage = (event) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
        const parsedData: ListItem = JSON.parse(event.data);
        console.log(parsedData);
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing SSE data:", error);
        setError("Error parsing data");
        setLoading(false);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="relative z-[-1] flex overflow-x-auto px-[10px] pt-[10px] shadow-md max-[1200px]:justify-between sm:rounded-lg min-[1200px]:flex-col">
            {stockNum.map((elem) => (
              <div key={elem}>
                <div className="text-sm max-[500px]:text-[3.1vw]">
                  {elem === "0001"
                    ? "코스피"
                    : elem === "1001"
                      ? "코스닥"
                      : "코스피200"}
                </div>
                <div className="text-lg max-[500px]:text-[3.6vw]">
                  {data[elem]?.output.bstp_nmix_prpr}
                </div>
                <div className="mb-[10px] text-xs">
                  {Number(data[elem]?.output.bstp_nmix_prdy_ctrt) > 0 ? (
                    <div className="flex">
                      {/*양수일 때*/}
                      <GoTriangleUp className="inline-block" color="red" />
                      <span className="text-red-500 max-[500px]:text-[2.5vw]">
                        {data[elem]?.output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px] max-[500px]:text-[2.5vw]">
                          {data[elem]?.output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </div>
                  ) : Number(data[elem]?.output.bstp_nmix_prdy_ctrt) < 0 ? (
                    <div className="flex">
                      {/*음수일 때*/}
                      <GoTriangleDown className="inline-block" color="blue" />
                      <span className="text-blue-700 max-[500px]:text-[2.5vw]">
                        {data[elem]?.output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px] max-[500px]:text-[2.5vw]">
                          {data[elem]?.output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </div>
                  ) : (
                    <>
                      {/*0일 때*/}
                      <span>
                        {data[elem]?.output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px] max-[500px]:text-[2.5vw]">
                          {data[elem]?.output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DomesticStock;
