export const calculateParallelPosition = (clientX: number, clientY: number, categoryElement: HTMLElement, fieldElement: HTMLElement) => {
    return {
        x: ((clientX - categoryElement.offsetLeft - fieldElement.offsetLeft) - categoryElement.offsetWidth) * -1,
        y: ((clientY - categoryElement.offsetTop - fieldElement.offsetTop) - categoryElement.offsetHeight) * -1,
    };
}

export const colors = ['#FFF', '#FFA277', '#1DB2D7', '#ACBDC5', '#FEBD3E', '#6877E1'];

export const getRandomColor = (nesting: number) => {
    return colors[nesting];
}