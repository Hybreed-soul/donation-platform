import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "🏀 Community Court Development",
    goal: "$250,000",
    raised: "$152,000",
    progress: 61,
    description:
      "Building safe, modern basketball courts where children can play, learn teamwork, and grow.",
  },
  {
    id: 2,
    title: "🍎 Children's Nutrition Initiative",
    goal: "$75,000",
    raised: "$42,000",
    progress: 56,
    description:
      "Providing nutritious meals and feeding programs for children in underserved communities.",
  },
  {
    id: 3,
    title: "👕 Clothing & Essential Needs Program",
    goal: "$50,000",
    raised: "$28,000",
    progress: 56,
    description:
      "Helping families with clothing, footwear, hygiene products, and school supplies.",
  },
  {
    id: 4,
    title: "📚 Education & Youth Development",
    goal: "$100,000",
    raised: "$68,000",
    progress: 68,
    description:
      "Supporting education, mentorship, tutoring, and youth development initiatives.",
  },
  {
    id: 5,
    title: "❤️ Emergency Children's Support Fund",
    goal: "$25,000",
    raised: "$17,500",
    progress: 70,
    description:
      "Providing immediate assistance for children and families facing urgent hardship.",
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showTelegram, setShowTelegram] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  function handleDonate(project) {
    setSelectedProject(project);
    setPaymentMethod("");
    setAmount("");
    setShowTelegram(false);
    setPaymentSubmitted(false);
  }

  function handlePayment() {
    setPaymentSubmitted(true);
  }

  return (
    <div className="app">
      <section className="hero">
        <h1>Community Impact Foundation</h1>

        <p>
          Building Stronger Communities Through Action Every donation helps
          provide safe recreational spaces, educational opportunities, nutrition
          support, essential needs, and emergency assistance for children and
          families. Together, we can create lasting impact.
        </p>

        <div className="trust-badges">
          <div className="trust-badge">✓ Transparent Funding</div>

          <div className="trust-badge">✓ Community Driven</div>

          <div className="trust-badge">✓ Impact Focused</div>

          <div className="trust-badge">✓ Support Available</div>
        </div>
      </section>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDonate={() => handleDonate(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="donation-panel">
          <h2>Donate to: {selectedProject.title}</h2>

          <p>{selectedProject.description}</p>

          <input
            type="number"
            placeholder="Enter donation amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="bank">Bank Transfer</option>
            <option value="bitcoin">Bitcoin</option>
          </select>

          {paymentMethod === "bank" && (
            <div className="payment-details">
              <h3>Bank Transfer Details</h3>

              <p>
                <strong>Bank:</strong> Zenith Bank
              </p>

              <p>
                <strong>Account Name:</strong>
                Community Impact Foundation
              </p>

              <p>
                <strong>Account Number:</strong>
                1234567890
              </p>
            </div>
          )}

          {paymentMethod === "bitcoin" && (
            <div className="payment-details">
              <h3>Bitcoin Wallet</h3>

              <p>bc1qexamplewallet123456789</p>
            </div>
          )}

          <p
            className="telegram-link"
            onClick={() => setShowTelegram(!showTelegram)}
          >
            Can't make transfer? Talk to a customer agent
          </p>

          {showTelegram && (
            <div className="telegram-box">
              <strong>Telegram Support:</strong>
              <p>@CommunitySupport</p>
            </div>
          )}

          {paymentMethod && (
            <button className="payment-btn" onClick={handlePayment}>
              I've Made Payment
            </button>
          )}

          {paymentSubmitted && (
            <div className="success-box">
              <h3>✅ Thank You!</h3>

              <p>
                Your donation notification has been submitted. Our team will
                verify the payment shortly.
              </p>
            </div>
          )}
          <footer className="footer">
            <p>© 2026 Community Impact Foundation</p>

            <p>Building stronger communities together.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
