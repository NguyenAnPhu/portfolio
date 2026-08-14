"use client";

import IMAGES from "@/assets/images";
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function SideNav() {
    return (
        <div className="m-2.5 rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="bg-black p-4">
                <div className="aspect-square w-10 mx-auto">
                    <img src={IMAGES.logo} className="w-full h-full object-contain" alt="logo" />
                </div>
            </div>
            <div className="m-4 flex flex-col gap-4">
                <Link href="/dashboard" className="flex justify-center">
                    <HomeOutlinedIcon/>
                </Link>
                <Link href="/dashboard/profile">Profile</Link>
                <Link href="/dashboard/template">Template</Link>
                <Link href="/dashboard/setting">Setting</Link>
                <Link href="/dashboard/logout">Logout</Link>
            </div>
        </div>
    );
}