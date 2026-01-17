import type { Office } from "../types/type"
import { Link } from "react-router-dom"

export default function OfficeCard({ office }: OfficeCardProps) {

    console.log(office.thumbnail)

    return (
        <Link to={`/office/${office.slug}`}>
            <div className="card">
                <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">

                    <div className="relative w-full h-[200px]">
                        <p className="absolute top-5 left-5 rounded-full px-4 py-1 bg-[#0D903A] text-sm font-bold text-white">
                            Popular
                        </p>

                        <img
                            src={office.thumbnail}
                            className="w-full h-full object-cover"
                            alt={office.name}
                        />

                    </div>

                    <div className="flex flex-col p-5 gap-4">
                        <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                            {office.name}
                        </h3>

                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-xl">
                                Rp {office.price.toLocaleString("id-ID")}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">{office.duration} Days</p>
                                <img src="/assets/images/icons/clock.svg" className="w-6 h-6" />
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src="/assets/images/icons/location.svg" className="w-6 h-6" />
                                <p className="font-semibold">{office.city.name}</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="font-semibold">4.5/5</p>
                                <img src="/assets/images/icons/Star 1.svg" className="w-6 h-6" />
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src="/assets/images/icons/wifi.svg" className="w-6 h-6" />
                                <p className="font-semibold">Fast Connection</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/images/icons/security-user.svg" className="w-6 h-6" />
                                <p className="font-semibold">Secure 100%</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

interface OfficeCardProps {
    office: Office
}
