

export const downloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = process.env.PUBLIC_URL + "/Pdf/" + "Manikant-Kumar-Resume.pdf";
    anchor.download = 'Manikant-Kumar-Resume.pdf';
    anchor.click();
    window.open("https://drive.google.com/file/d/1JX0x0TlzWKIg2job7RJBRAASFkYkCfAs/view?usp=sharing", "_blank")
}