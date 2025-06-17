"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import { GoogleGenerativeAI } from '@google/generative-ai';
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-pro" }) : null;

export default function DiaphragmaticBreathingInfographic() {
  const [activeTab, setActiveTab] = useState('why-practice');
  const [showBenefitModal, setShowBenefitModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('Loading insights...');
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState('');

  // Chart.js State and Data
  const [heartRateData, setHeartRateData] = useState({
    labels: ['Before', 'After'],
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: [75, 60], // Initial data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const updateHeartRate = (before: number, after: number) => {
    setHeartRateData({
      labels: ['Before', 'After'],
      datasets: [
        {
          label: 'Heart Rate (bpm)',
          data: [before, after],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });
  };

  // Breathing Animation State
  const [isBreathingAnimating, setIsBreathingAnimating] = useState(false);

  // Gemini API Call Function
  const fetchGeminiInsight = async (benefitName: string) => {
    if (!model) {
      setModalContent("AI functionality is not available. API Key is missing or invalid.");
      return;
    }

    setModalLoading(true);
    setModalError('');
    setModalContent("Generating insights with AI..."); // Set loading text
    try {
      const prompt = `Explain the benefit of diaphragmatic breathing related to "${benefitName}". Provide a concise, clear, and informative explanation for a general audience. Focus on the physiological or psychological mechanisms.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;

      if (response.candidates && response.candidates.length > 0 &&
          response.candidates[0].content && response.candidates[0].content.parts &&
          response.candidates[0].content.parts.length > 0) {
        const text = response.candidates[0].content.parts[0].text;
        setModalContent(text);
      } else {
        throw new Error("No content received from API or unexpected response structure for benefit explanation.");
      }
    } catch (error: any) {
      console.error(`Error explaining benefit "${benefitName}":`, error);
      setModalContent("Sorry, we couldn't fetch more details at this time. Please try again later.");
      setModalError(`Error: ${error.message}. Check console for details.`);
    } finally {
      setModalLoading(false);
    }
  };

  // Tab Content Data (to easily render sections)
  const tabContents: { [key: string]: React.ReactNode } = {
    'why-practice': (
      <div id="why-practice-content">
        <h3 className="text-2xl font-semibold text-card-text mb-4">The Science Behind the Breath</h3>
        <p className="text-secondaryText mb-4">
          Understanding the physiological impact of diaphragmatic breathing. This section illustrates how deep breathing affects your heart rate and overall well-being. By engaging the vagus nerve, diaphragmatic breathing helps to slow your heart rate and lower blood pressure, promoting a state of calm.
        </p>
        <div className="chart-container relative w-full max-w-2xl mx-auto h-64 md:h-80 bg-page-background rounded-lg p-4 shadow-inner mt-6">
          <Line data={heartRateData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => updateHeartRate(75, 60)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Show Typical Improvement
          </button>
          <button
            onClick={() => updateHeartRate(80, 70)} // Example for slightly different values
            className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Simulate Stress & Relax
          </button>
        </div>
        <p className="text-secondaryText mt-4 text-center text-sm">
          *Illustrative data. Actual results may vary.
        </p>
      </div>
    ),
    'how-to': (
      <div id="how-to-content">
        <h3 className="text-2xl font-semibold text-card-text mb-4">Mastering the Technique</h3>
        <p className="text-secondaryText mb-4">
          Follow these steps to correctly perform diaphragmatic breathing. The animation below visually guides you through the process, emphasizing the gentle rise and fall of the abdomen.
        </p>
        {/* Breathing Animation */}
        <div className="flex flex-col items-center justify-center min-h-[250px] relative">
          <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-light flex items-center justify-center shadow-lg transition-all duration-1000 ease-in-out ${isBreathingAnimating ? 'animate-inhale-exhale' : ''}`}>
            <span className="text-primary font-bold text-lg">{isBreathingAnimating ? 'Inhale' : 'Exhale'}</span>
          </div>
          <p className="text-secondaryText mt-4">Place one hand on your chest, the other on your belly.</p>
          <button
            onClick={() => setIsBreathingAnimating(!isBreathingAnimating)}
            className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            {isBreathingAnimating ? 'Stop Animation' : 'Start Breathing Guide'}
          </button>
          <p className="text-secondaryText mt-4 text-center text-sm">
            Focus on your belly rising on inhale and falling on exhale.
          </p>
        </div>
        {/* CSS for animation (will be added to globals.css or a dedicated CSS module) */}
        <style jsx>{`
          @keyframes inhale-exhale {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-inhale-exhale {
            animation: inhale-exhale 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    ),
    'benefits': (
      <div id="benefits-content">
        <h3 className="text-2xl font-semibold text-card-text mb-4">Profound Benefits Await</h3>
        <p className="text-secondaryText mb-6">
          Diaphragmatic breathing offers a wide array of advantages for both physical and mental health. Click on any benefit to get an AI-powered explanation!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Stress Reduction', 'Improved Oxygenation', 'Lower Blood Pressure',
            'Enhanced Digestion', 'Better Sleep Quality', 'Increased Energy',
            'Pain Management', 'Emotional Regulation', 'Core Strength', 'Improved Voice Control'
          ].map((benefit) => (
            <div
              key={benefit}
              className="benefit-card bg-card-background rounded-xl shadow-md p-6 text-center border border-card-border cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => {
                setModalTitle(benefit);
                setShowBenefitModal(true);
                fetchGeminiInsight(benefit);
              }}
            >
              <h4 className="text-xl font-semibold text-card-text mb-2">{benefit}</h4>
            </div>
          ))}
        </div>
      </div>
    ),
    'faqs': (
      <div id="faqs-content">
        <h3 className="text-2xl font-semibold text-card-text mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="bg-card-background rounded-lg shadow-md p-4 border border-card-border">
            <summary className="font-semibold text-card-text cursor-pointer hover:text-primary transition-colors duration-200">
              How often should I practice diaphragmatic breathing?
            </summary>
            <p className="text-secondaryText mt-2">
              Start with 5-10 minutes a day, gradually increasing to 15-20 minutes, 2-3 times a day. Consistency is key to experiencing its full benefits.
            </p>
          </details>
          <details className="bg-card-background rounded-lg shadow-md p-4 border border-card-border">
            <summary className="font-semibold text-card-text cursor-pointer hover:text-primary transition-colors duration-200">
              Can I do diaphragmatic breathing while standing?
            </summary>
            <p className="text-secondaryText mt-2">
              Yes, but it&apos;s often easiest to learn lying down or sitting to fully feel the diaphragm&apos;s movement. Once comfortable, you can practice in any position.
            </p>
          </details>
          <details className="bg-card-background rounded-lg shadow-md p-4 border border-card-border">
            <summary className="font-semibold text-card-text cursor-pointer hover:text-primary transition-colors duration-200">
              Is it normal to feel dizzy or lightheaded?
            </summary>
            <p className="text-secondaryText mt-2">
              Initially, some people might experience slight dizziness due to increased oxygen intake. If this happens, slow down your breathing and take a break. It usually subsides with practice.
            </p>
          </details>
        </div>
      </div>
    ),
  };


  return (
    <div className="container mx-auto px-4 py-8 bg-page-background text-page-text">
      <Link href="/blog" className="text-primary hover:underline mb-8 inline-block text-lg">
        &larr; Back to Blog Posts
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
        The Power of Breath: Diaphragmatic Breathing Infographic
      </h1>
      <p className="text-lg text-center text-secondaryText mb-12 max-w-3xl mx-auto">
        Explore the profound benefits of diaphragmatic breathing with an interactive guide and AI-powered insights.
      </p>

      {/* Tabs Navigation */}
      <section className="mb-12">
        <div className="flex justify-center border-b border-card-border mb-8 overflow-x-auto">
          {['why-practice', 'how-to', 'benefits', 'faqs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium whitespace-nowrap
                ${activeTab === tab
                  ? 'text-primary border-b-2 border-primary-dark'
                  : 'text-page-text hover:text-primary-dark'
                }
                transition-colors duration-200`}
            >
              {tab.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="tab-content-wrapper bg-card-background rounded-xl shadow-lg p-6 md:p-8 border border-card-border">
          {tabContents[activeTab]}
        </div>
      </section>

      {/* AI Benefit Modal */}
      {showBenefitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-page-background rounded-lg shadow-xl max-w-lg w-full p-6 relative">
            <h3 className="text-2xl font-bold text-primary mb-4">{modalTitle}</h3>
            {modalLoading && (
              <div className="flex items-center justify-center text-secondaryText">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading AI insight...
              </div>
            )}
            {modalError && (
              <p className="text-red-500 mb-4">{modalError}</p>
            )}
            <p className="text-page-text mb-6 whitespace-pre-wrap">{modalContent}</p>
            <button
              onClick={() => {
                setShowBenefitModal(false);
                setModalContent(''); // Clear content on close
                setModalError('');
              }}
              className="absolute top-4 right-4 text-page-text hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}