import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

export default function ProgressTracker() {
    const dates = ['2025-05-15', '2025-05-16', '2025-05-17', '2025-05-18', '2025-05-19', '2025-05-20'];
    const scores = [75, 78, 85, 90, 87, 89];
    const streaks = [2, 3, 4, 5, 6, 7];
    const badges = [0, 0, 1, 1, 2, 3];

    const sessionScoreData = {
        labels: dates,
        datasets: [
            {
                label: 'Session Score',
                data: scores,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 0.7)',
                tension: 0.3,
            },
        ],
    };

    const streakData = {
        labels: dates,
        datasets: [
            {
                label: 'Streak Days',
                data: streaks,
                backgroundColor: 'rgba(255, 159, 64, 0.7)',
            },
        ],
    };

    const badgesData = {
        labels: dates,
        datasets: [
            {
                label: 'Badges Earned',
                data: badges,
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            },
        ],
    };

    return (
        <div style={{ maxWidth: 900, margin: '2rem auto' }}>


            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
                <div style={{ marginBottom: 40, boxShadow: '0 0 10px #ccc', padding: 20, borderRadius: 8 }}>
                    <h2>Session vs Score</h2>
                    <Line data={sessionScoreData} />
                </div>
                <div style={{ flex: 1, boxShadow: '0 0 10px #ccc', padding: 20, borderRadius: 8 }}>
                    <h2>Streak Days</h2>
                    <Bar data={streakData} />
                </div>
                <div style={{ flex: 1, boxShadow: '0 0 10px #ccc', padding: 20, borderRadius: 8 }}>
                    <h2>Badges Earned Timeline</h2>
                    <Bar data={badgesData} />
                </div>
            </div>
        </div>
    );
}
