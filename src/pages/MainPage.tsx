import HowThisWasMade from '../components/HowThisWasMade';
import LilFooter from '../components/LilFooter';
import MainSection from '../components/MainSection';
import WorkSection from '../components/WorkSection';

export default function MainPage() {
  return (
    <>
      <MainSection />
      <div className='w-full h-full bg-blue'/>
      <WorkSection />
      <HowThisWasMade />
      <div className='h-[25%]' />
      <LilFooter />
    </>
  )
}
