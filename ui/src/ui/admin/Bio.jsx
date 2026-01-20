import React from "react";
import { useGetAdminQuery } from "../state/features/admin";
import { User, ShieldCheck, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Bio = () => {
  const { data } = useGetAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const admin = data?.currentAdmin;

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-sm shadow-md border-muted">
      <CardContent className="flex flex-col items-center gap-5 py-6">
        {/* Avatar */}
        <div className="relative">
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 ring-4 ring-blue-200">
            <User className="h-8 w-8 text-blue-600" />
          </div>

          {data && <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />}
        </div>

        {/* Status */}
        {data && (
          <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Online</span>
        )}

        {/* Info */}
        <div className="w-full space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Name</span>
            <span className="font-semibold">{admin?.name || "N/A"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <Mail className="h-4 w-4" /> Email
            </span>
            <span className="font-semibold">{admin?.email || "N/A"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> Role
            </span>
            <span className="font-semibold capitalize">{admin?.role || "N/A"}</span>
          </div>
        </div>

        {/* Logout */}
        <Button onClick={handleLogout} className="w-full bg-blue-600 hover:bg-blue-500">
          Logout
        </Button>
      </CardContent>
    </Card>
    </div>
  );
};
