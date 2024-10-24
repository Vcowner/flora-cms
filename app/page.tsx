/*
 * @Author: liaokt
 * @Description:
 * @Date: 2024-09-06 14:39:28
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-24 18:10:21
 */

import { Button } from "@/app/components/button";
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
