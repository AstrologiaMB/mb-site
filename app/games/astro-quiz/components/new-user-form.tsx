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
      className={`flex flex-col ${className}`}
      action={MDB_addUser}
      id="form1"
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Nombre" required />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
        required
      />
      <label htmlFor="dateOfBirth">Fecha de nacimiento:</label>
      <input
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
