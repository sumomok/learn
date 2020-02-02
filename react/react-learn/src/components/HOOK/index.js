import React, { useState, useEffect } from 'react';
export default function HookState() {
    const [n, setN] = useState(0)
    return (
        <div>
            {n}
            <button onClick={() => {
                setN(n + 1);
            }}>åŠ ä¸€</button>
        </div>
    )
}
