import dynamic from 'next/dynamic';

const ProtectedPage = dynamic(() => import('../components/ProtectedPage'), { ssr: false });

function HomePage() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <ProtectedPage />
    </>
  );
}

export default HomePage;
