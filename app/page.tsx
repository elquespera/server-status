import { BatteryInfo } from "@/components/battery-info";
import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";
import { MemInfo } from "@/components/mem-info";
import { OsInfo } from "@/components/os-info";

export default function Home() {
  return (
    <DeviceInfoProvider
      updateFrequency={Number(process.env.UPDATE_FREQUENCY) ?? 1000}
    >
      <main className="flex flex-col items-center p-4 sm:p-8">
        <div className="flex w-full max-w-screen-sm flex-col gap-8">
          <OsInfo />
          <CPUInfo />
          <MemInfo />
          <BatteryInfo />
        </div>
      </main>
    </DeviceInfoProvider>
  );
}
