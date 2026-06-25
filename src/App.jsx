import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

import heroImg from "./assets/hero.jpeg";

import guideImg from "./assets/Guide.jpeg";
import hi4Img from "./assets/hi4.jpeg";
import launchingImg from "./assets/launching.jpeg";
import visionImg from "./assets/Vision.jpeg";
import communityyImg from "./assets/communityy.jpeg";
const projects = [
  {
    id: 1,
    title: "🏀 Community Court Development",
    image: communityyImg,
    goal: "$250,000",
    raised: "$152,000",
    progress: 61,
    description:
      "Building safe, modern basketball courts where children can play, learn teamwork, and grow.",
  },
  {
    id: 2,
    title: "🍎 Children's Nutrition Initiative",
    image: visionImg,
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
    image: hi4Img,
    raised: "$28,000",
    progress: 56,
    description:
      "Helping families with clothing, footwear, hygiene products, and school supplies.",
  },
  {
    id: 4,
    title: "📚 Education & Youth Development",
    image: launchingImg,
    goal: "$100,000",
    raised: "$68,000",
    progress: 68,
    description:
      "Supporting education, mentorship, tutoring, and youth development initiatives.",
  },
  {
    id: 5,
    title: "❤️ Emergency Children's Support Fund",
    image: guideImg,
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
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  function handleDonate(project) {
    setSelectedProject(project);
    setPaymentMethod("");
    setAmount("");
    setPaymentSubmitted(false);
  }

  function handlePayment() {
    setPaymentSubmitted(true);
  }

  return (
    <div className="app">
      <section className="hero">
        <h1 className="logo">Community Impact Foundation</h1>

        <img
          src={heroImg}
          alt="Community Impact Foundation"
          className="hero-image"
        />

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
      <section className="projects-section">
        <h2>Our Active Projects</h2>
        <p>
          Every contribution supports real initiatives that improve lives,
          strengthen communities, and create lasting impact.
        </p>
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

              <p>bc1qxl97mxxe42qkvks0z77lycsnnlm9sz075hrasj</p>
            </div>
          )}

          <a
            className="telegram-link"
            href="https://t.me/sohiechaminitiative"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need assistance? Chat with an agent on Telegram →
          </a>

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
            <h3>Community Impact Foundation</h3>

            <p>
              Building stronger communities through education, nutrition, sports
              and emergency support initiatives.
            </p>

            <p>Telegram Support: @sohiechaminitiative</p>
          </footer>
        </div>
      )}
    </div>
  );
}
