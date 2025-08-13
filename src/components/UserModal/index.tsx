import { Modal, Descriptions } from "antd";
import type { UserType } from "../../types/user";


interface Props {
  user: UserType | null;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: Props) {
  return (
    <Modal
      title="Detalhes do Usuário"
      open={!!user}
      onCancel={onClose}
      footer={null}
    >
      {user && (
        <Descriptions column={1} bordered>
          <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
          <Descriptions.Item label="Nome">{user.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        </Descriptions>
      )}
    </Modal>
  );
}
