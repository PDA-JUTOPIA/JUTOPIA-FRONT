import axios, { AxiosResponse } from "axios";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResChallengeRecruit {
  challenge_id: number;
  challenge_name: string;
  challenge_detail: string;
  challenge_thumbnail: string;
  challenge_total: number;
  challenge_recurit_start: string;
  challenge_recurit_end: string;
  challenge_start: string;
  challenge_end: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResCreateRecruit {
  result: string;
}

export async function readJoinRecurit(
  email: string,
): Promise<IResChallengeRecruit[]> {
  try {
    const resp: AxiosResponse<IResChallengeRecruit[]> = await axios.post(
      `${fullApiUrl}/api/challenge/joinChallengeList`,
      { email: email },
    );
    console.log(resp);
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read data:", error);
    } else {
      console.error("Failed to read data: An unknown error occurred.");
    }
  }
}

export async function readAllRecurit(): Promise<IResChallengeRecruit[]> {
  try {
    const resp: AxiosResponse<IResChallengeRecruit[]> = await axios.get(
      `${fullApiUrl}/api/challenge/readAllRecurit`,
    );
    console.log(resp);
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read data:", error);
    } else {
      console.error("Failed to read data: An unknown error occurred.");
    }
  }
}

export async function createRecurit(
  formData: FormData,
): Promise<IResCreateRecruit> {
  try {
    const resp: AxiosResponse<IResCreateRecruit> = await axios.post(
      `${fullApiUrl}/api/challenge/createRecurit`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to create data:", error);
    } else {
      console.error("Failed to create data: An unknown error occurred.");
    }
  }
}
