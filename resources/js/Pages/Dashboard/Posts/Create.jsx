import React, { useEffect, useRef } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Button, Tabs, Tab, Link, Avatar } from "@heroui/react";
import { Save, Eye, Upload, Globe, Calendar, Link2 } from "lucide-react";
import { DeleteIcon } from "@/Components/icon/DeleteIcon";

export default function Create() {

    // const ejInstance = useRef(null);
    // const editorRef = useRef(null);

    // useEffect(() => {
    //     if (!ejInstance.current) {
    //         ejInstance.current = new EditorJS({
    //             holder: editorRef.current,

    //             tools: {
    //                 header: Header,
    //                 list: List,
    //             },

    //             placeholder: 'Escribe algo...',

    //             onReady: () => {
    //                 console.log('Editor.js está listo');
    //             },
    //             onChange: async () => {
    //                 const content = await ejInstance.current.save();
    //                 console.log('Contenido actualizado:', content);
    //             },
    //         });
    //     }

    //     return () => {
    //         ejInstance.current?.destroy();
    //         ejInstance.current = null;
    //     };
    // }, []);

    return (
        <DashboardLayout scrollable={false} >
            <div className="flex max-h-full">
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex overflow-hidden">

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col overflow-hidden">

                            {/* Header */}
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">Nuevo Post</h2>
                            </div>

                            {/* Tabs */}
                            <div className="mt-4">
                                <Tabs aria-label="Options" color="primary" variant="bordered">
                                    <Tab
                                        key="editor"
                                        title={
                                            <div className="flex items-center space-x-2">
                                                <span>Editor</span>
                                            </div>
                                        }
                                    >

                                        {/* Editor Content Section */}
                                        <main className="md:mt-6">
                                            <div className="">
                                                {/* <div id="editorjs" ref={editorRef}></div> */}
                                            </div>
                                        </main>
                                    </Tab>
                                    <Tab
                                        key="advanced"
                                        title={
                                            <div className="flex items-center space-x-2">
                                                <span>Advanced</span>
                                            </div>
                                        }
                                    />
                                </Tabs>
                            </div>

                            {/* Advanced Content Section */}
                        </div>

                        {/* Post sidebar */}
                        <div className="w-[280px] max-h-screen border-1 overflow-y-auto bg-gray-50">
                            <div className="p-4 border-b bg-white">
                                <div className="flex items-center gap-4 justify-between mb-4">
                                    <Button className="w-full" startContent={<Upload size={16} />} variant="bordered">Publicar</Button>
                                    <Button className="w-full" startContent={<Eye size={16} />} variant="bordered">Avance</Button>
                                </div>
                                <Button startContent={<Save size={16} />} className="px-4 py-2 w-full bg-black text-white" variant="bordered">Guardar Borrador</Button>
                            </div>
                            <div className="p-4 border-b bg-white">
                                <h3 className="font-bold mb-3">Configuración de publicaciones</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Globe size={16} />
                                            <span className="text-[14px]">Status: Draft</span>
                                        </div>
                                        <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Eye size={16} />
                                            <span className="text-[14px]">Visibility: Public</span>
                                        </div>
                                        <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span className="text-[14px]">Schedule: Immediate</span>
                                        </div>
                                        <Button className="text-[14px] font-bold border-none bg-transparent" size="sm">Edit</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b bg-white">
                                <h3 className="font-bold mb-3">Estadísticas</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px]">Visitas</span>
                                        <span>1,252</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px]">Guardados</span>
                                        <span>5</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px]">Favoritos</span>
                                        <span>15</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px]">Me gustas</span>
                                        <span>631</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px]">Comentarios</span>
                                        <span>25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b bg-white">
                                <h3 className="font-bold mb-3">Información de la publicación</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-[12px]">AUTHOR</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                            <span className="text-[14px]">HyperBeast</span>
                                        </div>
                                    </div>
                                    <div>
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
                                    </div>
                                    <div>
                                        <span className="text-[12px]">PERMALINK</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Link size="sm" href="#">/hyperbeast/legend-of-x-part-3</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white mb-4">
                                <h3 className="font-bold mb-3">Acciones rápidas</h3>
                                <div className="space-y-3 flex flex-col">
                                    <Button variant="bordered" startContent={<Link2 size={20} />}>Share</Button>
                                    <Button variant="bordered" color="danger" startContent={<DeleteIcon size={20} />}>Move to Trash</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="border-t p-4 flex items-center justify-between">
                        <Button startContent={<Upload size={16} />} variant="bordered">Publicar</Button>
                        <div className="flex gap-2 max-w-full">
                            <Button startContent={<Eye size={16} />} className="w-full" variant="bordered">Preview</Button>
                            <Button startContent={<Save size={16} />} className="w-full bg-black text-white" variant="bordered">Guardar</Button>
                        </div>
                    </footer>
                </div>
            </div>
        </DashboardLayout>
    )
}