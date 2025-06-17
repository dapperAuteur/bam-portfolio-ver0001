"use client";

import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, RadarController } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  Title,
  Tooltip,
  Legend
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">{children}</h2>
);

const InfoCard = ({ children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const BenefitCard = ({ icon, title, text }) => (
  <InfoCard className="text-center">
    <div className="text-5xl mb-4 text-blue-500">{icon}</div>
    <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </InfoCard>
);

const DiaphragmaticBreathingInfographic = () => {
  const cardioChartRef = useRef(null);
  const voiceChartRef = useRef(null);

  useEffect(() => {
    let cardioChartInstance = null;
    let voiceChartInstance = null;

    if (cardioChartRef.current) {
      const cardioCtx = cardioChartRef.current.getContext('2d');
      cardioChartInstance = new ChartJS(cardioCtx, {
        type: 'bar',
        data: {
          labels: ['Heart Rate (bpm)', 'Systolic BP (mmHg)', 'Diastolic BP (mmHg)'],
          datasets: [
            {
              label: 'Typical State',
              data: [85, 135, 88],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'After Consistent Practice',
              data: [70, 125, 80],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: false, suggestedMin: 50 } },
          plugins: { legend: { position: 'top' } },
        },
      });
    }

    if (voiceChartRef.current) {
      const voiceCtx = voiceChartRef.current.getContext('2d');
      voiceChartInstance = new ChartJS(voiceCtx, {
        type: 'radar',
        data: {
          labels: ['Vocal Stamina', 'Breath Control', 'Vocal Power', 'Resonance', 'Reduced Strain'],
          datasets: [
            {
              label: 'With Diaphragmatic Support',
              data: [9, 9, 8, 8, 9],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { display: false },
              suggestedMin: 0,
              suggestedMax: 10,
              ticks: { backdropColor: 'transparent' }
            },
          },
        },
      });
    }

    return () => {
      if (cardioChartInstance) cardioChartInstance.destroy();
      if (voiceChartInstance) voiceChartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-blue-50 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            The Power of Breath: A Guide to Diaphragmatic Breathing
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Unlock health, longevity, and vocal excellence by mastering your body's most fundamental rhythm.
          </p>
        </header>

        <SectionTitle>What is Diaphragmatic Breathing?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <InfoCard>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">More Than Just a Deep Breath</h3>
            <p className="text-gray-600 mb-4">
              Often called "belly breathing," this is the practice of engaging your diaphragm, a large muscle at the base of your lungs designed to do ~80% of the work of breathing.
            </p>
            <p className="text-gray-600">
              It contrasts with shallow "chest breathing," which uses smaller neck and shoulder muscles, leading to tension and inefficiency. Learning this technique is about re-learning your body's natural, optimal way to breathe.
            </p>
          </InfoCard>
          <InfoCard>
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Visualizing the Mechanics</h3>
            <div className="flex justify-around items-center text-center">
              <div>
                <p className="font-semibold text-lg text-green-600">INHALE</p>
                <div className="text-4xl my-2">⬇️</div>
                <p className="bg-green-100 text-green-800 rounded-lg p-2">Belly Expands</p>
              </div>
              <div>
                <p className="font-semibold text-lg text-red-600">EXHALE</p>
                <div className="text-4xl my-2">⬆️</div>
                <p className="bg-red-100 text-red-800 rounded-lg p-2">Belly Falls</p>
              </div>
            </div>
          </InfoCard>
        </div>

        <SectionTitle>The Transformative Benefits</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <BenefitCard icon="📉" title="Stress & Anxiety Reduction" text="Directly activates your body's relaxation response ('rest and digest'), lowering stress hormones like cortisol." />
          <BenefitCard icon="🧠" title="Enhanced Focus" text="Improves sustained attention and cognitive performance by increasing oxygen saturation in the blood." />
          <BenefitCard icon="❤️" title="Cardiovascular Health" text="Contributes to lower resting heart rate, reduced blood pressure, and improved heart rate variability (HRV)." />
          <BenefitCard icon="🫁" title="Improved Respiratory Function" text="Strengthens the diaphragm muscle, enhances lung efficiency, and can provide complementary support for COPD and asthma." />
          <BenefitCard icon="🚶" title="Better Core Stability" text="Engages the diaphragm as a key postural muscle, improving core strength and reducing the risk of back pain." />
          <BenefitCard icon="🌟" title="Promotes Healthy Aging" text="Helps mitigate age-related declines in respiratory, cardiovascular, and cognitive function." />
        </div>
        
        <InfoCard className="mb-20">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">A Look at the Data: Physiological Changes</h3>
           <p className="text-center text-gray-600 mb-6">Consistent practice can lead to measurable improvements in key health markers.</p>
          <div className="h-96">
            <canvas ref={cardioChartRef}></canvas>
          </div>
        </InfoCard>

        <SectionTitle>How to Practice Effectively</SectionTitle>
        <InfoCard className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">The Core Technique (Beginner)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Lie Down Comfortably:</strong> On your back, knees bent, feet flat on the floor.</li>
                <li><strong>Hand Placement:</strong> Place one hand on your upper chest, the other on your belly. This is for feedback.</li>
                <li><strong>Inhale Through Nose:</strong> Breathe in slowly. Feel your belly rise and push your hand up. Your chest hand should stay still.</li>
                <li><strong>Exhale Slowly:</strong> Breathe out through your mouth. Feel your belly fall. Repeat gently and rhythmically.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Finding Your Rhythm</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Start Small:</strong> Begin with 5-10 minute sessions, 2-3 times per day.</li>
                <li><strong>Be Consistent:</strong> Regular practice is more important than long, infrequent sessions.</li>
                <li><strong>Stay Relaxed:</strong> The breath should be gentle and easy, not forced.</li>
                <li><strong>The Goal:</strong> To make diaphragmatic breathing your natural, default way of breathing.</li>
              </ul>
            </div>
          </div>
        </InfoCard>

        <SectionTitle>For Voiceover Artists & Speakers</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <InfoCard>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Your Voice's Power Source</h3>
                <p className="text-gray-600 mb-4">For any vocal professional, the breath is the engine. Proper diaphragmatic support is the key to control, stamina, and long-term vocal health.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Allows for longer, more complex sentences.</li>
                    <li>Reduces strain on delicate vocal cords.</li>
                    <li>Improves vocal power and resonance.</li>
                    <li>Prevents vocal fatigue during long sessions.</li>
                </ul>
            </InfoCard>
            <InfoCard>
                 <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Key Areas of Improvement</h3>
                <div className="h-80">
                    <canvas ref={voiceChartRef}></canvas>
                </div>
            </InfoCard>
        </div>

      </div>
    </div>
  );
};

export default DiaphragmaticBreathingInfographic;
