# 📌 Grant Compliance Tracker

## 📖 Description  
The **Grant Compliance Tracker** is a decentralized application (dApp) built on the **Aptos blockchain**.  
It provides a **transparent and immutable system** for managing the disbursement of grants to faculty and students.  

The dApp automates and secures two critical processes:  
- **Milestone Attestation** – immutably records the completion of project milestones.  
- **Scheduled Payouts** – automatically transfers funds to the grant recipient once a milestone is attested.  

The core logic of the system is implemented in a **Move smart contract**, ensuring that all actions are verifiable, tamper-proof, and secure.

---

## 🌍 Vision  
The vision of this project is to **redefine grant management** by making it:  
- ✅ **Transparent** – every milestone and payout is recorded on-chain.  
- ✅ **Accountable** – funds can only be released after proper milestone validation.  
- ✅ **Efficient** – eliminates manual fund tracking and delayed disbursements.  
- ✅ **Inclusive** – empowers institutions, faculty, and students with trustless funding mechanisms.  

---

## 🚀 Future Scope  
In the future, this project can be expanded to include:  
1. **Multi-grant dashboards** – for institutions to track multiple grants at once.  
2. **Notifications** – automatic alerts for milestone completions and payouts.  
3. **Role-based permissions** – allowing multiple reviewers to attest milestones.  
4. **Analytics & Reports** – generate compliance reports for auditing purposes.  
5. **Cross-chain expansion** – support for other blockchain ecosystems.  
6. **Integration with fiat on/off ramps** – enabling seamless fund transfers between blockchain and banks.  

---

## 🔗 Contract Address  
The smart contract has been successfully deployed on **Aptos Devnet**.  

- **Deployer Address:**  
`0xac9d759578cba5eaf0f9c9af9e1295089e05debbde3fa2c98bc8841318567f35`

- **Latest Transaction (Devnet):**  
[View on Aptos Explorer](https://explorer.aptoslabs.com/txn/0x5f5562a77f9b63b8709b7cbc42d12ffaf50ef1ebc87246c70f6a2df0340ddf55?network=devnet)

---

## 📂 Project Overview  
- **Smart Contract File:** `project.move`  
- **Key Functions:**
  - `create_grant(grantor, recipient, total_amount, milestone_payouts)` → Creates a new grant.  
  - `attest_and_payout_milestone(grantor, milestone_index)` → Attests a milestone & releases payout.  

---

## 📜 License  
This project is released under the **MIT License**.  
