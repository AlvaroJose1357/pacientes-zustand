import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types";

export default function PatientForm() {
  // register: Función para registrar los campos del formulario y validarlos
  // handleSubmit: Función para manejar el envío del formulario
  // formState: Objeto que contiene el estado del formulario  y se le coloca {errors} para desestructurar el objeto y obtener los errores
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    console.log(data);
  };
  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-center text-3xl font-black">Seguimiento Pacientes</h2>

      <p className="mb-10 mt-5 text-center text-lg">
        Añade Pacientes y {""}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form
        className="mb-10 rounded-lg bg-white px-5 py-10 shadow-md"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm font-bold uppercase">
            Paciente
          </label>
          <input
            id="name"
            className="w-full border border-gray-100 p-3"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El Nombre del Paciente es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El Nombre del Paciente debe tener al menos 2 caracteres",
              },
            })}
          />
          {errors.name && <Error>{errors.name.message?.toString()}</Error>}
          {/* Se coloca en comentarios ya que como estamos inicalizando el useForm de type DraftPatient ese ya no contiene esta propiedad */}
          {/* {errors.minLength && (
            <Error>{errors.minLength.message?.toString()}</Error>
          )} */}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm font-bold uppercase">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full border border-gray-100 p-3"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El Nombre del Propietario es obligatorio",
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            className="w-full border border-gray-100 p-3"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "El Email no es válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm font-bold uppercase">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full border border-gray-100 p-3"
            type="date"
            {...register("date", {
              required: "La Fecha de Alta es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm font-bold uppercase">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full border border-gray-100 p-3"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los Síntomas son obligatorios",
            })}
          ></textarea>
          {errors.symptoms && (
            <Error>{errors.symptoms.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white transition-colors hover:bg-indigo-800"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
