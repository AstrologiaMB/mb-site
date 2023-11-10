import { addUser, MDB_addUser } from "@/app/users/action";

interface NewUserForm {
  className: string;
}

const initialState = {
  message: null,
};

function NewUserForm({ className }: NewUserForm) {
  return (
    <form
      className={`flex flex-col font-sans ${className}`}
      action={MDB_addUser}
      id="form1"
    >
      <label htmlFor="name">Name</label>
      <input
        className="mb-4 mt-1 border border-gray-300 p-1 text-sm"
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        className="mb-4 mt-1 border border-gray-300 p-1 text-sm"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <label htmlFor="dateOfBirth">Fecha de nacimiento:</label>
      <input
        className="mb-4 mt-1 border border-gray-300 p-1 text-sm"
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        min="1950-01-01"
        max="2018-12-31"
        required
      />
      <button type="submit" form="form1" value="Submit">
        Guardar
      </button>
    </form>
  );
}

export default NewUserForm;
