import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import EditorWrapper from "@/Components/article/editorjs/EditorWrapper";
import { Button, Tabs, Tab, Link, Avatar, Select, SelectItem, DateInput, Divider } from "@heroui/react";
import { Save, Eye, Upload, Globe, Calendar, Link2, Clock } from "lucide-react";
import { DeleteIcon } from "@/Components/icon/DeleteIcon";
import { parseZonedDateTime } from "@internationalized/date";

export default function Create() {

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const now = new Date();
    const dateTimeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}[${timeZone}]`;

    const defaultValue = parseZonedDateTime(dateTimeString);

    return (
        <DashboardLayout scrollable={false} >
            <div className="flex max-h-full">
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex overflow-hidden">

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col overflow-auto">

                            <div className="md:m-8">
                                {/* Header */}
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold">Nuevo Post</h2>
                                </div>

                                {/* Tabs */}
                                <div className="mt-4">
                                    <Tabs aria-label="Options" color="primary" variant="bordered">
                                        {/* Editor Tab */}
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
                                                <div className="container">
                                                    <EditorWrapper/>
                                                </div>
                                                <div className="md:mt-4">
                                                    <label>Excerpt</label>
                                                    <textarea className="w-full p-4 rounded-lg border-none h-32 mt-1 shadow" placeholder="Escribe un pequeño resumen de tu publicación"></textarea>
                                                    <span className="text-sm text-gray-500">Los extractos son resúmenes opcionales elaborados a mano de su contenido.</span>
                                                </div>
                                                <div className="md:mt-4">
                                                    <label>Featured Image</label>
                                                    <div className="rounded-lg border-2 border-dashed border-gray-300 h-full w-full md:mt-1">
                                                        <div className="flex flex-col gap-4 justify-center items-center md:m-4">
                                                            <Upload size={28} />
                                                            <span className="text-gray-500">Drag and drop an image here, or click to select a file</span>
                                                            <Button variant="bordered">Select Image</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                        </Tab>

                                        {/* Advanced Tab */}
                                        <Tab
                                            key="advanced"
                                            title={
                                                <div className="flex items-center space-x-2">
                                                    <span>Advanced</span>
                                                </div>
                                            }
                                        >
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="mt-4">
                                                        <Select label="Status" placeholder="Draft" variant="bordered" value="Draft">
                                                            <SelectItem>Draft</SelectItem>
                                                            <SelectItem>Published</SelectItem>
                                                            <SelectItem>Scheduled</SelectItem>
                                                        </Select>
                                                    </div>
                                                    <div className="mt-4">
                                                        <DateInput
                                                            defaultValue={defaultValue}
                                                            label="Appointment time"
                                                            variant="bordered"
                                                            hourCycle={24}
                                                            timeZone={timeZone}
                                                        />
                                                    </div>
                                                </div>
                                                <Divider />
                                                <div class="flex justify-between items-center gap-4">
                                                    <div class="flex items-center space-x-2 text-sm text-gray-500">
                                                        <Clock size={16}/>
                                                        <span>Created: 26/5/2025, 22:14:11</span>
                                                    </div>
                                                    <div class="flex items-center space-x-2 text-sm text-gray-500">
                                                        <Clock size={16}/>
                                                        <span>Updated: 26/5/2025, 22:14:11</span>
                                                    </div>
                                                    <div class="flex items-center space-x-2 text-sm text-gray-500">
                                                        <DeleteIcon size={16}/>
                                                        <span>Deleted: Never</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>

                                {/* Advanced Content Section */}

                            </div>

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