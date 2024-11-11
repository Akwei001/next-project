
import Link from "next/link"


export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main>
        <div>
          <h1>Dan&apos;s Computer<br/> Repair shop</h1>
          <address>
            555 Gateway Lane<br/>
            Kansas City, KS 55555
          </address>
          <p>Open daily: 9am to 5pm</p>
          <Link href="tel:5555555555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>

    </div>
  );
}
