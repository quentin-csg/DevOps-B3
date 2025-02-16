# DevOps-B3 TP2

## Dockerfile single stage

```docker build -t api .``` \
```docker run -p 2222:2222 api```

## Dockerfile multi stage

A exécuter aussi dans le dossier TP2

```docker build -t api2 -f DockerFile2/Dockerfile .``` \
```docker run -p 2222:2222 api2```