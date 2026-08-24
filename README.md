# Docker/VPS tahák

Statický vícestránkový web určený jako praktická rekapitulace cvičení:

- VPS / Debian / SSH / sudo / APT / systemd
- Docker Engine / containerd / runtime / images / containers
- nginx jako reverse proxy
- DNS + Let's Encrypt + Certbot
- GitHub + SSH keys + deploy nové verze

## Lokální spuštění bez Dockeru

Stačí otevřít `site/index.html` v prohlížeči.

## Build Docker image

```bash
docker build -t docker-vps-tahak:v1 .
```

## Spuštění

```bash
docker run --name docker-vps-tahak -p 8081:80 -d docker-vps-tahak:v1
```

Na VPS za systémovým nginxem je vhodnější:

```bash
sudo docker run \
  --name docker-vps-tahak \
  --restart unless-stopped \
  -p 127.0.0.1:8081:80 \
  -d \
  docker-vps-tahak:v1
```

Potom může systémový nginx proxyovat například `tahak.example.cz` na `127.0.0.1:8081`.
