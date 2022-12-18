import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questifyApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://questify-backend.goit.global",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "Card"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserData) => ({
        url: "/auth/register",
        method: "POST",
        body: newUserData,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    refresh: builder.mutation({
      query: (sid) => ({
        url: "/auth/refresh",
        method: "POST",
        body: sid,
      }),
      invalidatesTags: ["Auth"],
    }),
    createCard: builder.mutation({
      query: (cardData) => ({
        url: "/card",
        method: "POST",
        body: cardData,
      }),
      invalidatesTags: ["Auth", "Card"],
    }),
    editCard: builder.mutation({
      query: (cardData) => ({
        url: `/card/${cardData.id}`,
        method: "PATCH",
        body: cardData.body,
      }),
      invalidatesTags: ["Auth", "Card"],
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/card/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Card"],
    }),
    getAllUserCard: builder.query({
      query: () => "/card",
      providesTags: ["Auth", "Card"],
    }),
    completeCard: builder.mutation({
      query: (id) => ({
        url: `/card/complete/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Auth", "Card"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useCreateCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
  useGetAllUserCardQuery,
  useCompleteCardMutation,
} = questifyApi;
