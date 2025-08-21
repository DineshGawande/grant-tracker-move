import React, { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

// 👉 Replace with your deployed account
const CONTRACT_ADDRESS = "0xc8495583a8902b0e1e4c38f6a5d89272cf85b5ffa05bbfa69d6b2fffda603840";
const MODULE_NAME = "GrantTracker";

export default function GrantApp() {
  const { connect, disconnect, account, signAndSubmitTransaction } = useWallet();

  const [recipient, setRecipient] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [milestones, setMilestones] = useState("20,30,50");
  const [milestoneIndex, setMilestoneIndex] = useState("");
  const [grantInfo, setGrantInfo] = useState<any>(null);

  // ✅ Create Grant
  const createGrant = async () => {
    const payload = {
      type: "entry_function_payload",
      function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::create_grant`,
      arguments: [
        recipient,
        parseInt(totalAmount),
        milestones.split(",").map((x) => parseInt(x)),
      ],
      type_arguments: [],
    };

    try {
      const response = await signAndSubmitTransaction({ payload });
      console.log("✅ Grant Created:", response.hash);
      await fetchGrant();
    } catch (err) {
      console.error("❌ Grant creation failed:", err);
    }
  };

  // ✅ Attest Milestone
  const attestMilestone = async () => {
    const payload = {
      type: "entry_function_payload",
      function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::attest_and_payout_milestone`,
      arguments: [parseInt(milestoneIndex)],
      type_arguments: [],
    };

    try {
      const response = await signAndSubmitTransaction({ payload });
      console.log("✅ Milestone Paid:", response.hash);
      await fetchGrant();
    } catch (err) {
      console.error("❌ Payout failed:", err);
    }
  };

  // 📊 Fetch Grant Details
  const fetchGrant = async () => {
    try {
      const resource = await client.getAccountResource({
        accountAddress: CONTRACT_ADDRESS,
        resourceType: `${CONTRACT_ADDRESS}::${MODULE_NAME}::Grant`,
      });
      setGrantInfo(resource);
      console.log("Grant Resource:", resource);
    } catch (err) {
      console.error("❌ No grant found:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎯 Grant Compliance Tracker</h1>

      {!account ? (
        <button onClick={connect}>🔗 Connect Petra</button>
      ) : (
        <>
          <p>Connected: {account.address}</p>
          <button onClick={disconnect}>Disconnect</button>

          <h2>Create Grant</h2>
          <input
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            placeholder="Total Amount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
          <input
            placeholder="Milestones (comma-separated %)"
            value={milestones}
            onChange={(e) => setMilestones(e.target.value)}
          />
          <button onClick={createGrant}>Create Grant</button>

          <h2>Attest & Payout Milestone</h2>
          <input
            placeholder="Milestone Index"
            value={milestoneIndex}
            onChange={(e) => setMilestoneIndex(e.target.value)}
          />
          <button onClick={attestMilestone}>Pay Milestone</button>

          <h2>Grant Details</h2>
          <button onClick={fetchGrant}>Fetch Grant</button>
          {grantInfo && (
            <pre style={{ background: "#111", color: "#0f0", padding: "10px" }}>
              {JSON.stringify(grantInfo.data, null, 2)}
            </pre>
          )}
        </>
      )}
    </div>
  );
}