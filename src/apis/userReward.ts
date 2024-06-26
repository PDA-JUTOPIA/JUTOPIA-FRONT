import axios, { AxiosResponse } from "axios";
import Error from "next/error";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResCreate {
  email: string;
  reward_id: number;
}

export interface Reward {
  userRewardIds: number[];
}

export async function readUserRewards(email: string): Promise<Reward> {
  try {
    const resp: AxiosResponse<Reward> = await axios.get(
      `${fullApiUrl}/api/userReward/${email}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read RewardIds (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read RewardIds:", error);
    } else {
      console.error("Failed to read RewardIds: An unknown error occurred.");
    }
  }
}

export async function createUserReward(
  email: string,
  reward_id: number,
): Promise<IResCreate> {
  try {
    const resp: AxiosResponse<IResCreate> = await axios.post(
      `${fullApiUrl}/api/userReward/create`,
      {
        email: email,
        reward_id: reward_id,
      },
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to create:", error);
    } else {
      console.error("Failed to create: An unknown error occurred.");
    }
  }
}
