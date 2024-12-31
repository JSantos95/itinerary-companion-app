import {
  SignedIn,
  SignedOut,
  SignInButton,
} from '@clerk/nextjs'
import UserHomePage from './_components/userHomePage';

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className='bg-gradient-to-tl from-gray-400 to-gray-100 h-96 w-full relative'>
          <img src="https://utfs.io/f/rDt6ewO3q1fSOrtNyDu7skFGo5Bc2VOxmaXhTq6zJZUwDnEe" alt="bg-image"
            className='w-full h-full object-cover absolute mix-blend-overlay' />
          {/* Hero End */}
          <div className='h-full w-full flex justify-center text-center text-2xl'>
            <div className='w-1/2 pt-20'>
              <div className='text-5xl font-bold'>
                Plan out your next trip, event, or vacation here.
              </div>
              <div className='text-lg pt-5'>
                Laid back intinerary planner that helps you save and oraginize your day by day activites
              </div>
              <div className='pt-5'>
                <SignInButton >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                    Get started
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
          {/* Hero End */}
        </div>

      </SignedOut>
      <SignedIn>
        <div className='p-3'>
          <UserHomePage />
        </div>
      </SignedIn>
    </main>
  );
}
