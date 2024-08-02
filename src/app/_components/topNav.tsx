import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link';

export function TopNav() {
    return (
        <nav className="flex w-flex p-3 items-center justify-between border-b-4 border-b-black text-xl font-semibold">
            <Link href={'/'}>
                <div>Itinerary Campanion App</div>
            </Link>
            <div className='flex justify-center content-center flex-col'>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}