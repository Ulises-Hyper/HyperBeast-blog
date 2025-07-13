import React, { useRef, useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import PostTabs from "@/Components/post/PostTabs";
import PostSidebar from "@/Components/post/PostSidebar";
import { Button } from "@heroui/react";
import { Save, Upload, Eye } from "lucide-react";
import { parseZonedDateTime } from "@internationalized/date";


export default function Create({ categories, user }) {
    const saveFunctionRef = useRef(null);
    const [status, setStatus] = useState("draft");
    const [tags, setTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [scheduleDate, setScheduleDate] = useState(
        parseZonedDateTime("2025-07-15T12:00[UTC]")
    );

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const [postData, setPostData] = useState({
        content: null,
        excerpt: '',
        image: null,
        image_preview: null,
        status: 'draft',
        schedule_date: '',
        visibility: 'public',
    })

    const handleSaveRegister = (saveFn) => {
        saveFunctionRef.current = saveFn;
    };

    const handleManualSave = async () => {
        if (!saveFunctionRef.current) return;

        try {
            const contentData = await saveFunctionRef.current();

            const dataToSend = {
                ...postData,
                content: contentData,
                status,
                schedule_date: scheduleDate
                    ? scheduleDate.toDate().toISOString().slice(0, 19).replace('T', ' ')
                    : null,
                tags,
                categories: [...selectedCategories],
            };

            const formData = new FormData();

            for (const key in dataToSend) {
                let value = dataToSend[key];

                if (key === 'categories' || key === 'tags') {
                    formData.append(key, JSON.stringify(value || []));
                } else if (key === 'schedule_date' && value) {
                    formData.append(key, scheduleDate.toDate().toISOString().slice(0, 19).replace('T', ' '));
                } else {
                    formData.append(
                        key,
                        typeof value === 'object' && !(value instanceof File)
                            ? JSON.stringify(value)
                            : value
                    );
                }
            }

            const response = await fetch('/dashboard/posts', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Errores de validación: ", errorData.errors);
                throw new Error('Error en la respuesta del servidor');
            }

            const result = await response.json();
            console.log("Post guardado: ", result);

        } catch (err) {
            console.error("Error al guardar el post: ", err);
        }
    };


    return (
        <DashboardLayout scrollable={false}>
            <div className="flex max-h-full">
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex overflow-hidden">
                        {/* Contenido principal */}
                        <div className="flex-1 flex flex-col overflow-auto">
                            <div className="md:m-8">
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold">Nuevo Post</h2>
                                </div>

                                <div className="mt-4">
                                    <PostTabs
                                        onSaveRegister={handleSaveRegister}
                                        postData={postData}
                                        setPostData={setPostData}
                                        status={status}
                                        setStatus={setStatus}
                                        scheduleDate={scheduleDate}
                                        setScheduleDate={setScheduleDate}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Barra lateral */}
                        <PostSidebar
                            categories={categories}
                            user={user}
                            postData={postData}
                            status={status}
                            scheduleDate={scheduleDate}
                            tags={tags}
                            setTags={setTags}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                        />
                    </div>

                    {/* Footer */}
                    <footer className="border-t p-4 flex items-center justify-between">
                        <Button startContent={<Upload size={16} />} variant="bordered">
                            Publicar
                        </Button>
                        <div className="flex gap-2 max-w-full">
                            <Button startContent={<Eye size={16} />} className="w-full" variant="bordered">
                                Preview
                            </Button>
                            <Button
                                onPress={handleManualSave}
                                startContent={<Save size={16} />}
                                className="w-full bg-black text-white"
                                variant="bordered"
                            >
                                Guardar
                            </Button>
                        </div>
                    </footer>
                </div>
            </div>
        </DashboardLayout>
    );
}
