import React, { useState } from 'react';
import { Button, Tooltip, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Head } from '@inertiajs/react';
import DashboardLayout from "../../Layouts/DashboardLayout";
import { ArrowLeft, Trash2, Check, X, MessageSquare, Clock } from 'lucide-react';

export const DeleteIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M8.60834 13.75H11.3833"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.91669 10.4167H12.0834"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

// Status Badge component
const StatusBadge = ({ status }) => {
    const statusConfig = {
        pending: { color: "bg-yellow-100 text-yellow-800", label: "Pendiente" },
        in_review: { color: "bg-blue-100 text-blue-800", label: "En revisión" },
        approved: { color: "bg-green-100 text-green-800", label: "Aprobado" },
        rejected: { color: "bg-red-100 text-red-800", label: "Rechazado" },
    };

    const config = statusConfig[status.toLowerCase()] || statusConfig.pending;

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
            {config.label}
        </span>
    );
};

// Format date helper
const formatDate = (dateString) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default function FeedbackShow({ feedback }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
    const [responseText, setResponseText] = useState('');

    const handleDeleteConfirm = () => {
        console.log('Confirmar eliminación del feedback');
        // Implement your delete logic here
        setIsDeleteModalOpen(false);
    };

    const handleResponseSubmit = () => {
        console.log('Enviar respuesta:', responseText);
        // Implement your response submission logic here
        setIsRespondModalOpen(false);
    };

    const handleStatusUpdate = (newStatus) => {
        console.log(`Cambiando estado a: ${newStatus}`);
    
        router.patch(route('feedback.updateStatus', feedback.id), {
            status: newStatus,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                console.log(`Estado actualizado a: ${newStatus}`);
            },
        });
    };

    return (
        <DashboardLayout>
            <Head title={`Feedback #${feedback.id} - Detalles`} />
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between mb-6 p-2">
                    {/* Arrow back and title */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="bordered"
                            isIconOnly
                            onPress={() => window.history.back()}
                            aria-label="Volver atrás"
                        >
                            <ArrowLeft />
                        </Button>
                        <h1 className="text-2xl font-bold">Detalle de Feedback #{feedback.id}</h1>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-2">
                        {feedback.status.toLowerCase() === 'pending' && (
                            <Tooltip content="Marcar como en revisión">
                                <Button
                                    variant="bordered"
                                    color="primary"
                                    startContent={<MessageSquare size={18} />}
                                    onClickCapture={() => handleStatusUpdate('in_review')}
                                >
                                    En revisión
                                </Button>
                            </Tooltip>
                        )}

                        <Tooltip content="Eliminar feedback">
                            <Button
                                variant="bordered"
                                color="danger"
                                startContent={<Trash2 size={18} />}
                                onClickCapture={() => setIsDeleteModalOpen(true)}
                            >
                                Eliminar
                            </Button>
                        </Tooltip>

                        <Tooltip content="Aprobar feedback">
                            <Button
                                variant="bordered"
                                color="success"
                                startContent={<Check size={18} />}
                                onClickCapture={() => console.log('Aprobar feedback')}
                                isDisabled={feedback.status.toLowerCase() === 'approved'}
                            >
                                Aprobar
                            </Button>
                        </Tooltip>

                        <Tooltip content="Rechazar feedback">
                            <Button
                                variant="bordered"
                                color="warning"
                                startContent={<X size={18} />}
                                onClickCapture={() => console.log('Rechazar feedback')}
                                isDisabled={feedback.status.toLowerCase() === 'rejected'}
                            >
                                Rechazar
                            </Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Content Box */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    {/* Header & Status */}
                    <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-6">
                        <h2 className="text-lg font-semibold">Detalles del Feedback</h2>
                        <StatusBadge status={feedback.status} />
                    </div>

                    {/* Feedback Info */}
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                        {/* ID */}
                        <div>
                            <span className="text-gray-600 font-bold block mb-1">ID</span>
                            <p className="bg-gray-50 p-2 rounded">{feedback.id}</p>
                        </div>

                        {/* Fecha de creación */}
                        <div>
                            <span className="text-gray-600 font-bold block mb-1">Fecha de creación</span>
                            <p className="bg-gray-50 p-2 rounded flex items-center">
                                <Clock size={16} className="mr-2 text-gray-500" />
                                {formatDate(feedback.created_at)}
                            </p>
                        </div>

                        {/* Username */}
                        <div>
                            <span className="text-gray-600 font-bold block mb-1">Usuario</span>
                            <p className="bg-gray-50 p-2 rounded">{feedback.username}</p>
                        </div>

                        {/* Email */}
                        <div>
                            <span className="text-gray-600 font-bold block mb-1">Email</span>
                            <p className="bg-gray-50 p-2 rounded">{feedback.email}</p>
                        </div>
                    </div>

                    {/* Feedback Message */}
                    <div className="mb-6">
                        <span className="text-gray-600 font-bold block mb-2">Mensaje</span>
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                            <p className="whitespace-pre-wrap">{feedback.message}</p>
                        </div>
                    </div>

                    {/* Timeline / History (for future expansion) */}
                    <div className="border-t border-gray-200 pt-4 mt-6">
                        <h3 className="text-gray-600 font-bold mb-2">Historial</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                            <Clock size={14} className="mr-2" />
                            <span>Última actualización: {formatDate(feedback.updated_at)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <Modal isOpen={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <ModalContent>
                    <ModalHeader>Confirmar eliminación</ModalHeader>
                    <ModalBody>
                        <p>¿Estás seguro de que deseas eliminar este feedback? Esta acción no se puede deshacer.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="bordered" onClickCapture={() => setIsDeleteModalOpen(false)}>
                            Cancelar
                        </Button>
                        <Button color="danger" onClickCapture={handleDeleteConfirm}>
                            Eliminar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Response Modal */}
            <Modal isOpen={isRespondModalOpen} onOpenChange={setIsRespondModalOpen} size="lg">
                <ModalContent>
                    <ModalHeader>Responder al feedback #{feedback.id}</ModalHeader>
                    <ModalBody>
                        <p className="mb-2">Mensaje original:</p>
                        <div className="p-3 bg-gray-50 rounded-md mb-4 text-sm">
                            {feedback.message}
                        </div>
                        <p className="mb-2">Tu respuesta:</p>
                        <Textarea
                            placeholder="Escribe tu respuesta aquí..."
                            value={responseText}
                            onChange={(e) => setResponseText(e.target.value)}
                            rows={5}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="bordered" onClickCapture={() => setIsRespondModalOpen(false)}>
                            Cancelar
                        </Button>
                        <Button color="primary" onClickCapture={handleResponseSubmit}>
                            Enviar respuesta
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </DashboardLayout>
    );
}