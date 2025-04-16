import {
    addToast,
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
} from "@heroui/react";
import { ChevronDownIcon, SearchIcon, Eye } from "lucide-react";
import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

export const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "USUARIO", uid: "username", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "MENSAJE", uid: "message" },
    { name: "ESTADO", uid: "status", sortable: true },
    { name: "ACCIONES", uid: "actions" },
];

export const statusOptions = [
    { name: "Pendiente", uid: "pending" },
    { name: "En revisión", uid: "in_review" },
    { name: "Resuelto", uid: "resolved" },
    { name: "Descartado", uid: "dismissed" },
];

const statusColorMap = {
    pending: "warning",
    in_review: "info",
    resolved: "success",
    dismissed: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "username", "email", "message", "status", "actions"];

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


export default function Feedback({ feedbacks }) {
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState(new Set(["pending"]));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "username",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;
        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredFeedbacks = [...feedbacks];

        if (hasSearchFilter) {
            filteredFeedbacks = filteredFeedbacks.filter((feedback) =>
                feedback.username.toLowerCase().includes(filterValue.toLowerCase()) ||
                feedback.email.toLowerCase().includes(filterValue.toLowerCase()) ||
                feedback.message.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        if (Array.from(statusFilter).length !== statusOptions.length) {
            filteredFeedbacks = filteredFeedbacks.filter((feedback) =>
                Array.from(statusFilter).includes(feedback.status)
            );
        }

        return filteredFeedbacks;
    }, [feedbacks, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((feedback, columnKey) => {
        switch (columnKey) {
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[feedback.status]} size="sm" variant="flat">
                        {feedback[columnKey]}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="flex items-center gap-2">
                        <Tooltip content="Marcar como resuelto">
                            <span className="text-lg text-blue-500 cursor-pointer active:opacity-50"
                                onClick={() => handleShow(feedback.id)}>
                                <Eye size={20}/>
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar feedback">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDelete(feedback.id)}>
                                <DeleteIcon/>
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return feedback[columnKey];
        }
    }, []);

    const handleResolve = (id) => {
        if (!id) {
            console.error("ID no válido:", id);
            return;
        }

        console.log("Resolviendo feedback con ID:", id);

        addToast({
            title: "Feedback resuelto",
            description: "El feedback ha sido marcado como resuelto.",
            color: "success",
        });
    };

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
            <h1 className="text-2xl font-semibold mb-6">Gestión de Feedback</h1>
            <div className="flex justify-between gap-3 items-end">
                <Input
                    isClearable
                    className="w-full sm:max-w-[44%]"
                    placeholder="Buscar por usuario, email o mensaje..."
                    value={filterValue}
                    onClear={() => onClear()}
                    onValueChange={onSearchChange}
                    variant="faded"
                    startContent={<SearchIcon />}
                    style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                        padding: "0 12px 0 12px",
                    }}
                />
                <div className="flex gap-3">
                    <Dropdown>
                        <DropdownTrigger className="hidden sm:flex z-0">
                            <Button
                                endContent={<ChevronDownIcon className="text-small" />}
                                variant="faded"
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
                                <DropdownItem key={status.uid} className="capitalize">
                                    {status.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger className="hidden sm:flex z-0">
                            <Button
                                endContent={<ChevronDownIcon className="text-small" />}
                                variant="faded"
                            >
                                Columnas
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Columnas de la tabla"
                            closeOnSelect={false}
                            selectionMode="multiple"
                            onSelectionChange={setVisibleColumns}
                        >
                            {columns.map((column) => (
                                <DropdownItem key={column.uid} className="capitalize">
                                    {column.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-black text-small">
                    Total {feedbacks.length} feedbacks
                </span>
                <label className="flex items-center text-black text-small">
                    Filas por página:
                    <select
                        className="bg-transparent outline-none text-black text-small"
                        onChange={onRowsPerPageChange}
                        value={rowsPerPage}
                        style={{
                            border: "none",
                            boxShadow: 'none'
                        }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </div>
        </div>
    ), [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        feedbacks.length,
        hasSearchFilter,
    ]);

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
        <DashboardLayout title="Feedback">
            <div className="flex flex-col gap-4">
                {topContent}
                <Table>
                    <TableHeader columns={headerColumns}>
                        {(column) => (
                            <TableColumn key={column.uid} allowsSorting={column.sortable}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={sortedItems}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => (
                                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {bottomContent}
            </div>
        </DashboardLayout>
    );
}