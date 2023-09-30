import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const alQuranApi = createApi({
  reducerPath: "alQuranApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://equran.id/api/" }),
  endpoints: (builder) => ({
    getAllSurat: builder.query({
      query: () => "surat",
    }),
  }),
});

export const { useGetAllSuratQuery } = alQuranApi;
