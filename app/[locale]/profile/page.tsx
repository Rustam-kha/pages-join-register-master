import React from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[color:var(--qt-gray-bg)] flex items-center justify-center font-bold">U</div>
          <div>
            <div className="font-semibold">User Name</div>
            <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Verified Vendor ✓</div>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="font-semibold mb-2">Security</div>
        <div className="grid sm:grid-cols-2 gap-2">
          <UIButton className="bg-white text-[color:var(--qt-primary-green)]">Enable 2FA</UIButton>
          <UIButton className="bg-white text-[color:var(--qt-primary-green)]">Change Password</UIButton>
        </div>
      </Card>
      <Card className="p-4">
        <div className="font-semibold mb-2">Preferences</div>
        <div className="grid gap-2">
          <label className="flex items-center justify-between">
            <span className="text-[14px]">Hide balances by default</span>
            <input type="checkbox" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-[14px]">Push notifications</span>
            <input type="checkbox" defaultChecked />
          </label>
        </div>
      </Card>
    </div>
  );
}
