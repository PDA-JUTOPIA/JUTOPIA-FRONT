import axios from "axios";
import type { AxiosResponse } from "axios";
import Error from "next/error";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResReadAll {
  rewards: Reward[];
}

export interface Reward {
  reward_id: number;
  reward_name: string;
  reward_explain: string;
  reward_img_url: string;
}

export interface IResReadOne {
  reward: {
    reward_id: number;
    reward_name: string;
    reward_explain: string;
    reward_img_url: string;
  };
}

export async function readRewards(): Promise<Reward[]> {
  try {
    const resp: AxiosResponse<Reward[]> = await axios.get(
      `${fullApiUrl}/api/reward/read`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read Rewards (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read Rewards:", error);
    } else {
      console.error("Failed to read Rewards: An unknown error occurred.");
    }
  }
}

export async function readRewardOne(reward_id: number): Promise<IResReadOne> {
  try {
    const resp: AxiosResponse<IResReadOne> = await axios.get(
      `${fullApiUrl}/api/reward/${reward_id}`,
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read Reward (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read Reward:", error);
    } else {
      console.error("Failed to read Reward: An unknown error occurred.");
    }
  }
}
