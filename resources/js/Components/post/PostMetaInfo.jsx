import React from "react";
import { Link, Avatar } from "@heroui/react";

export default function PostMetaInfo({ user, title }) {

    const slugify = (text) =>
    text?.toLowerCase()
        .normalize("NFD")                    // Separa letras de sus tildes
        .replace(/[\u0300-\u036f]/g, "")     // Elimina las tildes
        .replace(/[^a-z0-9\s-]/g, "")        // Quita caracteres no alfanuméricos excepto espacios y guiones
        .trim()
        .replace(/\s+/g, "-")                // Sustituye espacios por guiones
        .replace(/-+/g, "-")                 // Sustituye múltiples guiones por uno solo
        .replace(/^-+|-+$/g, "");            // Elimina guiones al inicio/final

    const slug = slugify(title);

    return (
        <div className="p-4 bg-white h-full">
            <h3 className="font-bold mb-3">Información de la publicación</h3>
            <div className="space-y-3">
                <div>
                    <span className="text-[12px]">AUTHOR</span>
                    <div className="flex items-center gap-2 mt-1">
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <span className="text-[14px]">{user.username}</span>
                    </div>
                </div>
                {/* <div>
                    <span className="text-[12px]">CREATED</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[14px]">24/05/2025</span>
                    </div>
                </div>
                <div>
                    <span className="text-[12px]">LAST MODIFIED</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[14px]">25/05/2025</span>
                    </div>
                </div> */}
                <div>
                    <span className="text-[12px]">PERMALINK</span>
                    <div className="flex items-center gap-2 mt-1">
                        <Link size="sm" href={`/${user.username}/${slug}`}>
                            /{user.username}/{slug}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}