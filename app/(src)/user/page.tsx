/*
 * @Author: liaokt
 * @Description: 用户中心
 * @Date: 2024-09-09 10:43:24
 * @LastEditors: liaokt
 * @LastEditTime: 2024-09-09 10:43:29
 */
import { auth } from "@/lib/auth";

export default async function UserPage() {
  // 从session中获取登录信息
  const session = await auth();

  return <div>{session?.user ? <p>{JSON.stringify(session.user)}</p> : <p>未登录</p>}</div>;
}
