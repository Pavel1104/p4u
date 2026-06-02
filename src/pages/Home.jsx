import LandingHeader from '../components/LandingHeader';
import Mission from '../components/Mission';
import Guarantees from '../components/Guarantees';
import QuickHelp from '../components/QuickHelp';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-af-sans text-ps-primary">
      <LandingHeader />
      <Mission />
      <Guarantees />
      <QuickHelp />
    </div>
  );
}
