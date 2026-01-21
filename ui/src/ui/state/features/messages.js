import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const messageQueries= createApi({
    reducerPath:"message",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_MESSAGES_BASE_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem("token")
            if(token){
             headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes:["Messages"],
    endpoints:(builder)=>({
        getMessages: builder.query({
            query:()=>({
                url:"/",
                method:"GET"
            }),
            providesTags:["Messages"]
        }),
        getMessage: builder.query({
            query:(msgId)=>({
                url:`/${msgId}`,
                method:"GET"
            }),
            providesTags:["Messages"]
        }),

        sendMessage: builder.mutation({
            query:(body)=>({
                url:"/",
                method:"POST",
                body
            }),
            invalidatesTags:["Messages"]
        }),

        updateMessage: builder.mutation({
            query:({msgId, ...body})=>({
                url:`/${msgId}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["Messages"]
        }),

        destroyMessage: builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["Messages"]
        }),
    })
})
export const {useGetMessagesQuery, useGetMessageQuery, useSendMessageMutation, useDestroyMessageMutation, useUpdateMessageMutation}=messageQueries
