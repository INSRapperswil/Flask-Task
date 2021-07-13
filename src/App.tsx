import React from 'react';
import Device from './data/Device';
import DeviceStore from './data/DeviceStore';
import DeviceBox from './components/DeviceBox';
import './App.scss';

export default class App extends React.Component {
  public state = {
    devices: []
  }

  private deviceStore = new DeviceStore();

  public componentDidMount() {
    this.refreshDeviceList();
  }

  private refreshDeviceList(): void {
    const devices = this.deviceStore.getDevices();
    this.setState({ devices });
  }

  private addDevice(): void {
    const newDeviceName = prompt("Enter the name of the new device");
    if (newDeviceName && newDeviceName.length > 0) {
      this.deviceStore.storeDevice(new Device(newDeviceName));
      this.refreshDeviceList();
    }
  }

  public render(): React.ReactNode {
    const { devices } = this.state;
    return (
      <div className="app">
        <header>
          <h1>NetBox</h1>
          <button onClick={() => this.addDevice()}>Add</button>
        </header>
        <main role="main">
          {devices.map((d: Device) => <DeviceBox device={d} onDeviceDeleted={() => this.refreshDeviceList()}/>)}
        </main>
      </div>
    );
  }
}