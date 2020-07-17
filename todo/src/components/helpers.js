export default function capitalizeTitle(string) {
    let input = string;
    let capitalTitle = input.charAt(0).toUpperCase() +
        input.slice(1);
    return capitalTitle
}