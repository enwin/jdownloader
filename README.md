Node Jdownloader API
======
**A NodeJS wrapper for My.jdownloader.org API**

https://my.jdownloader.org/developers/

This is a rewritten version of this PHP wrapper
https://github.com/tofika/my.jdownloader.org-api-php-class

Features
--------
- Connect to the My.JDownloader service
- Reconnect
- Disconnect from the My.JDownloader service
- List Devices
- Add Links and start download
- List actual links from the download are
- List all packages and get current download status

Usage
--------

To install `megatam-jdownloader` in your node.js project:

```
npm install megatam-jdownloader
```

And to access it from within node, simply add:

```javascript
const jdownloaderAPI = require('megatam-jdownloader');
```
API
--------
## Connect

```javascript
jdownloaderAPI.connect(_USERNAME_, _PASSWORD_)
```

## Disconnect

```javascript
jdownloaderAPI.disconnect()
```
## Reconnect

```javascript
jdownloaderAPI.reconnect()
```

## listDevices

```javascript
// List all active devices from the connected account
// deviceName and deviceId
jdownloaderAPI.listDevices()
```

## addLinks

```javascript
// This will add links to the device and autostart downloads if 
// autostart parameter is true otherwise it will leave the package in the linkGrabber
// nb : links must be comma separated
jdownloaderAPI.addLinks(LINKS, DEVICEID, downloadPath, autostart)
```

## queryLinks

```javascript
// List all links from the download area of the specified device
jdownloaderAPI.queryLinks(DEVICEID)
```

## queryPackages

```javascript
// List all packages from the download area of the specified device
// current status, total bytes loaded, etc ...
// nb : packagesUUIS must be comma separated you can get them from the queryLinks method
jdownloaderAPI.queryPackages(DEVICEID, PACKAGESUUIDS)
```