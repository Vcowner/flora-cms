/*
 * @Author: liaokt
 * @Description:
 * @Date: 2024-09-06 14:39:28
 * @LastEditors: liaokt
 * @LastEditTime: 2024-09-09 14:06:10
 */

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/user" });
        }}>
        <Button>github 登录</Button>
      </form>
    </div>
  );
}
