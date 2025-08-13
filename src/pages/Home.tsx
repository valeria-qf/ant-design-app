import { useState } from "react";
import { Row, Col } from "antd";
import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";
import type { UserType } from "../types/user";


const mockUsers: UserType[] = [
  { id: 1, name: "João Silva", email: "joao@email.com" },
  { id: 2, name: "Maria Souza", email: "maria@email.com" },
];

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  return (
    <>
      <Row gutter={[16, 16]}>
        {mockUsers.map((user) => (
          <Col xs={24} sm={12} md={8} key={user.id}>
            <UserCard user={user} onViewDetails={() => setSelectedUser(user)} />
          </Col>
        ))}
      </Row>

      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </>
  );
}
