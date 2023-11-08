"use client";
import { UserDetails } from "@/types/userDetails";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import * as z from "zod";
import { ThreadValidation } from "@/lib/validations/thread";


// import { UserValidation } from "@/lib/validations/user";

  function PostThread({ userId }: { userId: string }) {
 
const router = useRouter();
const pathname = usePathname();
  
const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread: "",
        accountId: userId,
        
      },
    });

  return <h1 className="text-white">post thread form</h1>;
  //TODO: add form

}

export default PostThread;
//TODO: add form
