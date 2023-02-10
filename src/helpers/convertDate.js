export default function convertDate(date = Date.now()) {
    const humanReadable = new Date(date);
    return humanReadable.toLocaleDateString() + " " + humanReadable.toLocaleTimeString();
}
