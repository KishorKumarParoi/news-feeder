function convertDate(inputString) {
    // Create a Date object 
    const date = new Date(inputString);
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Extract components
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed, add 1 for human readability
    const year = date.getFullYear();

    // Return values in your desired format (modify as needed)
    return `${day} ${monthArray[month - 1]} ${year}`;
}

export default convertDate;