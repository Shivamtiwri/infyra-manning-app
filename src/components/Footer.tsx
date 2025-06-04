export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-4 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <div>
          <p>2021 &copy; Mazer</p>
        </div>
        <div>
          <p>
            Crafted with{" "}
            <span className="text-red-500">
              <i className="bi bi-heart"></i>
            </span>{" "}
            by{" "}
            <a
              href="http://ahmadsaugi.com"
              className="text-blue-600 hover:underline"
            >
              A. Saugi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
