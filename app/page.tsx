import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";
import { MemInfo } from "@/components/mem-info";
import { OsInfo } from "@/components/os-info";

export default function Home() {
  return (
    <DeviceInfoProvider>
      <main className="min-h-[100vh] flex flex-col justify-center p-4 sm:p-8">
        <div>
          <h3 className="text-lg font-bold tracking-tighter">CPU</h3>
          <CPUInfo />
          <h3 className="text-lg font-bold tracking-tighter">Memory</h3>
          <MemInfo />
          <OsInfo />
        </div>
      </main>
    </DeviceInfoProvider>
  );
}
