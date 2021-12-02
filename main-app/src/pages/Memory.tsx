import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { MicroAppWithMemoHistory } from 'umi';

const MemoryPage: React.FC = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示抽屉
      </Button>
      <MicroAppWithMemoHistory name="react-sub-app" url="/" />
      <Drawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <MicroAppWithMemoHistory name="vue-sub-app" url="/vue" />
      </Drawer>
    </div>
  );
};

export default MemoryPage;
