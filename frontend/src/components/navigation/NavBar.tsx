import Link from 'next/link';

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Component() {
  return (
    <header className="fixed top-0 left-0 w-full px-4 lg:px-6 h-14 flex items-center  bg-black z-10">
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6 text-gray-500" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
