import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1  >Welcome to My App</h1>
      <p >This is the homepage.</p>
        <Link href="/login" style={{display:'flex',gap:'80px'}}>Go to Login</Link>
        <Link href="/register">Register</Link>
    </div>
  );
}
