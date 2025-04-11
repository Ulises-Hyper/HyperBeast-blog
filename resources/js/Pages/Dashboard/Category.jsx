import {
  addToast,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure
} from "@heroui/react";
import { Link, router, useForm } from "@inertiajs/react";
import { PlusIcon } from "lucide-react";
import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

// Iconos personalizados (consistentes con el componente de usuarios)
export const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const EditIcon = (props) => (
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
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

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

const ChevronDownIcon = ({ strokeWidth = 1.5, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "SLUG", uid: "slug" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACCIONES", uid: "actions" },
];

export const statusOptions = [
  { name: "Activo", uid: "active" },
  { name: "Inactivo", uid: "inactive" },
];

const statusColorMap = {
  active: "success",
  inactive: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "slug", "status", "actions"];

export default function Category({ categories }) {
  const form = useForm({
    name: "",
    slug: "",
    description: "",
    image: null,
    status: "active",
  });

  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState(new Set(["active"]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredCategories = [...categories];

    if (hasSearchFilter) {
      filteredCategories = filteredCategories.filter((category) =>
        category.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        category.slug.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (Array.from(statusFilter).length !== statusOptions.length) {
      filteredCategories = filteredCategories.filter((category) =>
        Array.from(statusFilter).includes(category.status)
      );
    }

    return filteredCategories;
  }, [categories, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((category, columnKey) => {
    switch (columnKey) {
        case "actions":
            return (
                <div className="relative flex items-center justify-center gap-2">
                    <Tooltip content="Editar categoría">
                        <Link
                            href={route("dashboard.categories.edit", category.id)}
                            className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-primary"
                        >
                            <EditIcon size={18} />
                        </Link>
                    </Tooltip>
                    <Tooltip color="danger" content="Eliminar categoría">
                        <span
                            className="text-lg text-danger cursor-pointer active:opacity-50"
                            onClick={() => handleDelete(category.id)}
                        >
                            <DeleteIcon />
                        </span>
                    </Tooltip>
                </div>
            );
        default:
            return category[columnKey];
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

  const onSubmit = (e) => {
    e.preventDefault();
    const method = selectedCategory ? "put" : "post";
    const url = selectedCategory
      ? route("dashboard.categories.update", selectedCategory.id)
      : route("dashboard.categories.store");

    form[method](url, {
      forceFormData: true,
      onSuccess: () => {
        onOpenChange(false);
        form.reset();
        setSelectedCategory(null);
        addToast({
          title: selectedCategory ? "Categoría actualizada" : "Categoría creada",
          description: `La categoría ha sido ${selectedCategory ? "actualizada" : "creada"} exitosamente`,
          color: "success",
        });
      },
      onError: () => {
        addToast({
          title: "Error",
          description: "Hubo un problema al procesar la categoría",
          color: "danger",
        });
      },
    });
  };

  const handleDelete = (id) => {
    if (!id) {
      console.error("ID no válido:", id);
      return;
    }

    if (!window.confirm("¿Seguro que quieres eliminar esta categoria?")) return;


    console.log("Eliminando categoría con ID:", id);

    router.delete(`/dashboard/categories/${id}`, {
      onSuccess: () => {
        addToast({
          title: "Categoría eliminada",
          description: "La categoría ha sido eliminada exitosamente",
          color: "success",
        });
      },
      onError: () => {
        addToast({
          title: "Error al eliminar",
          description: "Hubo un problema al eliminar la categoría",
          color: "danger",
        });
      },
    });
  };

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
            <DropdownTrigger className="hidden sm:flex">
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
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
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
            setSelectedCategory(null);
            onOpen();
          }}>
            <PlusIcon size={16} /> Nueva Categoría
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">
          Total {categories.length} categorías
        </span>
        <label className="flex items-center text-black text-small">
          Filas por página:
          <select
            className="bg-transparent outline-none text-black text-small"
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
  ), [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    categories.length,
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
    <DashboardLayout title="Categorías">
      <div className="px-4">
        <h1 className="text-2xl font-semibold mb-6">Gestión de Categorías</h1>
        <Table
          isHeaderSticky
          aria-label="Tabla de categorías"
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          classNames={{
            wrapper: "max-h-[calc(100vh-300px)]",
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
          <TableBody emptyContent={"No se encontraron categorías"} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Modal para crear/editar categoría */}
        <Modal
          isOpen={isOpen}
          size="xl"
          placement="top-center"
          onOpenChange={() => {
            onOpenChange();
            if (!isOpen) setSelectedCategory(null);
          }}
        >
          <ModalContent>
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <ModalHeader className="flex flex-col gap-1 text-center">
                {selectedCategory ? "Editar Categoría" : "Crear Nueva Categoría"}
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                {Object.keys(form.errors).length > 0 && (
                  <div className="text-danger mb-4">
                    {Object.values(form.errors).join(', ')}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nombre"
                    placeholder="Ej: Desarrollo Web"
                    value={selectedCategory?.name || form.data.name}
                    onValueChange={(value) => form.setData('name', value)}
                    errorMessage={form.errors.name}
                    isRequired
                    variant="bordered"
                  />

                  <Input
                    label="Slug"
                    placeholder="Ej: desarrollo-web"
                    value={selectedCategory?.slug || form.data.slug}
                    onValueChange={(value) => form.setData('slug', value)}
                    errorMessage={form.errors.slug}
                    variant="bordered"
                  />

                  <Input
                    label="Descripción"
                    placeholder="Descripción de la categoría"
                    value={selectedCategory?.description || form.data.description}
                    onValueChange={(value) => form.setData('description', value)}
                    errorMessage={form.errors.description}
                    variant="bordered"
                    className="md:col-span-2"
                  />

                  <Input
                    type="file"
                    label="Imagen"
                    onChange={(e) => form.setData('image', e.target.files[0])}
                    accept="image/*"
                    variant="bordered"
                    className="md:col-span-2"
                  />

                  <div className="flex items-center gap-2 md:col-span-2">
                    <Switch
                      isSelected={selectedCategory ?
                        selectedCategory.status === 'active' :
                        form.data.status === 'active'}
                      onValueChange={(isSelected) =>
                        form.setData('status', isSelected ? 'active' : 'inactive')
                      }
                    />
                    <span>Estado: {form.data.status === "active" ? "Activo" : "Inactivo"}</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  variant="flat"
                  onPress={() => {
                    onOpenChange(false);
                    setSelectedCategory(null);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  isDisabled={form.processing}
                >
                  {form.processing ? "Procesando..." : (selectedCategory ? "Guardar Cambios" : "Crear Categoría")}
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

        {/* Modal de confirmación para eliminar */}
        {selectedCategory && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              <ModalHeader>Confirmar Eliminación</ModalHeader>
              <ModalBody>
                <p>
                  ¿Estás seguro de que deseas eliminar la categoría "{selectedCategory.name}"?
                  Esta acción no se puede deshacer.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={() => {
                  onOpenChange(false);
                  setSelectedCategory(null);
                }}>
                  Cancelar
                </Button>
                <Button color="danger" onPress={handleDelete}>
                  Eliminar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </DashboardLayout>
  );
}