import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold">
          Flexoryx Blog
        </Link>
        <nav>
          <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}