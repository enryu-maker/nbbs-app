import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  isAxiosError,
} from "axios";

export class ApiError extends Error {
  readonly status?: number;
  readonly data?: unknown;
  readonly code?: string;
  readonly isAxiosError: boolean;

  constructor(
    message: string,
    status?: number,
    data?: unknown,
    code?: string,
    isAxiosError = false
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.code = code;
    this.isAxiosError = isAxiosError;

    // Restore prototype chain for custom Error subclasses
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/**
 * Type guard to check if an unknown error is an instance of ApiError.
 */
export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

/**
 * Safely extracts a meaningful message from an unknown error payload without using `any`.
 */
function extractErrorMessage(data: unknown, fallbackMessage: string): string {
  if (typeof data === "string" && data.trim().length > 0) {
    return data;
  }

  if (typeof data === "object" && data !== null) {
    const record = data as Record<string, unknown>;

    if (typeof record.message === "string" && record.message.trim().length > 0) {
      return record.message;
    }
    if (typeof record.detail === "string" && record.detail.trim().length > 0) {
      return record.detail;
    }
    if (typeof record.error === "string" && record.error.trim().length > 0) {
      return record.error;
    }
    if (
      Array.isArray(record.non_field_errors) &&
      record.non_field_errors.length > 0 &&
      typeof record.non_field_errors[0] === "string"
    ) {
      return record.non_field_errors[0];
    }
  }

  return fallbackMessage;
}

/**
 * Normalizes any error (Axios, native Error, or unknown) into a structured ApiError.
 */
export function normalizeApiError(error: unknown): ApiError {
  if (isApiError(error)) {
    return error;
  }

  if (isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      const data: unknown = error.response.data;
      const message = extractErrorMessage(
        data,
        `Request failed with status ${status}`
      );
      return new ApiError(message, status, data, error.code, true);
    }

    if (error.request) {
      return new ApiError(
        "No response received from server. Please check your network connection.",
        undefined,
        undefined,
        error.code ?? "ERR_NETWORK",
        true
      );
    }

    return new ApiError(
      error.message || "Failed to configure request",
      undefined,
      undefined,
      error.code,
      true
    );
  }

  if (error instanceof Error) {
    return new ApiError(error.message);
  }

  return new ApiError(
    "An unexpected error occurred",
    undefined,
    error
  );
}

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || ""
).replace(/\/+$/, "");

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to normalize errors through the Axios pipeline
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: unknown) => {
    return Promise.reject(normalizeApiError(error));
  }
);

/**
 * Generic API client wrapper around Axios.
 */
export async function apiClient<T>(
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<T> {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  try {
    const response = await axiosInstance.request<T>({
      url: cleanEndpoint,
      ...options,
      headers: {
        ...options.headers,
      },
    });

    // Handle 204 No Content
    if (response.status === 204) {
      return undefined as unknown as T;
    }

    return response.data;
  } catch (error: unknown) {
    throw normalizeApiError(error);
  }
}

