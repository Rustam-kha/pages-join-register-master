import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function NotificationsPage() {
  const items = [
    { id: "n1", title: "Trade #T123 released", ts: "2h", status: "success" as const },
    { id: "n2", title: "Verify your email", ts: "1d", status: "active" as const },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {items.map((n) => (
        <Card key={n.id} className="p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{n.title}</div>
            <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{n.ts} ago</div>
          </div>
          <Badge variant={n.status as "success" | "active"}>{n.status}</Badge>
        </Card>
      ))}
    </div>
  );
}
