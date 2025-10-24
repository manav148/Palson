import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-custom py-32">
        <div className="text-sm text-slate-600">
          <p>&copy; {currentYear} Palson Tax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
