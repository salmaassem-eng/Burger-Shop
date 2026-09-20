import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Resturant
      </h1>
      <p style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/menu">View Menu</Link>
      </p>
      <p style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/menu/share">View Menu</Link>
      </p>
      <p style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/community">View Menu</Link>
      </p>
    </main>
  );
}
