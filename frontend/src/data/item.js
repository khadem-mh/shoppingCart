const productsList = [
    {
        id: 1,
        title: 'RegExp',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque voluptate enim.',
        price: 70,
        image: '/Images/products/api.png'
    },
    {
        id: 2,
        title: 'React Js',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque voluptate enim.',
        price: 200,
        image: '/Images/products/deploy.png'
    },
    {
        id: 3,
        title: 'Next Js',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque voluptate enim.',
        price: 50,
        image: '/Images/products/logaritm.png'
    },
    {
        id: 4,
        title: 'Html5 and Css3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque voluptate enim.',
        price: 100,
        image: '/Images/products/badusb.png'
    },
]

const getProduct = ID => productsList.find(product => product.id === ID)

export {
    productsList,
    getProduct
}
