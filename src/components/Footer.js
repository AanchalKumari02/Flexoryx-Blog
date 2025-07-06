export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400 px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Flexoryx Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}