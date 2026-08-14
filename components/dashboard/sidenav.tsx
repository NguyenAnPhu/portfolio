"use client";

import IMAGES from "@/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const navItems = [
    { href: "/dashboard", icon: HomeOutlinedIcon, label: "Home" },
    { href: "/dashboard/profile", icon: AccountCircleOutlinedIcon, label: "Profile" },
    { href: "/dashboard/template", icon: SpaceDashboardOutlinedIcon, label: "Template" },
    { href: "/dashboard/setting", icon: SettingsOutlinedIcon, label: "Setting" },
    { href: "/dashboard/logout", icon: LogoutOutlinedIcon, label: "Logout" },
];

export default function SideNav() {
    const pathname = usePathname();

    return (
        <div className="m-4 rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="bg-grey-950 p-2">
                <div className="aspect-square w-12 mx-auto">
                    <img src={IMAGES.logo} className="w-full h-full object-contain" alt="logo" />
                </div>
            </div>
            <div className="m-4 flex flex-col gap-4">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={item.label}
                            className={`flex justify-center p-2 rounded-xl transition-all border ${
                                isActive
                                    ? "bg-brand-500 text-white border-brand-500 shadow-lg"
                                    : "bg-white text-grey-700 border-grey-100 shadow-md hover:text-brand-500  hover:shadow-lg"
                            }`}
                        >
                            <IconComponent sx={{ fontSize: "28px" }} className="transition-all" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}