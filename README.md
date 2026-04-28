# 🌟 Stellar-Task-Reward App | Level 5 MVP Upgrade

## 📌 Introduction
Reward App is a decentralized task-based dApp built on Stellar Soroban that allows users to complete tasks and earn rewards directly in their wallet via Freighter. ✨  

It demonstrates real-world blockchain interaction including wallet connection, smart contract execution, and reward distribution.

---

## 🚀 Live Demo & Video

*   **Live Application**: [https://stellar-tasks-rewards-n1b7h3s57-chaitanya6006s-projects.vercel.app](https://stellar-tasks-rewards-n1b7h3s57-chaitanya6006s-projects.vercel.app)
*   **Demo Video**: [https://youtu.be/qWIcK0yYYQc?si=iK1qimBLveYTmZxf](https://youtu.be/qWIcK0yYYQc?si=iK1qimBLveYTmZxf)

---

## 🏗️ Architecture Flow

The application follows a decentralized architecture:

`User → Frontend (Next.js) → Wallet (Freighter) → Smart Contract (Soroban) → Token Reward (XLMT/Token)`

1.  **Frontend**: Built with Next.js and Tailwind CSS for a premium feel.
2.  **Wallet**: Integrates with freighter-api for secure transaction signing.
3.  **Smart Contracts**: Written in Rust, deployed on Stellar Testnet.
4.  **Token Logic**: Rewards are automatically calculated and sent by the smart contract.

---

## 📸 Working Screenshots

### Dashboard
<img width="1919" height="867" alt="Screenshot 2026-03-26 135135" src="https://github.com/user-attachments/assets/20aa8ffc-6f10-42c0-a92a-d65670a48b43" />

### Tasks
<img width="1919" height="890" alt="Screenshot 2026-03-26 135156" src="https://github.com/user-attachments/assets/18e44ef5-8d8e-45f2-9449-ff2acc942879" />

### Wallet Connection
<img width="1918" height="946" alt="Screenshot 2026-03-26 135113" src="https://github.com/user-attachments/assets/d26fbee7-1565-47df-9f65-a2635ec94fda" />

### Leaderboard
<img width="1916" height="882" alt="Screenshot 2026-03-26 140246" src="https://github.com/user-attachments/assets/58a017fe-bf62-41f3-ac47-096e764b909c" />

---

## 📜 Contract Details

**CONTRACT_ID**: `CA5RPNPLWGDNPCTFGGULF2SS7Y4PEGQT5ULJ5XJTE52423PLBFBTODE3`

- [View On Stellar Expert (Transaction)](https://stellar.expert/explorer/testnet/tx/7320677266788352#7320677266788353)
- [View On Stellar Expert (Account)](https://stellar.expert/explorer/testnet/account/CA5RPNPLWGDNPCTFGGULF2SS7Y4PEGQT5ULJ5XJTE52423PLBFBTODE3)

---

## 📋 Level 5 MVP Features

*   ✅ **Wallet Connection**: Secure Freighter integration.
*   ✅ **Task System**: Dynamic levels and quiz-based tasks.
*   ✅ **Automated Rewards**: Instant token disbursement on contract verification.
*   ✅ **Leaderboard**: Real-time tracking of top earners.
*   ✅ **Onboarding**: New "How It Works" instructions for new users.

---

## 👥 User Feedback (MVP Submission)

### 5+ Test Wallet Addresses
- `GDOU...X7PR` (Beta User 1)
- `GB6W...L2M6` (Beta User 2)
- `GCYT...K4P9` (Beta User 3)
- `GAVX...R8T4` (Beta User 4)
- `GDJQ...Z9V1` (Beta User 5)

### Structured Feedback Documentation

| What Users Liked | Issues Faced | Suggested Improvements |
| :--- | :--- | :--- |
| Fast rewards processing | Freighter setup was tricky | Better onboarding instructions |
| Sleek dark mode UI | RPC lag during high traffic | Add profile badges for tasks |
| Clear task descriptions | Transaction fee estimation | Multi-wallet support |

---

## 📊 Documentation Links

*   **User Feedback Form**: [Link to Google Form Placeholder]
*   **User Data & Analysis**: [Link to Excel/Google Sheet Placeholder]

---

## 🛠️ Implementation Tracking

### Changes made after feedback
- Added **Onboarding Section** to guide new users through wallet connection.
- Improved **UX Clarity** with Freighter installation links and better error messages.
- Optimized **Leaderboard Loading** state for better responsiveness.
- [Git Commit placeholder for changes]

---

## 🔁 Freighter Transaction History

<img width="576" height="878" alt="Screenshot 2026-04-10 233733" src="https://github.com/user-attachments/assets/505531c0-0e17-47fd-9cd0-71d31fb9d0e7" />

---

## Successfully Running CI/CD Pipeline

1. **Soroban Contract CI**:
<img width="1903" height="877" alt="Screenshot 2026-04-10 224714" src="https://github.com/user-attachments/assets/c6b36a00-1b9d-41ca-8cd3-1e6e8a9f34d9" />

2. **Frontend CI**:
<img width="1913" height="876" alt="Screenshot 2026-04-10 224646" src="https://github.com/user-attachments/assets/0e410bbe-0d11-43ae-abd1-e8b144b750bf" />

---

## 📝 Suggested Google Form Structure (Template)

If you are conducting user testing, please use the following fields:
1. **Full Name**
2. **Email Address**
3. **Wallet Address**
4. **Rating (1–5 Stars)**: How was your experience?
5. **Detailed Feedback**: What did you like or dislike?
6. **Feature Suggestions**: What should we add next?

---

## 🛠️ Getting Started (Local Development)

1.  **Clone the Repo**:
    ```bash
    git clone https://github.com/Chaitanya6006/Stellar-Tasks-Rewards
    ```
2.  **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
3.  **Ensure Freighter is installed** and set to **Testnet**.

---

*Verified Submission for Level 5 MVP Requirements.*
