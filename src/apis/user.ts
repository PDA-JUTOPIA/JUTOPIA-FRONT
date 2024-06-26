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
