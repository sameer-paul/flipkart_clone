const checkMissingField = (schemaFields, data, excludeFields) => {
    const missingFields = []
    for (const key of schemaFields) {
        if (excludeFields.includes(key)) continue;

        const value = data[key];

        // If field is missing or explicitly empty
        if (value === undefined || value === null || value === "") {
            missingFields.push(key);
            continue;
        }

        // If the field is an object (not an array), check its properties recursively
        if (typeof value === "object" && !Array.isArray(value)) {
            const nestedFields = Object.keys(value);
            const nestedMissing = checkMissingField(nestedFields, value, excludeFields);
            missingFields.push(...nestedMissing);
        }
    }
    return missingFields; // Return an array of missing fields
};

export default checkMissingField;
