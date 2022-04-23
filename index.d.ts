type Status = 'SESSION' | 'API_COMMAND_NOT_FOUND' | 'AUTH_FAILED' | 'FILE_NOT_FOUND' | 'INTERNAL_SERVER_ERROR' | 'API_INTERFACE_NOT_FOUND' | 'BAD_PARAMETERS' | 'MAINTENANCE' | 'OVERLOAD' | 'TOO_MANY_REQUESTS' | 'ERROR_EMAIL_NOT_CONFIRMED' | 'OUTDATED' | 'TOKEN_INVALID' | 'OFFLINE' | 'UNKNOWN' | 'BAD_REQUEST' | 'AUTH_FAILED' | 'EMAIL_INVALID' | 'CHALLENGE_FAILED' | 'METHOD_FORBIDDEN' | 'EMAIL_FORBIDDEN' | 'FAILED' | 'STORAGE_NOT_FOUND' | 'STORAGE_LIMIT_REACHED' | 'STORAGE_ALREADY_EXISTS' | 'STORAGE_INVALID_KEY' | 'STORAGE_KEY_NOT_FOUND' | 'STORAGE_INVALID_STORAGEID';


interface Device {
  id: string;
  type: 'jd' | 'device';
  name: string;
  status: Status;
}

interface Response {
  data: {
    id: number
  },
  rid: number
}

export function addLinks(links: string, deviceId: string, path: string, autostart: boolean, overwrite: boolean): Promise<Response>;
export function connect(username: string, password: string): Promise<boolean>;
export function cleanUpFinishedLinks(deviceId: string): Promise<Response>;
export function disconnect(): Promise<boolean>;
export function reconnect(): Promise<boolean>;
export function listDevices(): Promise<Device[]>;