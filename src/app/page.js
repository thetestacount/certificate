import {useRouter} from "next/navigation";

const Home = () => {
  const router = useRouter();

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
