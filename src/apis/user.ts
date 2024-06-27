import axios from "axios";
import type { AxiosResponse } from "axios";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResJoinDate {
  daysSinceJoined: number;
}

export interface IResSignup {
  username: string;
  email: string;
}

export interface IResLogin {
  token: string;
  username: string;
  email: string;
}

export interface IResUpdate {
  newName: string;
  email: string;
}

export interface IResUserId {
  userId: number;
}

export interface IResLearningStatus {
  learningStatus: string;
}

export interface IResParticipationCount {
  totalParticipationCount: number;
}

export async function getUserIdByEmail(email: string) {
  try {
    const resp: AxiosResponse<IResUserId> = await axios.post(
      `${fullApiUrl}/api/users/user-id`,
      {
        email: email,
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to getUserId (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to getUserId:", error);
    } else {
      console.error("Failed to getUserId: An unknown error occurred.");
    }
  }
}

export async function login(
  email: string,
  password: string,
): Promise<IResLogin> {
  try {
    const resp: AxiosResponse<IResLogin> = await axios.post(
      `${fullApiUrl}/api/users/login`,
      {
        email: email,
        password: password,
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to login (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to login:", error);
    } else {
      console.error("Failed to login: An unknown error occurred.");
    }
  }
}

export async function signup(
  name: string,
  email: string,
  password: string,
): Promise<IResSignup> {
  try {
    const resp: AxiosResponse<IResSignup> = await axios.post(
      `${fullApiUrl}/api/users/signup`,
      {
        username: name, // 서버에서 username 필드로 사용하므로 이름을 username으로 전달합니다.
        email: email,
        password: password,
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to sign up (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to sign up:", error);
    } else {
      console.error("Failed to sign up: An unknown error occurred.");
    }
  }
}

export async function readSinceJoinDate(email: string): Promise<IResJoinDate> {
  try {
    const resp: AxiosResponse<IResJoinDate> = await axios.get(
      `${fullApiUrl}/api/users/days/email/${email}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read date (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read date:", error);
    } else {
      console.error("Failed to read date: An unknown error occurred.");
    }
  }
}

export async function updateName(
  email: string,
  username: string,
): Promise<IResUpdate> {
  try {
    const resp: AxiosResponse<IResUpdate> = await axios.put(
      `${fullApiUrl}/api/users/updateName`,
      {
        newName: username,
        email: email,
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

export async function readUserLearningStatus(
  email: string,
): Promise<IResLearningStatus> {
  try {
    const resp: AxiosResponse<IResLearningStatus> = await axios.post(
      `${fullApiUrl}/api/users/get-user-learning-status`,
      {
        email: email,
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Failed to read learning status (AxiosError):",
        error.message,
      );
    } else if (error instanceof Error) {
      console.error("Failed to read learning status:", error);
    } else {
      console.error(
        "Failed to read learning status: An unknown error occurred.",
      );
    }
  }
}

export async function readUserParticipationCount(
  email: string,
): Promise<IResParticipationCount> {
  try {
    const resp: AxiosResponse<IResParticipationCount> = await axios.get(
      `${fullApiUrl}/api/challenge/get-user-participation-count/${email}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Failed to read participation count (AxiosError):",
        error.message,
      );
    } else if (error instanceof Error) {
      console.error("Failed to read participation count:", error);
    } else {
      console.error(
        "Failed to read participation count: An unknown error occurred.",
      );
    }
  }
}

export async function readUserPostCheck(
  email: string,
): Promise<boolean[] | undefined> {
  try {
    const resp: AxiosResponse<boolean[]> = await axios.post(
      `${fullApiUrl}/api/users/get-post-check`,
      { email },
    );
    return resp.data;
  } catch (error) {
    handleAxiosError(error, "Failed to read post check");
    return undefined;
  }
}
function handleAxiosError(error: unknown, message: string): void {
  if (axios.isAxiosError(error)) {
    console.error(`${message} (AxiosError):`, error.message);
  } else if (error instanceof Error) {
    console.error(`${message}:`, error.message);
  } else {
    console.error(`${message}: An unknown error occurred.`);
  }
}
