import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

export function TopNav() {
    return (
        <nav className="flex w-flex p-3 items-center justify-between border-b-4 border-b-black text-xl font-semibold">
            <div>Itinerary Campanion App</div>

            <div>
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