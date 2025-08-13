import { Card } from "antd";
import type { UserType } from "../../types/user";
import CustomButton from "../CustomButton";


interface Props {
  user: UserType;
  onViewDetails: () => void;
}

export default function UserCard({ user, onViewDetails }: Props) {
  return (
    <Card title={user.name} bordered>
      <p>Email: {user.email}</p>
      <CustomButton onClick={onViewDetails}>Ver Detalhes</CustomButton>
    </Card>
  );
}
