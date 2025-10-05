"use client";
import React, { createContext, useCallback, useContext, useState } from "react";

interface Toast { id: number; message: string }
interface ToastCtx { show: (message: string) => void }

const Ctx = createContext<ToastCtx | null>(null);

export function ToastProvider({ children }: React.PropsWithChildren) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = useCallback((message: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2000);
  }, []);

  return (
    <Ctx.Provider value={{ show }}>
      {children}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 space-y-2 z-50">
        {toasts.map((t) => (
          <div key={t.id} className="px-3 py-2 rounded-[8px] bg-black/80 text-white text-[12px] shadow">
            {t.message}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
