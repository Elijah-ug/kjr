import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const newsQueries= createApi({
    reducerPath:"news",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_NEWS_BASE_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem("token")
            if(token){
             headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes:["NewsTags"],
    endpoints:(builder)=>({
        getAllNews: builder.query({
            query:()=>({
                url:"/",
                method:"GET"
            }),
            providesTags:["NewsTags"]
        }),
        getNews: builder.query({
            query:(newsId)=>({
                url:`/${newsId}`,
                method:"GET"
            }),
            providesTags:["NewsTags"]
        }),

        postNews: builder.mutation({
            query:(body)=>({
                url:"/",
                method:"POST",
                body
            }),
            invalidatesTags:["NewsTags"]
        }),

        updateNews: builder.mutation({
            query:({newsId, ...body})=>({
                url:`/${newsId}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["NewsTags"]
        }),

        destroyNews: builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["NewsTags"]
        }),
    })
})
export const {useGetAllNewsQuery, useGetNewsQuery, usePostNewsMutation, useUpdateNewsMutation, useDestroyNewsMutation}=newsQueries
