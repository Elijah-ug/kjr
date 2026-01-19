import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const eventQueries= createApi({
    reducerPath:"admin",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_EVENTS_BASE_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem("token")
            if(token){
             headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes:["EventsTags"],
    endpoints:(builder)=>({
        getEvents: builder.query({
            query:()=>({
                url:"/",
                method:"GET"
            }),
            providesTags:["EventsTags"]
        }),
        getEvent: builder.query({
            query:(id)=>({
                url:`/${id}`,
                method:"GET"
            }),
            providesTags:["EventsTags"]
        }),

        postEvent: builder.mutation({
            query:(body)=>({
                url:"/",
                method:"POST",
                body
            }),
            invalidatesTags:["EventsTags"]
        }),

        updateEvent: builder.mutation({
            query:({body, id})=>({
                url:`/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["EventsTags"]
        }),

        destroyEvent: builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["EventsTags"]
        }),
    })
})
export const {useGetEventsQuery, useGetEventQuery, usePostEventMutation, useUpdateEventMutation, useDestroyEventMutation}=eventQueries
