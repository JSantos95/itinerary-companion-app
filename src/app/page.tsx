import Link from "next/link";
import {
  SignedIn,
  SignedOut
} from '@clerk/nextjs'

export default function HomePage() {
  return (
    <main className="p-3">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Sign Up
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          Your In
        </div>
      </SignedIn>
    </main>
  );
}
