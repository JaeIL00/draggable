import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_BASE_URL } = import.meta.env;

export const useApi = createApi({
  reducerPath: "useApi",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_BASE_URL,
  }),
  endpoints: (builder) => ({}),
});

export const {} = useApi;
