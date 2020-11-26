App should be running without needing a port, however if not, try <ip>:3000

```
cd C:\inetpub\wwwroot
pm2 start ./bin/www
```
^ if app not running when instance is restarted

`DEBUG=node-mvc:* npm start` to run dev environment locally


* alternatively, if you are not viewing app on gcp, but locally:
```
cd node_mvc
npm install
npm start
```

