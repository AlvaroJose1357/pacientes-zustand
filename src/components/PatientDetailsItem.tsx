type PatientDetailsItemProps = {
  label: string;
  data: string;
};
export default function PatientDetailsItem({
  label,
  data,
}: PatientDetailsItemProps) {
  return (
    <p className="mb-3 font-bold uppercase text-gray-700">
      {label}: {""}
      <span className="font-normal normal-case text-gray-500">{data}</span>
    </p>
  );
}
