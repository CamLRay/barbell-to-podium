import Link from "next/link"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const name = session?.user.name;

  return (
  <div className="flex justify-between bg-slate-200 text-black px-3 py-2">
    <div>
      <Link href="/" className="hover:text-slate-500">Home</Link>
    </div>
    <div className="cursor-default"> Amtgard v9.0 ASS - Amtgard Skill Selector</div>
    <div>
      {session ? <Link href="/profile" className="hover:text-slate-500">{name}</Link> : <Link href="/sign-in" className="hover:text-slate-500">Sign In</Link>}
      {/* <Link href="/sign-in" className="hover:text-slate-500">{ session ? name : "Sign In"}</Link> */}
    </div>
  </div>
  )
}

export default Navbar