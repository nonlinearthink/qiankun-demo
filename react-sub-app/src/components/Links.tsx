import { Link } from 'react-router-dom';
import { Divider } from 'antd';

export default function Links() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Divider type="vertical" style={{ color: 'white' }} />
      <Link to="/test">Test</Link>
    </div>
  );
}
