import axios from "axios";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!fullApiUrl) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_PORT are not set",
  );
}

export const fetchMarketIssuesApi = async () => {
  interface MarketIssue {
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

  try {
    const response = await axios.get<MarketIssue[]>(
      `${fullApiUrl}/api/columnboard/list`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching market issues:", error);
    throw error;
  }
};
