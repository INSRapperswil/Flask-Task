import Device from "./Device";

export default class DeviceStore {
    public getDevices(): Device[] {
        const devicesJson = window.localStorage.getItem('devices');
        if (devicesJson) {
            return JSON.parse(devicesJson) as Device[];
        }
        return [];
    }

    public storeDevice(device: Device): void {
        const devices = this.getDevices();
        const existingIndex = devices.findIndex((d: Device) => d.name === device.name);
        if (existingIndex !== -1) {
            devices[existingIndex] = device;
        } else {
            devices.push(device);
        }
        this.setDevices(devices);
    }

    public deleteDevice(device: Device): void {
        const devices = this.getDevices();
        const existingIndex = devices.findIndex((d: Device) => d.name === device.name);
        devices.splice(existingIndex, 1);
        this.setDevices(devices);
    }

    private setDevices(devices: Device[]): void {
        window.localStorage.setItem('devices', JSON.stringify(devices));
    }
}
