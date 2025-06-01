import { Bell, BookMarked, AlertCircle as CircleAlert, Clock, Heart, MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
import ToggleSwitch from "../common/ToggleSwitch";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformation from "@/Pages/Profile/Partials/UpdateProfileInformationForm";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";

export default function ProfileMain() {
    return (
        <section className="py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold">Editar Perfil</h1>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="border border-gray-300 bg-white rounded-lg p-6">
                        <UpdateProfileInformation />
                    </div>
                    <div className="border border-gray-300 bg-white rounded-lg p-6">
                        <UpdatePasswordForm />
                    </div>
                </div>
                <div className="border border-gray-300 bg-white rounded-lg p-6 mt-4">
                    <DeleteUserForm />
                </div>
            </div>
        </section>
    );
}