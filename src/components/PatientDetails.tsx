import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 rounded-2xl bg-white px-5 py-10 shadow-lg">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Paciente" data={patient.name} />
      <PatientDetailsItem label="Propietario" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailsItem label="Sintomas" data={patient.symptoms} />
      <div className="mt-10 flex justify-between max-lg:flex-col">
        <button
          type="button"
          className="rounded-xl bg-indigo-600 px-10 py-2 font-bold uppercase text-white hover:bg-indigo-800"
        >
          Editar
        </button>
        <button
          type="button"
          className="rounded-xl bg-red-600 px-10 py-2 font-bold uppercase text-white hover:bg-red-800 max-lg:mt-5"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
