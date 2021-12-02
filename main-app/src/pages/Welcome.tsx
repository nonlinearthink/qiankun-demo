import React from 'react';

const WelcomePage: React.FC = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>微前端演示DEMO</h1>
    </div>
  );
};

export default WelcomePage;
