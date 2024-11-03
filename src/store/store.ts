import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: Patient[];
  activeID: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientbyID: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return {
    id: uuidv4(),
    ...patient,
  };
};

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeID: "",
    addPatient: (data) => {
      const newpatient = createPatient(data);
      set((state) => ({
        patients: [...state.patients, newpatient],
      }));
    },
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },
    getPatientbyID: (id) => {
      set(() => ({
        activeID: id,
      }));
    },
    updatePatient: (data) => {
      set((state) => ({
        patients: state.patients.map((patient) =>
          patient.id === state.activeID
            ? { id: state.activeID, ...data }
            : patient,
        ),
        activeID: "",
      }));
    },
  })),
);
