import { BatteryInfo } from "@/components/battery-info";
import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";
import { MemInfo } from "@/components/mem-info";
import { OsInfo } from "@/components/os-info";
import { StorageInfo } from "@/components/storage-info copy";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <DeviceInfoProvider>
      <main className="flex flex-col items-center p-4 sm:p-8">
        <div className="mb-16 flex w-full max-w-screen-sm flex-col gap-8">
          <OsInfo />
          <CPUInfo />
          <MemInfo />
          <StorageInfo />
          <BatteryInfo />
          <ThemeToggle className="fixed bottom-8 self-center" />
        </div>
      </main>
    </DeviceInfoProvider>
  );
}
