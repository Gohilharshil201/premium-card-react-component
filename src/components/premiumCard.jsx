import React, { useState } from 'react';
import { Card, Button, Modal, message, Typography } from 'antd';
import { CrownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const PremiumCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showConfirmModal = () => {
    setIsModalOpen(true);
  };

  const handlePurchase = () => {
    setIsModalOpen(false);
    message.success('Premium plan purchased successfully!');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        style={{ width: 350, borderRadius: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        cover={
          <img
            alt="Premium Plan"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            style={{ padding: 30, height: 220, objectFit: 'contain' }}
          />
        }
      >
        <Title level={3}>
          <CrownOutlined style={{ color: '#fadb14', marginRight: 8 }} />
          Premium Plan
        </Title>
        <Text type="secondary">
          Unlock all features with the premium plan. Includes 24/7 support, custom themes, and more.
        </Text>
        <div style={{ marginTop: 20 }}>
          <Title level={4}>$49 / year</Title>
          <Button type="primary" block onClick={showConfirmModal}>
            Purchase Now
          </Button>
        </div>
      </Card>

      <Modal
        title="Confirm Purchase"
        open={isModalOpen}
        onOk={handlePurchase}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to purchase the Premium Plan for $49/year?</p>
      </Modal>
    </>
  );
};

export default PremiumCard;
