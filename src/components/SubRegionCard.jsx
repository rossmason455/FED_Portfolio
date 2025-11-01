export default function SubregionCard({ subregionName }) {

    return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-center">{subregionName}</h2>
    </div>
  );

}