const queryHome = async () => {
    const response =  await fetch('https://noisoidrgiang.com/wp-json/wp/v2/pages/124');
    const data =  await response.json();
    const dataAcfLayout = data.acf.group_page_field.body_custom;
    
    return dataAcfLayout;
}

queryHome().then((data)=>{
    // console.log(data);
});