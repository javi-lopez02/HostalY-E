import { Spinner } from "@heroui/react";
import { lazy, Suspense } from "react";

const OfertsTable = lazy(() => import("../components/oferts/OfertTable"));

export default function Oferts() {
  return (
    <div className="pt-20 p-16 bg-neutral-100 min-h-screen">
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center">
            <Spinner color="primary" />
          </div>
        }
      >
        <OfertsTable />
      </Suspense>
    </div>
  );
}
