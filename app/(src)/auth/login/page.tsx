/*
 * @Author: liaokt
 * @Description: 登录页面
 * @Date: 2024-09-09 16:11:14
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-24 18:03:12
 */

import Image from "next/image";
import Link from "next/link";
import LoginForm from "./components/login-form";
export default function Login() {
  return (
    // 写个渐变背景
    <main className="h-screen flex flex-row p-4 bg-[#2c2638]">
      <div className="w-1/2 ">
        <div className="h-full rounded-md bg-[#483e96] shadow-sm shadow-gray-500 bg-[url('/app/assets/images/bg_login.png')] bg-cover bg-center">
          <Image src={"/app/assets/images/logo.png"} width={100} height={160} alt={""} />
        </div>
      </div>
      <div className="w-1/2 text-white">
        <div className="h-full p-20 flex flex-col justify-start ">
          <span className="font-medium text-4xl text-slate-100">Create an account</span>
          <span className="text-opacity-50 text-white text-sm mt-4 ml-2">
            Already have an account ？
            <Link href={""} className="border-b border-white ml-1">
              Log in
            </Link>
          </span>
          <div className="mt-12 ml-2">
            <LoginForm />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
