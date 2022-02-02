# Docker Deployment Guide

This guide walks you through running the Beckn in a Box application using
`docker` and `docker-compose`.

## Prerequisites

> This guide assumes a some familiarity with basic linux commands. If not,
> [here](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview) is
> a great place to start.

> Note: Don't copy-paste the `>` signs at the beginning, they indicate that what
> follows is a terminal command

### Terminal emulator

Linux and MacOS will have a terminal installed already. For Windows, it is
recommended that you use `git-bash`, which you can install from
[here](https://git-scm.com/download/win).

Type `echo Hi` in the terminal once it is installed. If installed correctly, you
should see `Hi` appear when you hit enter.

### Docker

Installation instructions for Docker can be found
[here](https://docs.docker.com/engine/install/).

Run `docker -v` in terminal to check if `docker` has been installed correctly:

```sh
$ docker -v
Docker version 20.10.12, build e91ed5707e
```

### Docker Compose

Installation instructions can be found
[here](https://docs.docker.com/engine/install/).

Run `docker-compose -v` in terminal to check if `docker-compose` has been
installed correctly:

```sh
$ docker-compose -v
Docker Compose version 2.2.3
```

## Downloading the Dockerfiles

Download this repository using the following link -
https://github.com/beckn/bap-reference-app/archive/refs/heads/main.zip. Unzip
the contents of this zipfile into a folder, say `~/beckn-in-a-box/`.

## Running the application

Run the following commands in terminal:

```bash
# Move into the `deployment/docker` folder.
> cd ~/beckn-in-a-box
> cd deployment/docker
# Build the base image needed for all the components.
> docker build --tag bap-base --file base.dockerfile .
# Build and run the application.
> docker compose up
```

This will build all the images and start running the application. Once the build
process has finished, browse to [`http://localhost:8080`](http://localhost:8080)
and start using the storefront application!

If you are facing any problems or have any questions, please don't hesitate to
[open a new discussion](https://github.com/beckn/bap-reference-app/discussions/new).
