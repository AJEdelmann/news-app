export function formatDate(dt) {
    return new Date(dt).toJSON().slice(0, 10);
}