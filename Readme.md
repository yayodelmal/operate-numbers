# Ejercicio de clase Devops - Introducción a Git

### Levantar aplicación en docker 🚢

**1. Construcción de imágen**

```
docker build -t devops/operate-numbers .
```

**2. Ejecución del contenedor**

```
docker run -p 4000:4000 -d --name operate-numbers-container devops/operate-numbers
```

---
Escrito con 🤓 por [Yayodelmal](https://github.com/yayodelmal)