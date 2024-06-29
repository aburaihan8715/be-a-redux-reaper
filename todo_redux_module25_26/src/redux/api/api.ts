import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    // GET ALL OR GET BASED ON QUERY
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority && priority !== 'all') {
          params.append('priority', priority);
        }
        return {
          url: `./tasks`,
          method: 'GET',
          params,
        };
      },
      providesTags: ['todo'],
    }),

    // GET ONE
    getTodo: builder.query({
      query: (id) => {
        return {
          url: `./tasks/${id}`,
          method: 'GET',
        };
      },
    }),

    // CREATE ONE
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: './tasks',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['todo'],
    }),

    // TOGGLE COMPLETE
    toggleComplete: builder.mutation({
      query: (options) => {
        return {
          url: `./tasks/${options.id}`,
          method: 'PATCH',
          body: options.data,
        };
      },
      invalidatesTags: ['todo'],
    }),

    // DELETE ONE
    removeTodo: builder.mutation({
      query: (id) => {
        return {
          url: `./tasks/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['todo'],
    }),

    // UPDATE ONE
    updateTodo: builder.mutation({
      query: (options) => {
        // console.log(options);
        return {
          url: `./tasks/${options.id}`,
          method: 'PATCH',
          body: options.data,
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useToggleCompleteMutation,
  useRemoveTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} = baseApi;
