import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link';

export function TopNav() {
    return (
        <div className='relative h-full w-full'>
            <div className='absolute w-full top-0 z-50'>
                <nav className="flex w-flex p-3 items-center justify-between border-b-2 border-b-black text-xl font-semibold bg-slate-100">
                    <Link href={'/'}>
                        <div>Itinerary Campanion</div>
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
            </div>

        </div>

    );
}