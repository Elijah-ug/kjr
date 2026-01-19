import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const adminQueries= createApi({
    reducerPath:"admin",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_ADMIN_BASE_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem("token")
            if(token){
             headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ["AdminTags"],
    endpoints:(builder)=>({
        getAdmins: builder.query({
            query:()=>({
                url:"/",
                method:"GET"
            }),
            providesTags: ()=>["AdminTags"]
        }),
        getAdmin: builder.query({
            query:()=>({
                url:"/me",
                method:"GET"
            }),
            providesTags: ()=>["AdminTags"]
        }),

        createAdmin: builder.mutation({
            query:(body)=>({
                url:"/",
                method:"POST",
                body
            }),
            invalidatesTags: ()=>["AdminTags"]
        }),

        updateAdmin: builder.mutation({
            query:({body, id})=>({
                url:`/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags: ()=>["AdminTags"]
        }),

        destroyAdmin: builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ()=>["AdminTags"]
        }),
        loginAdmin: builder.mutation({
            query:(body)=>({
                url:"/login",
                method:"POST",
                body
            }),
        })
    })
})
export const {useGetAdminsQuery, useGetAdminQuery, useCreateAdminMutation, useUpdateAdminMutation, useDestroyAdminMutation, useLoginAdminMutation}=adminQueries