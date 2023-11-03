'use client'

import { FC, useState } from "react";
// import { Button } from "./ui/Button";
// import { cn } from "@/lib/utils";
import { signIn, signOut } from "next-auth/react";
// import { Icons } from "./Icons";
// import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  // const {toast} = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithDiscord = async () => {
    setIsLoading(true);

    try {
      await signIn('discord');
    } catch (error) {
      // toast({
      //   title: 'Error',
      //   description: 'There was an error logging in with Google',
      //   variant: 'destructive',
      // })
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      alert(error)
    } finally {

    }
  }
  return (
    <div className='' {...props}>
      <button onClick={loginWithDiscord} className="w-full">
        {/* {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />} */}
        Discord
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default UserAuthForm;
