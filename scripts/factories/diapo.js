function diapoFactory(datas) {
    const { portrait } = datas;
    const picture = `assets/photographers/${portrait}`;
    console.log(datas)
    console.log(picture)

    function getUserDiapoDOM(datas) {
    console.log('Yankee');
    console.log(datas);
        
    };
    return { portrait, getUserDiapoDOM }

}