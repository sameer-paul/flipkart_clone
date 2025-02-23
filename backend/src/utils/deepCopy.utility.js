const deepCopy = (obj) => {
    const type = typeof  obj;
    if(type!=='object' || !obj) return obj;
    return Object.fromEntries(Object.entries(obj).map(([key,value]) =>[key,deepClone(value)])); 
}

export default deepCopy