import React, { useState } from "react";
import { useGetAdminQuery } from "../state/features/admin";

export const Bio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: loginLoading, error } = useGetAdminQuery(undefined, { refetchOnMountOrArgChange: true });
  console.log("data for logged ==>", data);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    localStorage.removeItem("token");
    window.location.href = "/";
    return navigate("/");
  };
  return (
    <div>
      {" "}
      <div className="flex justify-end items-center gap-3 ">
        <div className="flex flex-col items-end sm:items-center gap-5 sm:w-sm">
          <div className="flex items-center gap-3">
            <div className="relative bg-gray-500 p-2 rounded-full cursor-pointer  ">
              <User onClick={() => setIsModalOpen(!isModalOpen)} className="" />
              {data && (
                <span className="absolute bottom-0 right-1 inline-flex rounded-full h-3 w-3 bg-green-400  "></span>
              )}
            </div>
            {data && <span className="text-sm font-semibold text-green-500">{data.message && "online"}</span>}
          </div>
          {isModalOpen && (
            <Card className="  w-xs bg-gray-600 border-none text-gray-200">
              <CardContent className="grid gap-5 py-3">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">Name:</span>
                    <span>{data?.currentAdmin.name || "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <span>{data?.currentAdmin.email || "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Role:</span>
                    <span>{data?.currentAdmin.role || "N/A"}</span>
                  </div>
                </div>
                <div className="">
                  {data && (
                    <Button
                      onClick={handleLogout}
                      className="bg-blue-500 px-5 py-1 rounded font-semibold hover:bg-blue-400"
                    >
                      Logout
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
