## 💻 Sobre o Projeto

O **Roubank** é um aplicativo bancário móvel desenvolvido com **React Native**, projetado para oferecer uma experiência de usuário intuitiva e segura para gerenciar finanças pessoais. Ele inclui funcionalidades de login por diversos métodos, cadastro de novos usuários, visualização de cartões, acompanhamento de boletos e histórico de transferências.

## Módulos do Aplicativo

O Roubank é composto pelos seguintes módulos:

### 1\. Tela de Tipos de Entrada

Esta é a tela inicial do aplicativo, funcionando como um hub para o usuário escolher como deseja acessar o sistema: via PIN, biometria, outras opções de login, ou para realizar um novo cadastro.

### 2\. Navegação da Área Logada

Este componente define a navegação principal da área logada do aplicativo, utilizando um sistema de abas na parte inferior da tela para acesso rápido às funcionalidades principais: Cartões, Boletos, Transferências e Perfil.

### 3\. Tela de Cartões

Esta tela oferece uma visão completa dos cartões do usuário e um histórico detalhado de suas transações financeiras.

#### 🚀 Funcionalidades

  * **Carrossel de Cartões:** Exibe cartões (conta corrente, poupança, crédito) com seus saldos e detalhes, com um sistema de paginação visual.
  * **Histórico de Transações:** Lista transações com valor, data, descrição e indicadores visuais de entrada/saída.
  * **Detalhes da Conta:** Mostra informações adicionais, como saldo em USD.

### 4\. Tela de Boletos

A tela de Boletos permite que os usuários visualizem uma lista de suas contas a pagar e a receber, com detalhes e status de pagamento.

#### 🚀 Funcionalidades

  * **Listagem Clara:** Exibe boletos com título, valor, data de vencimento, empresa e status.
  * **Indicadores Visuais:** Utiliza cores e ícones para diferenciar boletos pagos/pendentes e de entrada/saída.

### 5\. Tela de Transferências

A tela de Transferências exibe o histórico de movimentações financeiras da conta do usuário e oferece acesso a opções relacionadas a transferências e limites.

#### 🚀 Funcionalidades

  * **Histórico de Transações:** Lista transações de entrada e saída com detalhes como valor, data, descrição e localização.
  * **Identificação Visual:** Ícones de seta indicam se a transação foi uma entrada ou saída.
  * **Opções de Conta:** Botões para "Acesso e limites", "Recarregar" e "Alterar Senha".

## ⚙️ Instalação e Execução

Para configurar e executar o projeto Roubank em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/MaduAraujo/Roubank
    cd Roubank
    ```

2.  **Instale as dependências do projeto:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Instale as dependências específicas do `React Navigation` e `Expo`:**

    ```bash
    npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
    npm install expo-local-authentication @expo/vector-icons
    # ou
    yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
    yarn add expo-local-authentication @expo/vector-icons
    ```

4.  **Para iOS, instale os *pods*:**

    ```bash
    cd ios
    pod install
    cd ..
    ```

5.  **Adicione os ativos (imagens) necessários:**
    Certifique-se de que a pasta `assets` na raiz do seu projeto contenha as imagens.

6.  **Execute o aplicativo:**

    ```bash
    npm run android
    # ou
    npm run ios
    ```

    O aplicativo será iniciado em seu emulador/simulador ou dispositivo conectado. Para testar a biometria, é necessário um dispositivo físico com a funcionalidade configurada.

## 🛠️ Tecnologias Utilizadas
- React Native: Framework para desenvolvimento de aplicativos móveis nativos.
- JavaScript: Linguagem de programação principal.

 ## Projeto Funcionando

https://github.com/user-attachments/assets/29d85eba-2a69-47e4-b383-153b3754d5b8



    
