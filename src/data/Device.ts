export default class Device {
    public name: string;
    public ip = "192.168.0.2";
    public operatingSystem = "Cisco IOS";

    constructor(name: string) {
        this.name = name;
    }
}
