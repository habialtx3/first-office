import OfficeCard from "../components/OfficeCard";
import type { Office } from "../types/type";
import { mockOffices } from "../data/mockData";

export default function BrowseOfficeWrapper() {
  const offices: Office[] = mockOffices;

  return (
    <section className="flex flex-col gap-[30px] max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
      <h2 className="font-bold text-[32px] text-center">
        Browse Our Fresh Space.
      </h2>

      <div className="grid grid-cols-3 gap-[30px]">
        {offices.map((office) => (
          <OfficeCard key={office.id} office={office} />
        ))}
      </div>
    </section>
  );
}
