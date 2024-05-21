import { AxiosError } from "axios";
import client from "../api/Client";
import { ApiResponse } from "../interfaces/interfaces";
import { IClientForm } from "../interfaces/clients.interface";

export const getAllData = async (endpoint: string) => {
  try {
    const response = await client.get<ApiResponse>(endpoint);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};

export const getDataById = async (endpoint: string, id: number) => {
  try {
    const response = await client.get<ApiResponse>(`${endpoint}/${id}`);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};

export const createData = async (endpoint: string, data: IClientForm) => {
  try {
    const response = await client.post<ApiResponse>(`${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};
export const updateData = async (
  endpoint: string,
  id: number,
  data: FormData | IClientForm
) => {
  try {
    const response = await client.put<ApiResponse>(`${endpoint}/${id}`, data, {
      headers: {
        "Content-Type":
          endpoint === "operations"
            ? "multipart/form-data"
            : "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};

export const removeFile = async (
  endpoint: string,
  id: number,
  file?: "contract" | "installation_report"
) => {
  try {
    const response = await client.put<ApiResponse>(
      `${endpoint}/${id}`,
      { file },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};
export const deleteData = async (endpoint: string, id: number) => {
  try {
    const response = await client.delete<ApiResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.isAxiosError
      ? axiosError.response?.data || axiosError.message
      : error;
  }
};