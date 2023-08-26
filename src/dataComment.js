
const dataFun = () => {
    let data = {
        "id" : 1,
        "items":[
            // {
            //     "id" : 13535,
            //     "name" : "Rani12",
            //     "text" : "hello",
            //     "like" : 10,
            //     "items":[
            //         {
            //             "id" : 56786464,
            //             "name" : "Rani12",
            //             "text" : "Hi",
            //             "like" : 2,
            //             "items":[
            //                 {
            //                     "id" : 78673673,
            //                     "name" : "Rani12",
            //                     "text" : "Hi Rani",
            //                     "like" : 0,
            //                     "items": []
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     "id" : 234321,
            //     "name" : "Rani12",
            //     "text" : "HEllo",
            //     "like" : 5,
            //     "items":[
            //         {
            //             "id" : 87650987,
            //             "name" : "Rani12",
            //             "text" : "Hi",
            //             "like" : 2,
            //             "items": []
            //         }
            //     ]
            // }
        ]
    }
    const storedData = JSON.parse(sessionStorage.getItem('myData'));
    if(storedData){
        data = storedData
    }
    return data;
}
export default dataFun;