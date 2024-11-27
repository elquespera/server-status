import { CPUInfo } from "@/components/cpu-info";
import { PageReload } from "@/components/page-reload";

export default function Home() {
  return (
    <>
      <main className="min-h-[100vh] flex items-center flex-col gap-2 justify-center p-4">
        <h3>CPU Info</h3>
        <CPUInfo />
      </main>
      <PageReload />
    </>
  );
}