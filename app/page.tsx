import { BatteryInfo } from "@/components/battery-info";
import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";
import { MemInfo } from "@/components/mem-info";
import { OsInfo } from "@/components/os-info";
import { StorageInfo } from "@/components/storage-info";

export default function HomePage() {
  return (
    <DeviceInfoProvider>
      <div className="flex w-full max-w-screen-sm flex-col gap-8">
        <OsInfo />
        <CPUInfo />
        <MemInfo />
        <StorageInfo />
        <BatteryInfo />
      </div>
    </DeviceInfoProvider>
  );
}
