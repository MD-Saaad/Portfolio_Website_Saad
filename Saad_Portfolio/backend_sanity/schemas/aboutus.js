export default {
    name: 'aboutus',
    title: 'Aboutus',
    type:'document',
    fields: [
        {
            name:'title',
            title: 'Title',
            type:'string'
        },
        {
            name:'description',
            title: 'Description',
            type:'string'
        },
        {
            name:'imgurl',
            title: 'Imgurl',
            type:'image',
            options:{
                hotspot: true
            }
        },
       
    ],
}