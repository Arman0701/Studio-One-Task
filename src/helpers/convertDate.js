export default function convertDate(date) {
    const humanReadable = new Date(date);
    return humanReadable.toLocaleDateString() + " " + humanReadable.toLocaleTimeString();
}
