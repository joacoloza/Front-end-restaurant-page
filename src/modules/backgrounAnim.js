
export function backAnim(){
    const bckgroundAnim = document.getElementById('backgroundAnim');

    const numOfColorBoxes = 400;

    for(let i=0; i < numOfColorBoxes; i++){
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        bckgroundAnim.append(colorBox);
    }
}