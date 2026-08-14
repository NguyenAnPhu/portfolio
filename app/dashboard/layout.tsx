import IMAGES from "@/assets/images";
import SideNav from "@/components/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <SideNav />
            <div className="grow overflow-hidden md:overflow-y-auto bg-white my-4 rounded-lg mr-4 shadow-lg border border-grey-100">
                <div className="bg-grey-950 p-4 flex justify-between items-center gap-2 flex-wrap">
                    <h2 className="text-[20px] leading-7 text-white font-bold">Quản Lý Nhân Sự</h2>
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="text-[8px] leading-3 text-white text-end">Admin</p>
                            <p className="text-base font-medium text-white">Nguyễn An Phú</p>
                        </div>
                        <div className="aspect-square w-10 rounded-full border border-grey-50 overflow-hidden">
                            <img src={IMAGES.avatar} className="w-full h-full object-cover" alt="avatar" />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}