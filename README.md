# 🌟 Stellar-Task-Reward App – Stellar Journey to Mastery (Level 4 Project)

## 📌 Introduction to Stellar-Task-Reward App :
Reward App is a decentralized task-based dApp built on Stellar Soroban that allows users to complete tasks and earn rewards directly in their wallet via Freighter. ✨  

It demonstrates real-world blockchain interaction including wallet connection, smart contract execution, and reward distribution.

---

## 🧰 Pre-Requisites to Run :
- Download Freighter wallet web extension  
- Setup your Freighter Wallet  
- Install Node.js & npm  
- VS Code should be installed  

---

## ▶️ How To Run :

open in VS code ----> Go to Terminal ----> cd frontend ----> Give command "npm install" ----> then "npm run dev" ----> Run on Localhost (CTRL + click) -----> You're Ready To Go 🚀  

---

## 🌐 Live Demo :
https://stellar-tasks-rewards-n1b7h3s57-chaitanya6006s-projects.vercel.app

---

## 📸 Working Screenshots :

Dashbord <img width="1919" height="867" alt="Screenshot 2026-03-26 135135" src="https://github.com/user-attachments/assets/20aa8ffc-6f10-42c0-a92a-d65670a48b43" />

Wallet connect <img width="1919" height="890" alt="Screenshot 2026-03-26 135156" src="https://github.com/user-attachments/assets/18e44ef5-8d8e-45f2-9449-ff2acc942879" />

Profile <img width="1918" height="946" alt="Screenshot 2026-03-26 135113" src="https://github.com/user-attachments/assets/d26fbee7-1565-47df-9f65-a2635ec94fda" />

Leader Board <img width="1918" height="865" alt="Screenshot 2026-03-26 140018" src="https://github.com/user-attachments/assets/404a635a-2d79-43c2-9f3e-83a6e6fc2c03" />

<img width="1916" height="882" alt="Screenshot 2026-03-26 140246" src="https://github.com/user-attachments/assets/58a017fe-bf62-41f3-ac47-096e764b909c" />

<img width="1388" height="731" alt="Screenshot 2026-03-26 140427" src="https://github.com/user-attachments/assets/77de5bd9-2d8c-4f92-807f-e117d50c924d" />



## 📜 Contract Details :

CONTRACT_ID : `CA5RPNPLWGDNPCTFGGULF2SS7Y4PEGQT5ULJ5XJTE52423PLBFBTODE3`

 View On Stellar Expert :  
  https://stellar.expert/explorer/testnet/tx/7320677266788352#7320677266788353

-View On Stellar Expert :
<img width="1916" height="887" alt="Screenshot 2026-04-10 233223" src="https://github.com/user-attachments/assets/62cd0189-f719-4766-8483-cc07f585e6b4" />


## 🔁 Freighter Transaction History :

<img width="576" height="878" alt="Screenshot 2026-04-10 233733" src="https://github.com/user-attachments/assets/505531c0-0e17-47fd-9cd0-71d31fb9d0e7" />


## 🎥 Working Demo Video :

https://youtu.be/qWIcK0yYYQc?si=iK1qimBLveYTmZxf

---

## 🔗 Inter Contract Call :
The inter-contract call in this project is used for reward/token transfer using Soroban token contract.

📌 Description :

- Smart contract fetches token contract address  
- Initializes Soroban token client  
- Calls transfer function to send rewards to user wallet  

Example Logic :

// INTER-CONTRACT CALL (Reward Transfer)
let token_client = soroban_sdk::token::Client::new(&env, &token_addr);
token_client.transfer(&admin, &user, &reward);



## Successfully Running CI/CD Pipeline :

1. Soroban Contract CI :
<img width="1903" height="877" alt="Screenshot 2026-04-10 224714" src="https://github.com/user-attachments/assets/c6b36a00-1b9d-41ca-8cd3-1e6e8a9f34d9" />


2. Frontend CI  :
<img width="1913" height="876" alt="Screenshot 2026-04-10 224646" src="https://github.com/user-attachments/assets/0e410bbe-0d11-43ae-abd1-e8b144b750bf" />

therefore, Successfully running 2 jobs.


## Mobile View :

<img width="305" height="675" alt="Screenshot 2026-03-26 172141" src="https://github.com/user-attachments/assets/7422121d-7dcc-4199-b277-bac99d47634e" />



   
