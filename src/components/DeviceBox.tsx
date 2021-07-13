import React from 'react';
import Device from '../data/Device';
import DeviceStore from '../data/DeviceStore';
import "./DeviceBox.scss";

type DeviceBoxProps = {
  device: Device,
  onDeviceDeleted: () => void,
}

export default class DeviceBox extends React.Component<DeviceBoxProps> {
  private deleteDevice(device: Device): void {
    const deviceStore = new DeviceStore();
    deviceStore.deleteDevice(device);
    this.props.onDeviceDeleted();
  }

  public render(): React.ReactNode {
    const {device} = this.props;
    return (
      <div className="device-box">
        <dl>
          <dt>Name</dt>
          <dd>{device.name}</dd>
          <dt>Operating System</dt>
          <dd>{device.operatingSystem}</dd>
          <dt>Actions</dt>
          <dd><button onClick={() => this.deleteDevice(device)}>Delete</button></dd>
        </dl>
      </div>
  );
  }
}
