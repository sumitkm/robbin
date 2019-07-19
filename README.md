# Robbin

A tiny Node JS sidekick to help separate your client side dependencies from server side dependencies.

**!!! NOT READY FOR USE !!!**

## Setup and usage

### Install (TBD)
Use `npm` to install ```Robbin``` globally. It is configured to be prefer a global install. It should work from local install too if you prefix with ```/node_modules/.bin/```

```bash
npm install robbin -g
```

### Initialise Robbin configuration (TBD)

Creates ```robbinconfig.json``` file that specifies the dependencies for your front-end

```bash
robin -init
```

Generates a default file with the following format:
```json
{
    "jspath": "<Path where you would like your front-end js dependencies to be e.g. 'libs'>",
    "csspath": "<Path where you would like your front-end css dependencies to be e.g. 'content'>",
    "dependencies": [
        {
            "module": "<NPM Module Name>",
            "version": "<NPM module version>"
        }
    ]
}
```

### Install new modules (TBD)
```bash
robbin -install [node module name]
```
e.g.
```bash
robbin -install jquery
```

### Sync existing modules (TBD)
Moves well known front-end libraries from ```node_modules``` folder to ```jspath``` and ```csspath``` as specified in ```robbinconfig.json```

```bash
robbin -sync
```

A ```robbin -init``` will ask if you want to ```sync```, you can say ```yes/no``` at that point.
