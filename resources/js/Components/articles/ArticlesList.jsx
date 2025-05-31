import React from "react";
import { Search, User, Star, Eye, ThumbsUp, Filter } from "lucide-react";
import { Button, Input } from "@heroui/react";
import { usePage } from "@inertiajs/react";
import dayjs from 'dayjs';

export default function ArticlesList() {

    const { posts } = usePage().props;

    console.log("Posts: ", posts);

    return (
        <main className="bg-gray-100">
            {/* Main Title */}
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Artículos de Ciberseguridad</h1>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center md:flex-row gap-4">
                        <div className="relative flex-grow border-1 border-gray-300 rounded-lg">
                            <Input
                                isClearable
                                style={{
                                    outline: "none",
                                    boxShadow: "none",
                                    border: "none",

                                }}
                                placeholder="Buscar artículos, tags o autores..."
                                size="lg"
                                type="search"
                                startContent={
                                    <Search className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                }
                            />
                        </div>
                        <div className="relative">
                            <select className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-4 pr-10 min-w-[200px]">
                                <option value="Todas las categorías">Todas las categorías</option>
                                <option value="Malware">Malware</option>
                                <option value="Seguridad Empresarial">Seguridad Empresarial</option>
                                <option value="OSINT">OSINT</option>
                                <option value="Seguridad Web">Seguridad Web</option>
                            </select>
                        </div>
                        <Button startContent={<Filter size={20} />} variant="bordered" size={"lg"}>Filtros</Button>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="container mx-auto px-6 md:px-10 mb-8">
                <div className="space-y-8">

                    {/* Single Article */}
                    {posts.data.map(post => (
                        <article key={post.id} className="bg-white rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row items-stretch">

                                <div className="w-full md:w-1/3">
                                    <img
                                        src={'https://picsum.photos/496/260'}
                                        alt={post.slug}
                                        className="w-full h-[260px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-between gap-4">
                                    <div className="flex flex-col gap-4 justify-between">
                                        <div className="flex gap-2 items-center flex-wrap">
                                            <button className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Malware</button>
                                            <span className="text-gray-500 text-sm">{dayjs(post.published_at).format("D MMMM YYYY")}</span>
                                            <a href="/" className="text-gray-500 text-sm hover:text-blue-600">
                                                <User size={16} className="inline-block mr-1" />
                                                {post.username}
                                            </a>
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="text-xl md:text-2xl font-bold mb-4">{post.title}</h2>
                                            <p className="text-gray-700 text-sm md:text-base">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#ransomware</span>
                                                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#seguridad</span>
                                                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#protección</span>
                                            </div>
                                        </div>
                                        {/* Footer */}
                                        <div className="flex justify-between items-center gap-3 mt-4">
                                            {/* Leer más */}
                                            <a
                                                href={`/${post.username}/${post.slug}`}
                                                className="text-blue-600 hover:underline text-sm"
                                            >
                                                Leer más →
                                            </a>

                                            {/* Stats */}
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <button className="hover:text-yellow-400 transition-colors">
                                                    <Star className="inline-block mr-1" size={16} />
                                                </button>
                                                <span className="flex items-center">
                                                    <Eye className="mr-1" size={16} />
                                                    {post.views_count}
                                                </span>
                                                <span className="flex items-center">
                                                    <ThumbsUp className="mr-1" size={16} />
                                                    245
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}