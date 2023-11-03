import { signIn } from "next-auth/react";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import SignIn from "@/components/SignIn";

const Page = async () => {

  
  const session = await getServerSession(authOptions);
  return ( 
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignIn />
    </>
  )
}

export default Page