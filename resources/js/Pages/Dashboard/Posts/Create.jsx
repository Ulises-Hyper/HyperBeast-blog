import React, { useRef } from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import PostTabs from "@/Components/post/PostTabs";
import PostSidebar from "@/Components/post/PostSidebar";
import { Button } from "@heroui/react";
import { Save, Upload, Eye } from "lucide-react";

export default function Create() {
    const saveFunctionRef = useRef(null);

    const handleSaveRegister = (saveFn) => {
        saveFunctionRef.current = saveFn;
    };

    const handleManualSave = async () => {
        if (!saveFunctionRef.current) return;

        try {
            const savedData = await saveFunctionRef.current();
            console.log("Guardado manual: ", savedData);
            // Aquí podrías enviar a una API con fetch o axios
        } catch (err) {
            console.error("Error al guardar: ", err);
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
                                    <PostTabs onSaveRegister={handleSaveRegister} />
                                </div>
                            </div>
                        </div>

                        {/* Barra lateral */}
                        <PostSidebar onSave={handleManualSave} />
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
