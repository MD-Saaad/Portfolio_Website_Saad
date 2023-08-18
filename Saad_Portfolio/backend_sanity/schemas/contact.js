export default {
    name: 'contact',
    title: 'Contact',
    type:'document',
    fields: [
        {
            name:'name',
            title: 'Name',
            type:'string'
        },
        {
            name:'company',
            title: 'Company',
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
        {
            name:'feedback',
            title: 'Feedback',
            type:'string'
        },
    ],
}