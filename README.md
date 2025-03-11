# Gerenciador de Tarefas - React Native com Expo

Este é um aplicativo simples de gerenciamento de tarefas desenvolvido com **React Native** usando **Expo**.

## 📌 Funcionalidades
- Listar tarefas
- Adicionar uma nova tarefa
- Alterar o status de uma tarefa (pendente/concluído)
- Remover todas as tarefas concluídas

## 🚀 Instalação e Execução

### 1️⃣ **Pré-requisitos**
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Para instalar o Expo CLI, execute:
```sh
npm install -g expo-cli
```

### 2️⃣ **Instale as Dependências**
```sh
npm install
# ou
yarn install
```

### 3️⃣ **Executando o Aplicativo**
Inicie o servidor do Expo:
```sh
npm start
# ou
yarn start
```
Isso abrirá o **Expo Developer Tools** no navegador.

### 4️⃣ **Executando no Dispositivo ou Emulador**
- **No dispositivo físico**:
  - Instale o app **Expo Go** ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))
  - Escaneie o QR Code exibido no terminal ou no navegador

- **No emulador**:
  - **Android**: Pressione `a` para abrir no Android Emulator
  - **iOS**: Pressione `i` para abrir no iOS Simulator (apenas no macOS)

## 🛠 Tecnologias Utilizadas
- **React Native** - Construção do app
- **Expo** - Framework para desenvolvimento
- **React Navigation** - Gerenciamento de navegação
- **Context API** - Gerenciamento de estado
- **AsyncStorage** - Armazenamento local de tarefas

## 📂 Estrutura do Projeto
```
📂 app/
 ├── 📂 components/      # Componentes reutilizáveis
 ├── 📂 (tabs)/         # Telas do aplicativo
 ├── 📂 context/         # Context API para gerenciamento de tarefas
 ├── 📂 hooks/           # Hooks personalizados
 ├── 📂 assets/           # Fontes e imagens
 ├── _layout_.tsx            # Ponto de entrada do aplicativo
```

---
✉️ **Dúvidas ou Sugestões?** Entre em contato!

