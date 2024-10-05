import { LogIn } from "lucide-react";

export const Authorization = () => {
  return (
    <div className="flex flex-col items-center">
      <LogIn size="1.5rem" className="text-indicator-normal" />
      <p className="text-xs font-medium text-text-secondary">Войти</p>
    </div>
  );
};
