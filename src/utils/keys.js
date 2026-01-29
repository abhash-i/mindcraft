import { readFileSync } from 'fs';

let keys = {};
try {
    const data = readFileSync('./keys.json', 'utf8');
    keys = JSON.parse(data);
} catch (err) {
    console.warn('keys.json not found. Defaulting to environment variables.'); // still works with local models
}

let keyRotationIndex = {};

export function getKey(name) {
    let key = keys[name];

    if (key) {
        if (Array.isArray(key)) {
            if (key.length > 0) {
                let index = keyRotationIndex[name] || 0;
                let currentKey = key[index % key.length];
                keyRotationIndex[name] = (index + 1) % key.length;
                return currentKey;
            }
        } else {
            return key;
        }
    }

    // Fallback to env
    key = process.env[name];
    if (!key) {
        throw new Error(`API key "${name}" not found in keys.json or environment variables!`);
    }
    return key;
}

export function hasKey(name) {
    if (keys[name]) return true;
    return !!process.env[name];
}
