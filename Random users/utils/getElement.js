const get = (selection) => {
    const element = document.querySelector(selection);
    if (element)
        return element;
    throw new Error('no element selected');
}

export default get;