import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientbyId = usePatientStore((state) => state.getPatientbyID);

  const handleDelete = () => {
    deletePatient(patient.id);
  };
  return (
    <div className="mx-5 my-10 rounded-2xl bg-white px-5 py-10 shadow-lg">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Paciente" data={patient.name} />
      <PatientDetailsItem label="Propietario" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailsItem label="Sintomas" data={patient.symptoms} />
      <div className="mt-10 flex flex-col justify-between gap-3 lg:flex-row">
        <button
          type="button"
          // haciendolo mediante funcion externa
          // onClick={handleEdit}
          // haciendolo mediante funcion interna
          onClick={() => getPatientbyId(patient.id)}
          className="rounded-xl bg-indigo-600 px-10 py-2 font-bold uppercase text-white hover:bg-indigo-800"
        >
          Editar
        </button>
        <button
          type="button"
          // haciendolo mediante funcion externa
          onClick={handleDelete}
          // haciendolo mediante funcion interna
          // onClick={() => deletePatient(patient.id)}
          className="rounded-xl bg-red-600 px-10 py-2 font-bold uppercase text-white hover:bg-red-800"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
