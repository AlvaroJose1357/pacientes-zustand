import { usePatientStore } from "../store/store";
import PatientDetails from "./PatientDetails";
export default function PatientList() {
  //const { patients } = usePatientStore();
  const patients = usePatientStore((state) => state.patients);
  return (
    // el overflow-y-scroll es para que el contenido sea scrollable en el eje Y y este no se pierda
    <div className="mx-5 overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
      {patients.length ? (
        <>
          <h2 className="text-center text-3xl font-black">
            Lista de Pacientes
          </h2>
          <p className="mb-10 mt-5 text-center text-lg">
            Administra tus {""}
            <span className="font-bold text-indigo-600">Pacientes y citas</span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center text-3xl font-black">No hay Pacientes</h2>
          <p className="mb-10 mt-5 text-center text-xl">
            Comienza a añadir pacientes {""}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}
