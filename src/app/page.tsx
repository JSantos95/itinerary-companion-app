import {
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import UserHomePage from './_components/userHomePage';

export default function HomePage() {
  return (
    <main className="p-3">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Sign up above
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          <UserHomePage />
        </div>
      </SignedIn>
    </main>
  );
}
