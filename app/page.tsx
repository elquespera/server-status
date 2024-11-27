import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";
import { MemInfo } from "@/components/mem-info";
import { OsInfo } from "@/components/os-info";

export default function Home() {
  return (
    <DeviceInfoProvider
      updateFrequency={Number(process.env.UPDATE_FREQUENCY) ?? 1000}
      cpuUpdateFrequency={Number(process.env.CPU_UPDATE_FREQUENCY) ?? 1000}
    >
      <main className="flex min-h-[100vh] flex-col items-center p-4 sm:p-8">
        <div className="w-full max-w-screen-sm">
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
