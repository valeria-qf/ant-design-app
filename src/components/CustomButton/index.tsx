import { Button } from "antd";
import type { ReactNode } from "react";


interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function CustomButton({ children, onClick }: CustomButtonProps) {
  return (
    <Button type="primary" onClick={onClick}>
      {children}
    </Button>
  );
}
