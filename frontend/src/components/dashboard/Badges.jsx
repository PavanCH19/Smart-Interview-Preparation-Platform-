import React from 'react';

const badges = [
    { id: 1, name: 'First Voice Session', earned: true },
    { id: 2, name: '5-Day Streak', earned: false },
    { id: 3, name: 'Perfect Clarity Score', earned: true },
];

export default function Badges() {
    return (
        <div style={{ maxWidth: 700, margin: '2rem auto' }}>
            <h2>Earned Badges</h2>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 20 }}>
                {badges.map((badge) => (
                    <div
                        key={badge.id}
                        style={{
                            flex: '1 1 150px',
                            padding: 20,
                            borderRadius: 8,
                            boxShadow: '0 0 8px #ddd',
                            backgroundColor: badge.earned ? '#ffe066' : '#eee',
                            color: badge.earned ? '#333' : '#999',
                            textAlign: 'center',
                        }}
                    >
                        <div style={{ fontSize: 40, marginBottom: 10 }}>🏅</div>
                        <h4>{badge.name}</h4>
                        <p>{badge.earned ? 'Earned' : 'Locked'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
