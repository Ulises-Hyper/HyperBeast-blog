import { ChevronDownIcon } from '@/Components/icon/ChevronDownIcon';
import { DeleteIcon } from '@/Components/icon/DeleteIcon';
import { EditIcon } from '@/Components/icon/EditIcon';
import { SearchIcon } from '@/Components/icon/SearchIcon';
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    Button,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import { Link } from "@inertiajs/react";
import { PlusIcon } from "lucide-react";
import React from 'react';

export const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'USER ID', uid: 'user_id', sortable: true},
    { name: 'TITLE', uid: 'title', sortable: true },
    { name: 'SLUG', uid: 'slug', sortable: true },
    { name: 'STATUS', uid: 'status', sortable: true },
    { name: 'PUBLISHED', uid: 'published_at', sortable: true },
    { name: 'FEATURED', uid: 'is_featured', sortable: true },
    { name: 'PINNED', uid: 'is_pinned', sortable: true },
    { name: 'VIEWS', uid: 'views_count', sortable: true },
    { name: 'ACTIONS', uid: 'actions'}
];

export const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'pending_review', label: 'Pending Review' },
    { value: 'published', label: 'Published' },
    { value: 'archived', label: 'Archived' },
];

export const statusColorMap = [
    { value: 'draft', color: 'default' },
    { value: 'pending_review', color: 'warning' },
    { value: 'published', color: 'success' },
    { value: 'archived', color: 'danger' },
];

const INITIAL_VISIBLE_COLUMNS = ["id", "user_id", "title", "slug", "status", "published_at", "is_featured", "is_pinned", "views_count", "actions"];

export default function Index({ posts }) {

    console.log("Valor de posts: ", posts);

    const [filterValue, setFilterValue] = React.useState('');
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState(new Set(statusOptions.map(opt => opt.value)));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({ column: 'id', direction: 'ascending' });
    const [page, setPage] = React.useState(1);
    const { isOpen, onOpen, OnOpenChange } = useDisclosure();

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;
        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredPosts = posts;

        if (hasSearchFilter) {
            filteredPosts = filteredPosts.filter((post) =>
                (post.title?.toLowerCase().includes(filterValue.toLowerCase()) ||
                post.slug?.toLowerCase().includes(filterValue.toLowerCase()))
            );
        }

        if (Array.from(statusFilter).length !== statusOptions.length) {
            filteredPosts = filteredPosts.filter((post) =>
                Array.from(statusFilter).includes(post.status)
            );
        }

        return filteredPosts;
    }, [posts, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / 10);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const firts = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = firts < second ? -1 : firts > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((post, columnKey) => {
        switch (columnKey) {
            case "image":
                return (
                    <img
                        src={post.image}
                        alt={post.name}
                        className="w-12 h-12 object-cover rounded-full"
                    />
                );
            case "actions":
                return (
                    <div className="relative flex items-center justify-center gap-2">
                        <Tooltip content="Editar post">
                            <Link
                                href={route("dashboard.posts.edit", post.id)}
                                className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-primary"
                            >
                                <EditIcon size={18} />
                            </Link>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar post">
                            <span
                                className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDelete(post.id)}
                            >
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            case "status":
                const statusColor = statusColorMap.find(s => s.value === post.status)?.color || "default";
                return (
                    <Chip className="capitalize" color={statusColor} size="sm" variant="flat">
                        {post[columnKey]}
                    </Chip>
                );
            case "published_at":
                return post.published_at ? post.published_at : <span className="text-black italic">Sin publicar</span>;
            case "is_featured":
                return post.is_featured ? <span className="text-green-600 font-semibold">Sí</span> : <span className="text-black">No</span>;
            case "is_pinned":
                return post.is_pinned ? <span className="text-green-600 font-semibold">Sí</span> : <span className="text-black">No</span>;
            default:
                return post[columnKey] ?? <span className="text-default-400">-</span>;
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-3 items-end">
                <Input
                    isClearable
                    className="w-full sm:max-w-[44%]"
                    placeholder="Buscar por nombre o slug..."
                    startContent={<SearchIcon />}
                    value={filterValue}
                    onClear={() => onClear()}
                    onValueChange={onSearchChange}
                    variant="faded"
                    style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                        padding: "0 12px 0 12px",
                    }}
                />
                <div className="flex gap-3">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                endContent={<ChevronDownIcon className="text-sm text-black" />}
                                variant='faded'
                            >
                                Estado
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Filtro de estado"
                            closeOnSelect={false}
                            selectionMode="multiple"
                            selectedKeys={statusFilter}
                            onSelectionChange={setStatusFilter}
                        >
                            {statusOptions.map((status) => (
                                <DropdownItem key={status.value} className="capitalize text-black">
                                    {status.label}
                                </DropdownItem>
                            ))};
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger className="hidden sm:flex z-0">
                            <Button
                                endContent={<ChevronDownIcon />}
                                variant="faded"
                            >
                                Columnas
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Columnas de tabla"
                            closeOnSelect={false}
                            selectionMode="multiple"
                            selectedKeys={visibleColumns}
                            onSelectionChange={setVisibleColumns}
                        >
                            {columns.map((column) => (
                                <DropdownItem key={column.uid} className="capitalize">
                                    {column.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Button color="primary" onPress={() => {
                        setSelectedCategory(null)
                        onOpen();
                    }}>
                        <PlusIcon size={16} />
                        Crear Post
                    </Button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-black text-sm">
                    Total {posts.length} artículos
                </span>
                <label className="flex items-center text-black text-sm">
                    Filas por página:
                    <select
                        className="bg-transparent outline-none text-black text-sm"
                        onChange={onRowsPerPageChange}
                        value={rowsPerPage}
                        style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none"
                        }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </div>
        </div>
    ), [filterValue, statusFilter, visibleColumns, onSearchChange, onRowsPerPageChange, posts.length, hasSearchFilter])

    const bottomContent = React.useMemo(() => (
        <div className="py-2 px-2 flex justify-center">
            <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
            />
        </div>
    ), [items.length, page, pages, hasSearchFilter]);

    return (
        <DashboardLayout title="Artículos">
            <div className="md:px-6 px-4">
                <h1 className="text-2xl font-semibold mb-6">Gestión de Artículos</h1>
                <Table
                    isHeaderSticky
                    aria-label="Tabla de artículos"
                    bottomContent={bottomContent}
                    bottomContentPlacement="outside"
                    classNames={{
                        wrapper: "max-h-[calc(100vh-300px)]"
                    }}
                    sortDescriptor={sortDescriptor}
                    topContent={topContent}
                    topContentPlacement="outside"
                    onSortChange={setSortDescriptor}
                >
                    <TableHeader columns={headerColumns}>
                        {(column) => (
                            <TableColumn
                                key={column.uid}
                                align={column.uid === "actions" ? "center" : "start"}
                                allowsSorting={column.sortable}
                            >
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody emptyContent={"No se han encontrado artículos"} items={sortedItems}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </DashboardLayout>
    )
}