import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function FeedbackCharts() {
    const data = {
        labels: ['Clarity %', 'Filler Words', 'Speaking Pace', 'Grammar Score'],
        datasets: [
            {
                label: 'Last Session Metrics',
                data: [88, 3, 120, 92],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                ],
            },
        ],
    };

    return (
        <div style={{ maxWidth: 700, margin: '2rem auto', padding: 20, boxShadow: '0 0 10px #ccc', borderRadius: 8 }}>
            <h2>Last Session Feedback Metrics</h2>
            <Bar data={data} />
        </div>
    );
}
