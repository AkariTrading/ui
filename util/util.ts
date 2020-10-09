
const toDateStrOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

export function toDateStr(timestamp: number) {
    return new Date(timestamp).toLocaleDateString("en-US", toDateStrOptions); // 9/17/2016
}