# Rolling Session Bug Example

The bug I have discovered, occurres when ```resave``` is set to ```true``` and ```rolling``` is set to ```true``` as well.
The session cannot be destroyed anymore and will persist even after calling ```req.sesision.destroy()```.

### Start the Project
In order to run everything first install the dependencies by switching into the ```backend/``` and ```frontend/``` folders.
There run ```npm install``` afterwards you can start them both my running ```npm start``` in the respective directory.
No database is required to run the server.

### Node Version
8.11.2
