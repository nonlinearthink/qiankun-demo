import './index.less';
import logo from '@/assets/logo.svg';
import { useModel } from 'umi';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          来自父应用的计数: {masterProps.count}{' '}
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              masterProps.setCount(masterProps.count + 1);
            }}
          />
        </p>
      </header>
    </div>
  );
}
