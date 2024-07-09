import { useClient } from 'next/client';

const Home = () => {
  const router = useClient().router;

  const handleViewCertificate = () => {
    const staticId = 'abcd-1234';
    router.push(`/certificate/${staticId}`);
  };

  return (
    <div>
      <h1>Welcome to the Certificate Viewer</h1>
      <button onClick={handleViewCertificate}>View Certificate</button>
    </div>
  );
};

export default Home;
