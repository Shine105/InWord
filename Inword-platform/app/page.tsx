import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1  >Welcome to My App</h1>
      <p >This is the homepage.</p>
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Go to Login</Link>
        <Link href="/register">Register</Link>
    </div>
  );
}
