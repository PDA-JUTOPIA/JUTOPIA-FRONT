import axios, { AxiosResponse } from "axios";
import Error from "next/error";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResRead {
  userCurrentLearning: number;
}

export interface IResUpdate {
  email: string;
  newCurrent_learning: number;
}

export interface IResCreate {
  email: string;
}

export async function createUserCurrentLearning(
  email: string,
): Promise<IResCreate> {
  try {
    const resp: AxiosResponse<IResCreate> = await axios.post(
      `${fullApiUrl}/api/currentLearning/create`,
      {
        email: email,
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

export async function readUserCurrentLearning(
  email: string,
): Promise<IResRead> {
  try {
    const resp: AxiosResponse<IResRead> = await axios.get(
      `${fullApiUrl}/api/currentLearning/${email}`,
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Failed to read currentLearning (AxiosError):",
        error.message,
      );
    } else if (error instanceof Error) {
      console.error("Failed to read currentLearning:", error);
    } else {
      console.error(
        "Failed to read currentLearning: An unknown error occurred.",
      );
    }
  }
}

export async function updateUserCurrentLearning(
  email: string,
  newCurrent_learning: number,
): Promise<IResUpdate> {
  try {
    const resp: AxiosResponse<IResUpdate> = await axios.put(
      `${fullApiUrl}/api/currentLearning/update`,
      {
        email: email,
        newCurrent_learning: newCurrent_learning,
      },
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to update:", error);
    } else {
      console.error("Failed to update: An unknown error occurred.");
    }
  }
}
