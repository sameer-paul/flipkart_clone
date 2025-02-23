const deepMerge = (target, source) => {
    for (const key in source) {
        if (source[key] && typeof source[key] === "object") {
            if (Array.isArray(source[key])) {
                // Merge arrays uniquely without duplicates
                target[key] = Array.isArray(target[key]) 
                    ? [...new Set([...target[key], ...source[key]])] 
                    : source[key]; 
            } else {
                // Merge nested objects
                if (!target[key] || typeof target[key] !== "object") {
                    target[key] = {}; 
                }
                deepMerge(target[key], source[key]); 
            }
        } else {
            // Directly assign non-object values
            target[key] = source[key];
        }
    }
    return target;
};

export default deepMerge