import React from 'react';
import { FileText, MessageCircle, User, Users, FilePen, Trash2, Clock, Plus, Eye, Check, X, MoreVertical } from 'lucide-react';

const Avatar = ({ src, alt, size = 'md', status }) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
    };

    const statusColors = {
        online: 'bg-green-500',
        away: 'bg-yellow-500',
        offline: 'bg-gray-500'
    };

    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className={`${sizes[size]} rounded-full object-cover ring-2 ring-white`}
            />
            {status && (
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white ${statusColors[status]}`} />
            )}
        </div>
    );
};

const StatCard = ({ icon, label, value, color }) => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className={`bg-${color}-100 p-1 rounded-lg w-fit mb-4`}>
            {React.cloneElement(icon, { className: `text-${color}-600 w-6 h-6` })}
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">{label}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
);

const TaskItem = ({ title, priority, time, user }) => {
    const priorityStyles = {
        alta: 'bg-red-100 text-red-700',
        media: 'bg-yellow-100 text-yellow-700',
        baja: 'bg-green-100 text-green-700'
    };

    return (
        <div className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <div className="flex items-center gap-4 flex-1">
                <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <p className="text-gray-900 dark:text-white truncate font-medium">{title}</p>
                        <span className={`${priorityStyles[priority]} px-2 py-1 rounded-full text-xs font-semibold`}>
                            {priority}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300 text-sm">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{user}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg">
                <MoreVertical className="w-5 h-5" />
            </button>
        </div>
    );
};

const DashboardMain = () => {
    return (
        <main className="container mx-auto px-4 py-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    icon={<FileText />}
                    label="Total Entradas"
                    value="20"

                />
                <StatCard
                    icon={<MessageCircle />}
                    label="Comentarios"
                    value="847"
                />
                <StatCard
                    icon={<Users />}
                    label="Total Usuarios"
                    value="2.4k"
                />
                <StatCard
                    icon={<Eye />}
                    label="Total Vistas"
                    value="12.4k"
                />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tareas Pendientes */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tareas Pendientes</h2>
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            <Plus className="w-5 h-5 mr-2" />
                            <span className="hidden sm:inline">Nueva Entrada</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <TaskItem
                            title="Revisar artículo sobre Docker"
                            priority="alta"
                            time="Hoy"
                            user="María G."
                        />
                        <TaskItem
                            title="Actualizar guía de Kali Linux"
                            priority="media"
                            time="Mañana"
                            user="Juan P."
                        />
                        <TaskItem
                            title="Responder comentarios pendientes"
                            priority="baja"
                            time="Esta semana"
                            user="Carlos R."
                        />
                    </div>
                </div>

                {/* Usuarios Activos */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Usuarios Activos</h2>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium">
                            Ver todos →
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'María García', role: 'Editor', status: 'online', activity: 'Editando: Guía de Seguridad Web' },
                            { name: 'Juan Pérez', role: 'Autor', status: 'online', activity: 'Escribiendo nuevo artículo' },
                            { name: 'Ana Martínez', role: 'Moderador', status: 'away', activity: 'Revisando comentarios' },
                            { name: 'Carlos Ruiz', role: 'Autor', status: 'offline', activity: 'Última actividad: Hace 30 min' }
                        ].map((user, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Avatar src="https://picsum.photos/80" status={user.status} />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                                {user.role}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">{user.activity}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-gray-500">
                                        <MessageCircle className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-gray-500">
                                        <User className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actividades Recientes */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Actividades Recientes</h2>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium">
                            Ver todo →
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { user: 'Ana García', action: 'Creó Reporte Q4', icon: <FileText className="text-green-500" />, time: 'Hace 5 min' },
                            { user: 'Carlos Ruiz', action: 'Actualizó Marketing Digital', icon: <FilePen className="text-blue-500" />, time: 'Hace 2 horas' },
                            { user: 'María Torres', action: 'Eliminó Borrador v1', icon: <Trash2 className="text-red-500" />, time: 'Hace 1 min' }
                        ].map((activity, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                <Avatar src="https://picsum.photos/80" size="sm" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{activity.user}</h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {activity.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm">
                                        {activity.icon}
                                        <span>{activity.action}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comentarios */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Comentarios Recientes</h2>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium">
                            Ver todo →
                        </button>
                    </div>
                    <div className="space-y-2">
                        {[
                            {
                                name: "Pedro Sánchez",
                                comment: "Revisar números",
                                entry: "Presupuesto Q1",
                                time: "Hace 3 horas"
                            },
                            {
                                name: "Laura Mendez",
                                comment: "Excelente propuesta",
                                entry: "Estrategia 2024",
                                time: "Hace 4 horas"
                            },
                            {
                                name: "Isabel Díaz",
                                comment: "Agendar reunión",
                                entry: "Presupuesto Q1",
                                time: "Hace 1 día"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                <div className="flex items-start gap-3">
                                    <img
                                        src="https://picsum.photos/80"
                                        className="w-6 h-6 rounded-full object-cover ring-2 ring-white mt-1.5"
                                        alt={`Avatar de ${item.name}`}
                                    />

                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center gap-2">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {item.name}
                                            </h3>
                                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="text-green-500 hover:bg-green-100 dark:hover:bg-green-900 p-1 rounded">
                                                    <Check className="w-4 h-4" />
                                                </button>
                                                <button className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900 p-1 rounded">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-800 dark:text-gray-200 mt-0.5">
                                            {item.comment}
                                        </p>

                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                En {item.entry}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardMain;