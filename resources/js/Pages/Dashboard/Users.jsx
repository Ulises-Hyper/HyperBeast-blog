import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Switch,
  Select,
  SelectItem,
  useDisclosure,
  addToast,
} from "@heroui/react";
import { FileImage, UserPlus, PlusIcon, ToggleLeft, Lock } from "lucide-react";
import { useForm, router } from "@inertiajs/react";

// Iconos (mantenemos los originales y añadimos los nuevos necesarios)
export const MailIcon = (props) => (
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
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

export const LockIcon = (props) => (
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
      d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
      fill="currentColor"
    />
    <path
      d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
      fill="currentColor"
    />
  </svg>
);

export const columns = [
  { name: "ID", uid: "role_id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "ROLE", uid: "role", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
];

const statusColorMap = {
  active: "success",
  inactive: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "role", "status", "actions"];

// Iconos (mantenemos los originales y añadimos los nuevos necesarios)
export const EyeIcon = (props) => (
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
      d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
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

function Users({ user, users }) {

  const form = useForm({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    avatar: null,
    role: "reader",
    status: "active",
  });

  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getPasswordError = (value) => {
    if (value.length < 4) return "Password must be 4 characters or more";
    if ((value.match(/[A-Z]/g) || []).length < 1) return "Password needs at least 1 uppercase letter";
    if ((value.match(/[^a-z]/gi) || []).length < 1) return "Password needs at least 1 symbol";
    if (form.data.password !== form.data.confirmPassword) return "Passwords don't match";
    return null;
  };


  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", form.data);

    form.post("/dashboard/users", {
      forceFormData: true, // Necesario para subir archivos
      onSuccess: () => {
        onOpenChange(false); // Cerrar modal
        form.reset();
        addToast({
          title: "Usuario creado correctamente",
          description: "El usuario ha sido creado exitosamente",
          color: "success",
        });
      },
      onError: () => {
        console.log("Errores del servidor:", form.errors);
        addToast({
          title: "Hubo un problema para crear el usuario",
          description: "El usuario no se ha podido crear, por favor verifica los datos",
          color: "danger",
        });
      }
    });
  };

  const handleDelete = (userId) => {
    if (!window.confirm("¿Seguro que quieres eliminar este usuario?")) return;

    router.delete(`/dashboard/users/${userId}`, {
      onSuccess: () => addToast({
        title: "Usuario eliminado correctamente",
        description: "El usuario ha sido eliminado exitosamente",
        color: "success",
      }),
      onError: () => addToast({
        title: "Hubo un problema para eliminar el usuario",
        description: "El usuario no se ha podido eliminar, por favor intenta de nuevo",
        color: "danger",
      }),
    });
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    const handleToggleStatus = () => {
      const newStatus =
        user.status === "active" ? "paused" :

          // Aquí podrías llamar a una función de actualización con el nuevo estado
          console.log(`Toggle status for ${user.name} to ${newStatus}`)
    }

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Editar usuario">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar usuario">
              <span className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDelete(user.id)}>
                <DeleteIcon />
              </span>
            </Tooltip>
            <Tooltip content="Cambiar estado">
              <span
                className="text-lg text-primary cursor-pointer active:opacity-50"
                onClick={handleToggleStatus}>
                <ToggleLeft />
              </span>
            </Tooltip>
          </div>
        );
      case "role":
        return (
          <Chip
            className="capitalize"
            color={
              user.role === "administrator" ? "danger" :
                user.role === "creator" ? "warning" :
                  user.role === "reader" ? "primary" : "warning"
            }
            size="sm"
            variant="flat"
          >
            {user.role}
          </Chip>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "role_id":
        return (
          <Chip className="capitalize" size="sm">
            {user.id}
          </Chip>
        );
      default:
        return cellValue;
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
          style={{
            border: "none",
            boxShadow: 'none',
          }}
          variant="faded"
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<SearchIcon />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex z-0">
              <Button endContent={<ChevronDownIcon className="text-small text-black" />} variant="faded">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectionMode="multiple"
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
              <Button endContent={<ChevronDownIcon className="text-small" />} variant="faded">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
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
          <Button color="primary" onPress={onOpen}>
            <PlusIcon size={16} /> Crear Usuario
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-small text-black">Total {users.length} users</span>
        <label className="flex items-center text-black text-small">
          Filas por página:
          <select
            className="bg-transparent text-black text-small"
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
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => (
    <div className="py-2 px-2 flex justify-center">
      <Pagination isCompact page={page} total={pages} onChange={setPage} color="primary" />
    </div>
  ), [items.length, page, pages, hasSearchFilter]);

  return (
    <DashboardLayout title="Usuarios" user={user}>
      <div className="px-4">
        <h1 className="text-2xl font-semibold mb-6">Lista de Usuarios</h1>
        <Table
          isHeaderSticky
          aria-label="Tabla de usuarios"
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          classNames={{
            wrapper: "max-h-[382px]",
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
          <TableBody emptyContent={"No users found"} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Modal de creación de usuario */}
        <Modal isOpen={isOpen} size={"4xl"} placement="top-center" onOpenChange={onOpenChange}>
          <ModalContent>
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <ModalHeader className="flex flex-col gap-1 text-center">
                Registrar Nuevo Usuario
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                {Object.keys(form.errors).length > 0 && (
                  <div className="text-danger mb-4">
                    {Object.values(form.errors).join(', ')}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    endContent={<UserPlus className="text-2xl text-default-400" />}
                    label="Nombre"
                    placeholder="John"
                    value={form.data.name}
                    onValueChange={(value) => form.setData('name', value)}
                    errorMessage={form.errors.name}
                    isRequired
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Input
                    endContent={<MailIcon className="text-2xl text-default-400" />}
                    label="Correo Electrónico"
                    placeholder="john@example.com"
                    type="email"
                    value={form.data.email}
                    onValueChange={(value) => form.setData('email', value)}
                    errorMessage={form.errors.email}
                    isRequired
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Input
                    endContent={<UserPlus className="text-2xl text-default-400" />}
                    label="Nombre de Usuario"
                    placeholder="johndoe123"
                    value={form.data.username}
                    onValueChange={(value) => form.setData('username', value)}
                    errorMessage={form.errors.username}
                    isRequired
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Input
                    endContent={<Lock className="text-2xl text-default-400" />}
                    label="Contraseña"
                    type="password"
                    value={form.data.password}
                    onValueChange={(value) => form.setData('password', value)}
                    errorMessage={getPasswordError(form.data.password) || form.errors.password}
                    isRequired
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Input
                    endContent={<Lock className="text-2xl text-default-400" />}
                    label="Confirmar Contraseña"
                    name="password_confirmation"
                    type="password"
                    value={form.data.password_confirmation}
                    onValueChange={(value) => form.setData('password_confirmation', value)}
                    errorMessage={form.errors.password_confirmation}
                    isRequired
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Input
                    type="file"
                    label="Avatar"
                    onChange={(e) => {
                      console.log("Archivo seleccionado:", e.target.files[0]); // Verificar archivo
                      form.setData("avatar", e.target.files[0]);
                    }} endContent={<FileImage className="text-2xl text-default-400" />}
                    accept="image/*"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      padding: "0 12px 0 0",
                    }}
                  />

                  <Select
                    label="Rol del Usuario"
                    selectedKeys={[form.data.role]}
                    onSelectionChange={(keys) =>
                      form.setData('role', Array.from(keys)[0])
                    }
                  >
                    <SelectItem key="administrator">Administrador</SelectItem>
                    <SelectItem key="reader">Lector</SelectItem>
                    <SelectItem key="creator">Creador</SelectItem>
                  </Select>

                  <div className="flex items-center gap-2">
                    <Switch
                      isSelected={form.data.status === "active"}
                      onValueChange={(isActive) =>
                        form.setData('status', isActive ? "active" : "inactive")
                      }
                    />
                    <span>Estado: {form.data.status === "active" ? "Activo" : "Inactivo"}</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="button" variant="flat" onPress={() => onOpenChange(false)}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  isDisabled={form.processing}
                >
                  {form.processing ? "Creando..." : "Crear Usuario"}
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </div>
    </DashboardLayout>
  );
}

export default Users;