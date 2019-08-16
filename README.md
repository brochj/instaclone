## Utilizando

#### 1. instalar as dependencias

#### 2. Iniciar o server.json (fake API)
```bash
yarn json-server server.json -d 1000 -w
```

#### 3. Conectar o celular no USB (não dá pra rodar via wifi)

```bash
adb devices
adb reverse tcp:3000 tcp:3000
```
#### 4. Iniciar emulacao
```bash
yarn start
yarn react-native run-android
```